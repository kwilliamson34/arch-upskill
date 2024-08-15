---
title: "API Design"
subtitle: "Sketch, design, implementation, consume. REST and GraphQL."
date: "2024-08-15"
status: "In Progress"
---

### External APIs and NextJS

There are 4 ways you can fetch data in Next.js:

- [fetch API on the server](https://nextjs.org/docs/app/building-your-application/data-fetching/fetching#fetch-api)
- ORMs or Database Clients on the server
- Route Handlers on the server, via the client
- Data Fetching Libraries on the client

### REST vs GraphQL

GraphQL is a domain-specific language for data query and manipulation by Facebook. Most mature libraries for it exist in the Node.js ecosystem.

The specification defines its own language called The GraphQL Schema Definition Language (SDL). This schema is strongly typed and simple, making it possible to convert a JavaScript object representation of your data model into a schema via a library ("code first"), or write in SDL directly and hook up your business logic later ("schema first").

One disadvantage of GraphQL is that we cannot use HTTP status codes.

### Building a GraphQL server

Following [this tutorial](https://www.apollographql.com/tutorials/lift-off-part1/01-feature-overview-and-setup)

"Schema-first" design means we'll implement the feature based on exactly which data our client application needs. This also reduces total development time by allowing frontend and backend teams to work in parallel, initially on mocked data that fits the server/client "contract".

At its heart, a schema is a collection of object types that contain fields. Each field has a type of its own. A field's type can be scalar (such as an Int or a String), or it can be another object type. For example, the Track object type in our schema will have an author field of type Author. Types:

- look very similar to javascript objects
- include fields that are not separated by commas
- can use bangs to indicate non-nullable
- probably includes an id field, where ID! is the likely data type
- indicate lists with square brackets
- should be documented with quotes (single line) or triple quotes (block)

Tools like the GraphOS Studio Explorer can use types (and documentation) to guide API consumers on what they can achieve with your API. A REST equivalent is Swagger.

In GraphQL, we don't have multiple specific endpoints to target different types like a REST API does. Instead, we define a special Query type. The Query type's fields define which data clients can query from our schema. All incoming queries from the client get parsed and validated against the schema.

TODO: finish the rest, paused at the 50% mark

### Apollo Server

Apollo Server is a community-maintained open-source GraphQL server. It works with many Node.js HTTP server frameworks, or can run on its own with a built-in Express server.

Usage is [trending down](https://npmtrends.com/apollo-server). There are some [alternatives](https://www.reddit.com/r/graphql/comments/s5h987/are_there_actually_better_alternatives_than/).

### Postman, Swagger, GraphOS Studio Explorer, and other tools

TODO
