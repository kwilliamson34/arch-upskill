---
title: "More System Design"
subtitle: "Continuing System Design Interview Insiders Vol 1"
date: "2024-08-08"
status: "In Progress"
---

Notes taken while reading `System Design Interview – An insider's guide` by Alex Xu, Chapters 4-5, and the rabbit holes that followed.

### Rate limiting

- A frame of reference or scale from the real world helps.
  - “Google docs APIs have the following default limit: 300 per user per 60 seconds for read requests”
  - “Rate limiting is usually implemented within a component called API gateway” cloud microservice
- Define objectives first
  - Reducing server cost
  - Preventing resource starvation caused by Denial of Service (DoS) attack
  - Identifying malicious IPs? may want an Iptable solution instead
- Ask scope questions, then state requirements
  - What kind of rate limiter are we going to design? Is it a client-side, server-side API rate limiter, or middleware?
  - Does the rate limiter throttle based on IP, the user ID, or other properties?
  - What is the scale of the system? Is it built for a startup or a big company with a large user base?
  - Will the system work in a distributed environment?
  - Is the rate limiter a separate service or should it be implemented in application code?
  - Do we need to inform users who are throttled?
  - Should we create hard or soft limiting rules?
- Know populare rate limiting algorithms
  - Token bucket: each API endpoint has a token bucket; each request consumes one token; tokens are added at a fixed rate. Good for burst traffic; used by Amazon and Stripe.
  - Leaking bucket: each API endpoint has a queue; each request gets added to the queue if not full; requests are processed at a fixed rate. Con: “A burst of traffic fills up the queue with old requests”
  - Fixed window counter: each request increments the counter, up to limit for that time window. Con: Windows can be front- or back-loaded; from middle of one window to middle of the next window, there could be overly high or overly low usage.
  - Sliding window log: FIFO stack where timestamps of requests are logged; if it gets full and earliest timestamp is within window, start dropping requests.
  - Sliding window counter: like previous, but rolling window is kind of prorated by fixed window overlap; this smooths out spikes in traffic without dropping so aggressively.
- How requests are stored by a rate limiter
  - using a database is not a good idea due to slowness of disk access
  - using in-memory cache (like Redis) is fast and supports time-based design
- How rules are stored: in configuration files saved on disk, which the service and workers can access via a cache
- Common user-facing response:
  - code 429 (too many requests)
  - alerting the client of how close they are to a rate limit, using X-prefixed HTTP headers that show "remaining" and "retry-after"
  - enqueuing requests for processing later
- Diagram
  - the rate limiting middlware sits betwen the client and the api servers. it also accesses the rules and redic cache frequently.
- Challenges of distributed systems
  - synchronization (e.g. with multiple rate limiters). Solution: single centralized redis cache that both access. Eventual consistency model.
  - race conditions (e.g. with redis counters close to thresholds). Solution: not locks, they're slow, but Lua Script and Sorted Redis Data Sets are complex
  - multi-data center setup is crucial for latency
- Monitoring
  - how many requests get dropped, is it acceptable
  - how well does it handle large spikes like bots or black friday sale
- Flip the problem: how to avoid being rate limited yourself
  - use client cache to avoid repetitive API calls
  - implement retry logic with a sufficient back off time
  - catch retry exceptions and present a good user experience

### API gateways

“API gateway is a fully managed service that supports rate limiting, SSL termination, authentication, IP whitelisting, servicing static content, etc”.
It can be a commercial 3rd party option, or home-rolled.

10 Top API Gateways and Management Tools

- Kong Gateway.
- Apache APISIX.
- Tyk.
- KrakenD.
- Gravitee.io.
- Apigee.
- Amazon API Gateway.
- Azure API Management.
- Ambassador.
- Gloo.

### Swagger

Swagger is a standard language for describing REST APIs, and an API Gateway is a fully managed service that helps developers create, publish, maintain, monitor, and secure APIs.

Swagger UI can be [easily combined](https://swagger.io/blog/api-development/introducing-the-amazon-api-gateway-integration/) with Amazon API Gateway.

### Redis

Redis is a fast, open-source, in-memory key-value data structure store. It's an acronym for REmote DIctionary Server.

It allows you to store key-value pairs on your RAM. Since accessing RAM is 150,000 times faster than accessing a disk, and 500 times faster than accessing SSD, it means speed. Since it is volatile memory, to prevent data loss from happening there is a built-in persistence module which writes the in-memory state to dump files on the disk on given occasions.

“Redis is a popular option to implement rate limiting. It is an in-memory store that offers two commands: INCR and EXPIRE.

- INCR: It increases the stored counter by 1.
- EXPIRE: It sets a timeout for the counter. If the timeout expires, the counter is automatically deleted.”

Beyond rate limiting, other usages include:

- Full page static cache
- user session cache

Redis runs as a process, the same way as MySQL, PHP, Apache, and all other services run. Redis has a built-in Master-Slave architecture, with Sentinels, for resiliency.

A well known alternative is Memcached. Also, PHP is commonly used with Redis.

### How config files work

- Saved "on disk" but that doesn't necessarily mean colocated with the services that use them
- workers pull them at regular intervals and sacve them to a cache
- services access them via cache, which is fast
- the rules cache is separate from the redis cache, in the rate limiter example, because the redis cache is the incrementer and changes much more frequently

### Edge functions

An edge function is a request-processing function implemented at the edge of an application. Examples include:

- Authentication — Verifying the identity of the client making the request.
- Authorization — Verifying that the client is authorized to perform that particular operation.
- Rate limiting — Limiting how many requests per second from either a specific client and/or from all clients.
- Caching — Cache responses to reduce the number of requests made to the services.
- Metrics collection — Collect metrics on API usage for billing analytics purposes.
- Request logging — Log requests.
- Payload transformation — An API Gateway should be able to provide the capabilities to modify requests/response payloads and translate protocols. It might provide a RESTful API to external clients.

### Consistent hashing

- A naive way to balance load across servers is to mod the hash key by the number of servers in the pool. This is not consistent and causes remapping / cache misses when the ppol size changes.
- Consistent hashing does not use a mod operator. Instead it uses kind of a clockwise lookup on a hash ring. The ring can grow and shrink without remapping keys.
- A hash key is the output from a hashing algorithm, where a specific input value is transformed into a distinct, unique string per input value. The specific input, in this case, is the primary key of a piece of data in a database.
- Data partitioning is a very real-world problem. Amazon Dynamo, Apache Cassandra, and Discord do it notably well.

The benefits of consistent hashing include:

- Minimal key redistribution when server pool grows or shrinks
- Easy horizontal scaling with even data distribution
- Mitigates the hotspot key problem (excessive access to a specific shard causing server overload)

### URL shortening with hash function

You can use a hashing algorithm such as MD5, SHA-256, or CRC32 to generate a hash value from the long URL. The hash value can then be encoded using base62 or base64 encoding to create a short URL. This approach provides a good balance between uniqueness and simplicity.

MD5 (Message Digest Method 5) is a cryptographic hash algorithm that generates a 128-bit digest from a string of any length. A minor change in the input string generates a drastically different digest.

Hashing is a one-way operation. It is designed to make decryption infeasible.

### Misc

TODO: look into how offline mode could work
TODO: basic authentication
