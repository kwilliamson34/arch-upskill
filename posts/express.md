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

### Security

Check out [functionality examples](https://expressjs.com/en/starter/examples.html)

Check out [best security practices in prod](https://expressjs.com/en/advanced/best-practice-security.html)

Express has built-in security features like Helmet. Helmet can help protect your app from some well-known web vulnerabilities by setting HTTP headers appropriately.

Helmet is a collection of several smaller middleware functions that set security-related HTTP response headers. Some examples include:

- helmet.contentSecurityPolicy which sets the Content-Security-Policy header. This helps prevent cross-site scripting attacks among many other things.
- helmet.hsts which sets the Strict-Transport-Security header. This helps enforce secure (HTTPS) connections to the server.
- helmet.frameguard which sets the X-Frame-Options header. This provides clickjacking protection.
- ...and more

### Cookies

To ensure cookies don’t open your app to exploits, don’t use the default session cookie name and set cookie security options appropriately.

There are two main middleware cookie session modules:

- express-session that replaces express.session middleware built-in to Express 3.x.
- cookie-session that replaces express.cookieSession middleware built-in to Express 3.x.

Set the following cookie options to enhance security:

- secure - Ensures the browser only sends the cookie over HTTPS.
- httpOnly - Ensures the cookie is sent only over HTTP(S), not client JavaScript, helping to protect against cross-site scripting attacks.
- domain - indicates the domain of the cookie; use it to compare against the domain of the server in which the URL is being requested. If they match, then check the path attribute next.
- path - indicates the path of the cookie; use it to compare against the request path. If this and domain match, then send the cookie in the request.
- expires - use to set expiration date for persistent cookies.

This is [also achievable in NextJS](https://medium.com/@itself_tools/enhancing-web-security-with-secure-cookie-attributes-in-next-js-b389b9e49e6e) but not as a built-in library.

### Errors

Express comes with a built-in error handler that takes care of any errors that might be encountered in the app. This default error-handling middleware function is added at the end of the middleware function stack. It writes the stack trace to the client in lower environments.
