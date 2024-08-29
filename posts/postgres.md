---
title: "Basics of Postgres"
subtitle: "101 SQL DB knowledge for fullstack engineers"
date: "2024-08-29"
status: "Done with Todos"
---

### Quick aside on relational and non-relational DBs

Relational databases: Popular ones are MySQL, Oracle database, PostgreSQL

Non-Relational databases are also called NoSQL databases. Popular ones are CouchDB, Neo4j, Cassandra, HBase, Amazon DynamoDB

Four categories of unstructured databases:

- key-value stores
- graph stores
- column stores
- document stores

Join operations are generally not supported.

Non-relational databases might be the right choice for:

- low latency
- massive amounts of data
- non related or unstructured data

NoSQL databases are particularly easy to scale. Sharding is a core feature of NoSQL databases, designed from the ground up to support horizontal scalability. Simply add more servers to the cluster as your data volume increases.

On the flip side, for relational databases, the strict schema requirements and relational nature of the data make scaling more difficult. Sharding is typically done manually, and managed by DB Admins. ([source](https://www.linkedin.com/pulse/sharding-rdbms-vs-nosql-vagdevi-kommineni-wvehc/))

### Postgres vs MySQL

Background

- MySQL is owned by Oracle, Postgres is owned by Postgresql.
- MySQL has long been a popular and stable option; It's inherently part of the LAMP stack.

Pros and Cons (Source: [AWS](https://aws.amazon.com/compare/the-difference-between-mysql-vs-postgresql))

- PostgreSQL is better suited for enterprise-level applications with frequent write operations and complex queries.
- However, if you require frequent data reads, MySQL is preferred.
- MySQL is more suitable for beginners and has a shorter learning curve. It takes less time to build a new database project from scratch.

Write performance

- MySQL uses write locks to achieve real concurrency; causes more waiting
- PostgreSQL has built-in multiversion concurrency control (MVCC) without read-write locks

Read performance

- PostgreSQL creates a new system process for every user connected; scaling is memory intensive
- MySQL uses a single process for multiple users, which scales faster

Syntax

Here are some syntactic differences between PostgreSQL and MySQL:

- Subqueries. PostgreSQL supports more subqueries than MySQL, including "LIMIT" and "ALL", "INTERSECT", "OUTER JOIN" (TODO look more into this)
- Data types. PostgreSQL supports a wider range of data types, including arrays, network types, and geometric data types.
- Triggers. MySQL only supports AFTER and BEFORE triggers for SQL INSERT, UPDATE, and DELETE statements. PostgreSQL supports the INSTEAD OF trigger, which allows for complex SQL statements using functions.
- Comments. MySQL uses a nonstandard `#` to begin a comment line, while PostgreSQL uses `/* */`.
- Quoting. MySQL uses ' or " to quote values, and ` (accent mark or backtick) to quote system identifiers. In Postgres, identifiers (like table and property names) stricly use double quotes; single quotes are used for strings/tokens.
- Case sensitivity. MySQL is case-insensitive by default. Postgres is case-sensitive by default.
- Clean up. PostgreSQL's "vacuum process" reclaims storage occupied by "dead tuples"; This frees space for new data and prevents table bloat. MySQL implements a process called "purge". (TODO look more into this)

### Joins (refresher)

It's a common mistake to start selecting before appropriate joins are made. For example, if you want to make aggregate calculations for a user across multiple similarly structured tables, you may want to merge those tables first and then group by user.

- INNER JOIN selects all rows from both the tables as long as the condition is satisfied. This keyword will create the result-set by combining all rows from both the tables where the condition satisfies.
- RIGHT JOIN returns all the rows of the table on the right side of the join and matching rows for the table on the left side of the join.
- LEFT JOIN returns all the rows of the table on the left side of the join and matches rows for the table on the right side of the join.
- FULL OUTER JOIN creates the result-set by combining results of both LEFT JOIN and RIGHT JOIN. The result-set will contain all the rows from both tables.

### Transactions (refresher)

Transactions group a set of tasks into a single execution unit. If any error occurs with any of the tasks (SQL statements), all changes need to be aborted. The process of reversing changes is called rollback. This command can only be used to undo transactions since the last COMMIT or ROLLBACK command was issued. SAVEPOINT can also be defined within a transaction, so you can roll the transaction back partially.

```sql
BEGIN TRANSACTION transaction_name ;
SET TRANSACTION [ READ WRITE | READ ONLY ];
...
COMMIT;
```

Transactions are essential for maintaining database integrity. They are used to preserve integrity when multiple related operations are executed concurrently, or when multiple users interact with a database concurrently. Follows the ACID principle: Atomicity, Consistency, Isolation, and Durability.

Transactions should be used when failure to complete, or someone else reading or writing in the middle of your task, could cause damage to the data. eg:

- Reading from a table for subsequent deletion
- Writing related data to multiple tables
- Something high risk where the rollback option is a must

It is possible to re-run a transaction if it fails; perhaps waiting for a resource to be available or a time when no one else is connected to the database.

### Indexing

[good source](https://www.atlassian.com/data/sql/how-indexing-works)

The two index types, clustered and non-clustered, are stored and searched as B-trees, a data structure similar to a binary tree. A B-tree is a “self-balancing tree data structure that maintains sorted data and allows searches, sequential access, insertions, and deletions in logarithmic time.”

Clustered indexes are the unique index per table that uses the primary key to organize the data that is within the table. They do not have to be explicitly declared.

Non-clustered indexes are sorted references for a specific field, from the main table, that hold pointers back to the original entries of the table. They are used to increase the speed of queries on the table by creating columns that are more easily searchable. Note: Non-clustered indexes are not new tables. Non-clustered indexes hold the field name and memory address pointer.

When data is written to the database, the original table (the clustered index) is updated first and then all of the indexes off of that table are updated. Every time a write is made to the database, the indexes are unusable until they have updated.

Indexes are most useful for read-heavy databases in data warehouses that get new data updated on a scheduled basis (off-peak hours), although PostgreSQL 12 adds the ability to rebuild indexes concurrently, which lets you perform a REINDEX operation without blocking any writes to the index. TODO: Unsure if MySQL has this feature.

It's important to benchmark queries with and without indexes to see the performance difference.
