---
title: "Basics of Express"
subtitle: "When to use it and how it works; Relavance in software stacks"
date: "2024-08-06"
status: "Done"
---

### Overview

Express is a minimalist, open source, server-side web framework for Node.js. It's meant to

- be minimal and flexible
- provide a thin layer of fundamental web application features (e.g. HTTP utility methods)
- supplement, not obscure, Node.js features
- be augmented through the use of Express middleware modules
- provide plugins, template code, middleware packages, and routing functionality for faster and efficient web development

It could also be called an "api server framework".

Written in Javascript, it is part of MEAN, MEVN, and MERN stacks.

MVC (Model-View-Controller) is the preferred and most common architecture type for Express apps

### Key feautures of Express

- Routing: Defines routes for different HTTP URLs and methods
- Middleware: Gives ExpressJS the ability to run scripts before or after a client request. These codes execute before the response is delivered to the client, or a HTTP request reaches the route handler.
- Template Engine Support: ExpressJS can be used with template engines like EJS, Jade and Mustache that allows you to use static template files into your app.
- Google V8 Engine Support: This JavaScript and WebAssembly Engine supports your app to be more reliable and scalable. These engines are very powerful for building enterprise-grade apps that deliver features in real-time.
- Mean Stack: ExpressJS is a vital part of the MEAN stack that can seamlessly connect database management systems at scale.
- Database: Supported by databases like MySQL, MongoDB and PostgreSQL
- Security: Protects your apps with CORS, CSRF protection, and HTTP security headers
- Effective Error Handling: Express’s middleware is built to support catching errors in synchronous and asynchronous codes.
- Portability: It also allows you to develop your mobile and server app with identical language.

Use Cases for Express

- Single-page apps
- Reusable apps
- Middleware Applications
- RESTful APIs
- Serve and access static files using a browser
- Enterprise web applications
- eCommerce web applications

### MEAN stack

MEAN = mongo, express, angular, node. MERN = react, MEVN = vue.

**Because all components of the MEAN stack support programs that are written in JavaScript, MEAN applications can be written in one language for both server-side and client-side execution environments.**

MongoDB is a NoSQL database program that uses JSON-like BSON (binary JSON) documents with optional schemas. The role of the database in the MEAN stack is very commonly filled by MongoDB because its use of JSON-like documents for interacting with data as opposed to the row/column model allows it to integrate well with the other (JavaScript-based) components of the stack.

Though often compared directly to other popular web development stacks such as the LAMP stack (linux, apache, mysql, perl/python/php), the components of the MEAN stack are higher-level including a web application presentation layer and not including an operating system layer.

### Alternatives to Express

Not to be confused with Electron, which is for building cross-platform desktop apps with JavaScript, HTML, and CSS, by embedding Chromium and Node.js in a desktop application.

Koa and Fastify are other options with 1/20th the market share.

Hapi is another.

### Express vs. Hapi

Hapi is a Javascript framework that can provide API development opportunities for servers, websites, and HTTP proxy applications. It provides API and web application routing.

Hapi offers a configuration-centric structure that comes with pre-built caching and authorization features; it comes with built-in authorization schemes like anonymous, basic-auth, cookie-based, and token-based.

Hapi offers a controller to handle the connection between the data model (business logic) and the View part (representation layer).

Use cases of Hapi

- Network applications
- Server component for Single Page Applications (SPAs)
- HTTP-based software applications
- eCommerce web applications
- JSON APIs for web applications
- Static websites or data-driven websites

**A big plus for Hapi is integrated authorization: Availability of pre-built authentication and authorization APIs.**

Theoretically you could use both Hapi and Express together, but some of the Hapi-specific modules and plugins such as catbox, joi, boom, etc. are not compatible with Express/Connect.

### Express vs. NextJS

TODO: insert two images with [MDX](https://nextjs.org/docs/app/building-your-application/configuring/mdx)

**Express.js is primarily a server-side framework** for building web applications, APIs, and other server-side applications. NextJS is server or client side.

[This source](https://www.mirrorfly.com/blog/nextjs-vs-expressjs) says, re: static generation, Express employs deferred static generation. A page creation can be postponed until a request is raised by a user. This speeds up the build time. In contrast, NextJS adapts "i"ncremental static regeneration." You can build or update a static page or parts of a page without the need to rebuild the entire app.

Many developers use Express.js when they need only a framework for the backend. But, it does pay more attention to security and db connection than Next.

### Express vs. Nginx

Nginx, from Wikipedia: "Nginx is a web server that can also be used as a reverse proxy, load balancer, mail proxy and HTTP cache."

On the software side, a web server includes several parts that control how web users access hosted files. At a minimum, this is an HTTP server. An HTTP server is software that understands URLs (web addresses) and HTTP (the protocol your browser uses to view webpages). An HTTP server can be accessed through the domain names of the websites it stores, and it delivers the content of these hosted websites to the end user's device through HTTP.

Express is a framework for NodeJS. The main difference between them is that using Express you can directly bind your NodeJS functionalities to endpoints. And in Nginx you must to delegate the functionality to another service via reverse proxy.

### Cons of Express

- Callback Hell: Callbacks are among the most discussed issues with the Express framework as developers fail to comprehend the complicated writing style. However, the Express team has looked into the recurring problem and introduced some relief.
- Philosophy of Middleware: For developers who have never worked with Express, understanding and executing the middleware functions can be tricky.

### Functionality

Check out [examples](https://expressjs.com/en/starter/examples.html):

- auth - Authentication with login and password
- content-negotiation - HTTP content negotiation
- cookie-sessions - Working with cookie-based sessions
- cookies - Working with cookies
- downloads - Transferring files to client
- ejs - Working with Embedded JavaScript templating (ejs)
- error-pages - Creating error pages
- error - Working with error middleware
- hello-world - Simple request handler
  ... and more
