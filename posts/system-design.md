---
title: "Web App Arch / System Design"
subtitle: "Overview of learnings about architectures and patterns from books like System Design Interview Insiders Vol 1"
date: "2024-08-05"
status: "In Progress"
---

Notes taken while reading `System Design Interview – An insider's guide` by Alex Xu

### Scaling

- Vertical scaling, referred to as “scale up”, means the process of adding more power (CPU, RAM, etc.) to your servers. Horizontal scaling, referred to as “scale-out”, allows you to scale by adding more servers into your pool of resources. Usually, horizontal scaling is the way to go, to avoid single points of failure, and the expense of over-powered servers. Horizontal scaling comes with failover and redundancy benefits.
  - Horizontal scaling of database servers is called `sharding`. Each shard shares the same schema, though the actual data on each shard is unique to the shard. A hash functions (function with sharding key) is used to find the right shard at access time.
- Load balancing: Private IPs between load balancer and servers to prevent direct server communication
- Database replication: Usually master/slaves. A master database generally only supports write operations. A slave database gets copies of the data from the master database and only supports read operations. All the data-modifying commands like insert, delete, or update must be sent to the master database. Most applications require a much higher ratio of reads to writes; This model improves performance because it allows more queries to be processed in parallel. Slaves can be promoted to masters if needed, after running data recovery scripts. More complex replication methods are multi-masters and circular replication.
- Caching strategies depend on dat type, size, and access patterns. The most common is a `read-through cache`: if a request is not a cach hit, the CDN queries the DB, stores the response, then sends it back to the client.
  - Use cache when data is read frequently but modified infrequently
  - Use cache when volatile memory is sufficient; not for persistent data. Also recommend `expiration policy` (TTL = time to live) and `eviction policy` (LFU = Least Frequently Used)
  - Inconsistency can happen because data-modifying operations on the data store and cache are not in a single transaction
- A CDN is a network of geographically dispersed servers used to deliver static content. CDN servers cache static content. Dynamic content caching is a relatively new concept and beyond the scope of this book. There should be a fallback in place (direct request from origin if CDN is unavailable).
- Query strings with version numbers are a good way to invalidate cached files.
- **Geographic data centers encompass web servers, databases, and caches. They may also include message queues and workers. The DNS load balancer handles geo routing.**

### Message Queue / Event Queue

This is a preferred architecture for scalability and reliability.

- "a durable component, stored in memory"
- intelligently distributes asynchronous requests
- producers can post messages when consumers are unavailable
- consumers (e.g. job workers) can read messages wehn producers are unavailable
- producers and consumers can be scaled independently, e.g. when the queue gets backed up, or by time of day

### Chapter 1 summary

- Keep web tier stateless
- Build redundancy at every tier
- Cache data as much as you can
- Support multiple data centers
- Host static assets in CDN
- Scale your data tier by sharding
- Split tiers into individual services
- Monitor your system and use automation tools

### Capacity / performance estimation

- power of two: Binary units for data volume. **1 byte = 8 bits = 1 ASCII character**, 1TB = 1 Terabyte = 1 trillion bits
- latency numbers every programmer should know
  - Cache reference = low nanosecond range, Main memory reference = 100 ns, packets round trip and reading from network are milliseconds range.
  - Remember nano is 1 billionth, micro is 1 millionth, milli is 1 thousandth
  - Simple compression algorithms are fast. Compress data before sending it over the internet if possible.
- availability numbers
  - Microsoft sets their availability at 99.9% or above (8.77 hours of downtime a year)

When estimating, consider

- QPS = queries per second
  - daily and monthly active users
  - peak usage times of day
- data capacity and network needs of standard and poweruser use
- amount and longevity of storage / cache / servers
- precision is not expected during an interview; round and sanity check
