---
title: "API Design"
subtitle: "Sketch, design, implement, consume. REST and GraphQL."
date: "2024-08-15"
status: "Done with Todos"
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

### Apollo Server

Apollo Server is a community-maintained open-source GraphQL server. It works with many Node.js HTTP server frameworks, or can run on its own with a built-in Express server.

Usage is [trending down](https://npmtrends.com/apollo-server). There are some [alternatives](https://www.reddit.com/r/graphql/comments/s5h987/are_there_actually_better_alternatives_than/).

Apollo Explorer, aka GraphOS Studio Explorer, is a really cool feature. Launched on localhost with your dev server, it's a GUI allowing you to step through your schema, explore types and fields (including recursively poplulating scalar fields in nested schemas), and build and iterate queries faster.

### Apollo Client

`@apollo/client` contains pretty much everything we need to build our client, including an in-memory cache, local state management, and error handling. Whereas `graphql` provides the core logic for parsing GraphQL queries.

Every instance of ApolloClient uses an in-memory cache, although it has to be initialized / an instance provided to the ApolloClient constructor. This enables it to store and reuse query results so it doesn't have to make as many network requests.

The ApolloProvider component uses React's Context API to make a configured Apollo Client instance available throughout a React component tree. Now all of our pages, containers, and components can access the client via friendly React Hooks thanks to the context API.

We can look to the GraphQL API's schema as the "single source of truth" for all of the types we could possibly query on the frontend, and avoid getting out of sync. An easy way to do this is to use a GraphQL Code Generator to generate types for us. `@graphql-codegen/cli` is one such tool.

Best practices for client queries:

- Include only the fields the client requires
- Wrap each query in the `gql` function, and assign it to a constant with an ALL_CAPS name
- Test out queries in the GraphOS Studio Explorer and copy them over

The [useQuery hook](https://apollographql.com/docs/react/api/react/hooks/#usequery) is the primary API for executing queries in a React application. We run a query within a React component by calling useQuery and passing it our GraphQL query string. When our component renders, useQuery returns an object from Apollo Client that contains loading, error, and data properties that we can use to render our UI.

Got a nice little badge for "Apollo Graph Associate L1/4" 🎉

### Postman, Swagger, and other tools

OpenAPI is a specification for describing RESTful APIs. On 1 January 2016, the Swagger specification was renamed the OpenAPI Specification (OAS). The goal is to visualize and interact with the API’s resources without having the implementation logic in place.

Postman is an API platform for building and using APIs. In addition to REST, the Postman API client also supports GraphQL, SOAP, WebSocket, and gRPC. Postman is a popular choice, and it has some nice testing features.

While GraphOS Explorer [should make Postman unecessary](https://www.apollographql.com/blog/how-to-use-graphql-with-postman) for clean GraphQL systems, Postman is easy to use, and can be a central hub for API contracts across a mixed-schema system.

### API authorization

- Bearer token: A bearer token is an opaque string that represents the authorization granted to the client by the resource owner. It is typically issued by an authorization server and is used to access protected resources on behalf of the resource owner. Usage of Bearer Tokens Bearer tokens are commonly used in OAuth 2.0 authentication flows. When a client needs to access a protected resource, it includes the bearer token in the Authorization header of the HTTP request.
- Machine token: Hardware Machine Access Tokens (HMAC) allow you to assign a seat to a physical computer instead of a user. The secret token is never sent over the wire, but instead the message only contains the MAC/signature, which is valid only for that particular message and cannot be copied to a different message.
- TODO is it worth using Postman with mocks or stubs bc of a secure or protected IP environment
- TODO: write an API and consume it with this app
