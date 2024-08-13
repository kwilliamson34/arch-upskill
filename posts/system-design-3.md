---
title: "More System Design"
subtitle: "Continuing System Design Interview Insiders Vol 1"
date: "2024-08-12"
status: "Done"
---

Notes taken while reading `System Design Interview – An insider's guide` by Alex Xu, Chapters 6-7

### Tradeoffs and decisions for key-value store

- read, write, and memory usage
- consistency vs availability
- hardware limitations
- configurable parameters, e.g. # of replicas

### Requirements of key-value store

- client API
- replication
- conflict resolution
- failure detection
- failure repair mechanism
- storage engine

### CAP Theorem

- Consistency: consistency means all clients see the same data at the same time no matter which node they connect to. Bank systems usually have extremely high consistent requirements.
- Availability: availability means any client which requests data gets a response even if some of the nodes are down.
- Partition Tolerance: a partition indicates a communication break between two nodes. Partition tolerance means the system continues to operate despite network partitions. Since network failure is unavoidable, a distributed system must tolerate network partition.

CAP theorem states that one of the three properties must be sacrificed to support 2 of the 3 properties

### Replication

- Based on Amazon Dynamo, Cassandra and BigTable
- To achieve high availability and reliability, data must be replicated asynchronously over N servers, where N is a configurable parameter.
- "Nodes in the same data center often fail at the same time due to power outages, network issues, natural disasters, etc. For better reliability, replicas are placed in distinct data centers, and data centers are connected through high-speed networks."
- “Quorum consensus can guarantee consistency for both read and write operations” (requiring W write acks and R read responses before considered successful, independent from N number of replicas). If W + R > N, strong consistency is guaranteed because there must be at least one overlapping node that has the latest data to ensure consistency.
- Dynamo and Cassandra adopt eventual consistency. It's a type of weak consistency model meant to promote high availability, as opposed to strong consistency.
- Versioning and vector clocks are used to solve inconsistency problems
  - versioning = treating each data modification as a new immutable version of data
  - vector clocks = servers get data operations like queues of tuples, [[ancestor server, version]]. Helps to check for order and conflicts. Requires conflict resolution logic.
- There is a coordinator node, directing reads and writes to others

### Down detection

- Gossip protocol: heartbeat broadcasts and membership lists

### Storage engine / write path

- write request is persisted on commit log file
- data is saved in memory cache
- when cache is full, data is flushed to disk
- upon a read, memory cache is checked before disk

### Unique IDs

- UUID is a 128-bit string used to identify information in computer systems. It has a very low probability of collision. But there is no relationship to the time the UUID was generated.
- The twitter snowflake approach builds timestamp, datacenter, machine, and sequence info into each id
  - Sequence increments but resets every millisecond. If we allot 12 bits, that's 2^12 combinations, of 4096 new ids possible per server per millisecond
  - timestamps are milliseconds since the epoch
  - timestamp should be the first segment for readability, but that forces us to predetermine the space it can take up / the length of time this design will be valid; might need ID migration later
