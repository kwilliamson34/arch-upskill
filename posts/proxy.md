---
title: "Web Servers, Proxy Servers, and NGINX"
subtitle: "Why and how to set up a proxy, inbound rules, HTTP"
date: "2024-08-07"
status: "Done"
---

### Web servers

On the software side, a web server includes several parts that control how web users access hosted files. At a minimum, this is an HTTP server. An HTTP server is software that understands URLs (web addresses) and HTTP (the protocol your browser uses to view webpages). An HTTP server can be accessed through the domain names of the websites it stores, and it delivers the content of these hosted websites to the end user's device through HTTP.

To publish a website, you need either a static or a dynamic web server. A static web server, or stack, consists of a computer (hardware) with an HTTP server (software). We call it "static" because the server sends its hosted files as-is to your browser. A dynamic web server consists of a static web server plus extra software, most commonly an application server and a database. We call it "dynamic" because the application server updates the hosted files before sending content to your browser via the HTTP server.

- NextJS can use both static and dynamic web servers. With static rendering, data fetching and rendering happens on the server at build time (when you deploy) or when revalidating data. With dynamic rendering, content is rendered on the server for each user at request time (when the user visits the page).
- ExpressJS can use both static and dynamic web servers. Express.js has a built-in middleware function called express.static() that can serve static files like HTML, CSS, and images. Express.js can also be used to dynamically create responses using templates. Web hosting can also use dynamic web servers to automatically scale up infrastructure to handle increased user demand.

https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Web_mechanics/What_is_a_web_server

HTTP is a textual, stateless protocol.

### Proxy Background

A proxy server is a system or router that provides a gateway between users and the internet

A startup - as much as an established company - requires proxies because the new enterprise needs easy access and privacy when looking to **withdraw business-related data from online sources.**

### Forward proxy

- Sits between users and external systems/the internet
- e.g. a Firewall: a company may block traffic to certain domains that are known to be malicious or inappropriate for work
- e.g. altering your IP address so you can scrape a site where you've been blocked
- implements "allow" or "deny" rules
- owns a cache

### Reverse proxy

- Sites between web servers and the internet/user
- e.g. Geo-restriction
- e.g. Bot detection
- e.g. Cyber attack prevention
- e.g. URL rewrites (send users to different URLs without modifying the visible URL) for SEO control
- e.g. Avoiding CORS issues
- owns a cache
- Advantages
  - Enhanced Security: By acting as an intermediary for requests from clients, reverse proxies can protect the web server from exposure.
  - Load Balancing: A reverse proxy can distribute client requests across multiple servers, preventing any one server from becoming a bottleneck.
  - Improved Performance: Reverse proxies can cache content from an origin server in temporary storage.
- Disadvantages
  - Single Point of Failure: If a reverse proxy encounters a failure, anything behind it can become inaccessible or compromised.
  - Risk to Stored Information: Since a reverse proxy can track IP addresses and encrypt/decrypt information, it is also able to store data such as passwords.

HTTP reverse proxies (vs SSL and FTP) are the most common type of reverse proxy. They receive client requests and forward them to the appropriate backend server. Examples of software that can function as HTTP reverse proxies include Alteon, Apache HTTP Server, NGINX and HA Proxy.

### NGINX

Nginx is a web server that can also be used as a reverse proxy, load balancer, mail proxy and HTTP cache. [Beginner's Guide](https://nginx.org/en/docs/beginners_guide.html)

Nginx gets a ton of eyes on it. It is very secure, provided you keep it updated.

It comes native to all major Linux and Unix operating systems.

NGINX's non-blocking event-driven architecture makes it an ideal solution for processing multiple requests. NGINX works by creating one controller process and multiple worker processes. Despite multiple processes, NGINX uses low memory.

Controller process

- read and interpret configuration files
- bind to ports
- form child processes: employs event-based model and OS-dependent mechanisms to efficiently distribute requests among worker processes

Child processes

- Worker processes (concurrency of thousands): process requests, read and write content to the server disks, communicate with upstream servers
- Cache loader processes: load the disk cache into shared memory
- Cache manager processes: limit and cull cache (least recently used = LRU)

NGINX may be your best bet if your website has high traffic levels, like an ecommerce store or cloud storage services.

### NGINX vs Apache

NGINX and Apache are two premier choices of server software. Apache uses a process-driven architecture, and a single thread handles each connection request, while NGINX uses asynchronous event-driven architecture.

As of 2023, Apache powered 31.9 percent market share of websites with known web servers. Popular since 1996, it is very stable and an essential part of the LAMP stack.

Apache has no support for asynchronous processing. It is also a resource-intensive software that may consume more CPU and memory than alternatives. It offers multi-processing modules (MPMs) which are somewhat a workaround.

### NGINX vs Cloudflare

Cloudflare acts as a DNS provider for your domain, and a reverse proxy for your web traffic.

Uses a connection instead of open ports to send traffic. Security dependency shifts from NGINX to Cloudflare.

### NextJS + proxy

URL proxies often come as server-side libraries/middleware (i.e., http-proxy and http-proxy-middleware for Node.js) or inbuilt features of web app development frameworks.

Next.js app configuration lets you define URL mappings for its inbuilt URL proxy via the rewrites configuration property and also lets you define traditional HTTP redirects via the redirects configuration property.

[From Vercel](https://vercel.com/templates/next.js/bot-protection-botd): "Botd (by FingerprintJS) is a browser library for bot detection. In this demo we'll be using it alongside botd-integrations for bot detection at the edge." It works by reading the user agent string.

Geo-restriction is usually handled by mapping IP address ranges to countries. It is susceptible to IP spoofing.
