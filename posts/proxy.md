---
title: "Web Servers"
subtitle: "Why and how to set up a proxy, inbound rules, HTTP"
date: "2024-08-07"
status: "In Progress"
---

Nginx, from Wikipedia: "Nginx is a web server that can also be used as a reverse proxy, load balancer, mail proxy and HTTP cache."

On the software side, a web server includes several parts that control how web users access hosted files. At a minimum, this is an HTTP server. An HTTP server is software that understands URLs (web addresses) and HTTP (the protocol your browser uses to view webpages). An HTTP server can be accessed through the domain names of the websites it stores, and it delivers the content of these hosted websites to the end user's device through HTTP.

To publish a website, you need either a static or a dynamic web server. A static web server, or stack, consists of a computer (hardware) with an HTTP server (software). We call it "static" because the server sends its hosted files as-is to your browser. A dynamic web server consists of a static web server plus extra software, most commonly an application server and a database. We call it "dynamic" because the application server updates the hosted files before sending content to your browser via the HTTP server.

- NextJS can use both static and dynamic web servers. With static rendering, data fetching and rendering happens on the server at build time (when you deploy) or when revalidating data. With dynamic rendering, content is rendered on the server for each user at request time (when the user visits the page).
- ExpressJS can use both static and dynamic web servers. Express.js has a built-in middleware function called express.static() that can serve static files like HTML, CSS, and images. Express.js can also be used to dynamically create responses using templates. Web hosting can also use dynamic web servers to automatically scale up infrastructure to handle increased user demand.

https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Web_mechanics/What_is_a_web_server

HTTP is a textual, stateless protocol.
