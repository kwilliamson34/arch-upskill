---
title: "System Design"
subtitle: "Learning about architectures and patterns from System Design Interview Insiders Vol 1"
date: "2024-08-05"
status: "Done with Todos"
---

Notes taken while reading `System Design Interview – An insider's guide` by Alex Xu, Chapters 1-3

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

In summary,

- Keep web tier stateless
- Build redundancy at every tier
- Cache data as much as you can
- Support multiple data centers
- Host static assets in CDN
- Scale your data tier by sharding
- Split tiers into individual services
- Monitor your system and use automation tools

### Basic system diagram

![image](/images/arch-diagram.png)
Credit: `System Design Interview – An insider's guide` by Alex Xu

### Message Queue / Event Queue

This is a preferred architecture for scalability and reliability.

- "a durable component, stored in memory"
- intelligently distributes asynchronous requests
- producers can post messages when consumers are unavailable
- consumers (e.g. job workers) can read messages wehn producers are unavailable
- producers and consumers can be scaled independently, e.g. when the queue gets backed up, or by time of day

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

### Mental framework for system design

- The key is to **resolve ambiguity constructively**
- Avoid red flags: over-engineering, not verbalizing tradeoffs
- Ask questions and converse first; then write down assumptions. **Do not assume your assumption is correct**-- just bc you wrote it doesn't mean the interviewer agrees.

Overall stick to 4 steps

1. Clarity of scope (3-10 min)
   - What specific features are we going to build? What are the most important features for this product?
   - How many users does the product have? What is the traffic volume?
   - How fast does the company anticipate to scale up? 3 months, 6 months, 1 year?
   - What is the company’s technology stack? What existing services you might leverage to simplify the design?
   - Is this greenfield development / for a young startup or an established company with standards?
   - What are the data type / size requirements? Do we need characteristics like sortability?
   - Can you give me example input and output/system behavior?
   - Do we know we need any analytics, or observability into user or system behavior, upfront?
2. Propose high-level design and get buy-in (10-15 min)
   - Ask for feedback on an inital blueprint
   - Suggest multiple approaches
   - Draw box diagrams, **including web servers, api / services, caches, CDN, message queue, etc**
   - Do quick math to show design meets scale constraints
   - Go through a few use cases; discover edge cases
   - Think about whether a message queue would be helpful
   - Offer to dive deeper on **API endpoints or DB schema** before proceeding
3. Design deep dive (10-25 min)
   - Follow the interviewer's lead / interest
   - Identify bottlenecks, reduce latency
   - Resource estimations or other performance characteristics
   - Deeper on some system component
   - Adding functionality, like offline mode
   - Expanding on resposibilites of web servers, like **authentication and rate limiting**
4. Wrap up (3-5 min)
   - Follow the interviewer's lead / interest
   - Identify bottlenecks, potential improvements or refinements
   - Recap design and decisions; erase outdated info
   - Raise some interesting error cases, e.g. network loss or server failure
   - Talk about plan for logging, monitoring, observability

### Quick Example lookup

- News feed system: feed publishing with notifications, and news feed building
- Key-value store: distributed hash table; partition with consistent hashing for even data spread; data replication; conflict resolution
- URL shortener: RESTful API, 301 permanent redirect or 302 analytics on every click, hash table for url map, hash function (base 62 conversion)
- TODO fill in others

### Database replication

[Airbyte Reference](https://airbyte.com/data-engineering-resources/master-slave-replication)

How Master Slave Replication Works

- Initialization: consistent snapshot of master db as slave "image"
- Log shipping: changes to master are recorded in binary of transaction logs; logs are sent to slave servers to keep them synchronized; shipping methods include MySQL’s binary log replication or PostgreSQL’s WAL (Write-Ahead Logging) shipping.
- Application: slaves apply same changes in same order as master
- Acknowledgment: usually master waits for acknowledgment from at least one slave before considering a transaction as committed (high data consistency, but also a latency hit)
- Read distribution: Reads can be distributed among slaves to reduce load on the master

### Edges

An edge (or link) of a network (or graph) is one of the connections between the nodes (or vertices) of the network.

What is edge location in networking? It is the connection or interface between a device or local network and the internet. The edge is close to the devices it is communicating with and is the entry point to the network. It is a prime location for Security and Performance/Cache considerations. E.g. CloudFront: You create a CloudFront distribution to tell CloudFront where you want content to be delivered from, and the details about how to track and manage content delivery. Then CloudFront uses computers (edge servers) that are close to your viewers to deliver that content quickly when someone wants to see it or use it.
