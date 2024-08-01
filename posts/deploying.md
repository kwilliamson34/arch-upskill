---
title: "Deploying apps"
subtitle: "Including NextJS deployments, Vercel 101, Netlify refresher"
date: "2024-08-01"
status: "Done"
---

### Final section of NextJS tutorial

https://nextjs.org/learn-pages-router/basics/deploying-nextjs-app

The easiest way to deploy Next.js to production is to use the Vercel platform developed by the creators of Next.js, so it has has first-class support. Vercel is a serverless platform for static and hybrid applications.

Once you’re signed up, import your nextjs-blog repository on Vercel. You can do so from here: https://vercel.com/import/git. You can use default values for the following settings — no need to change anything. Vercel automatically detects that you have a Next.js app and chooses optimal build settings for you.

After the first deployment, you can:

- enable instant previews; push a new branch to preview changes instantly. Preview links are available in GitHub comments.
- add a custom domain. The default domain for hobby use (repo-name.vercel.app) is free.
- enable speed insights. This is free for hobby use and is a simple React component.
- set up environemnt variables

Note that Vercel auto-renews SSL certificates so that HTTPS is enabled without extra configuration.

### Vercel and NextJS

When you deploy your Next.js app to Vercel, the following happens by default:

- Pages that use Static Generation and assets (JS, CSS, images, fonts, etc) will automatically be served from the Vercel Edge Network, which is blazingly fast.
- Pages that use Server-Side Rendering and API routes will automatically become isolated Serverless Functions. This allows page rendering and API requests to scale infinitely.

As of 2024, comprises 0.5% market share among web hosting providers. 1.93% of the top 10k websites opted for Vercel.

**This framework supports not only static sites but also server-side rendering (SSR), so Vercel also hosts SSR-based websites.**

Vercel also has some nice built-in speed analytics and CWV reporting. But Vercel’s analytics is implemented as a client-side JavaScript, making your site slower.

### Netlify and NextJS

Founded in 2014. Back then, **git-centered workflows** were rapidly gaining popularity. The company aimed to provide a convenient cloud build and deploy tool for static site generators hosted on git. in 2024, has a market share of 0.3% among all web hosting providers in the world.

Many know that Netlify "invented" the Jamstack concept, but later, in 2023, rebranded the concept to just “flexibility, scalability, performance, and maintainability”; “Composable architecture”.

### Netlify vs. Vercel vs. other JAMstack hosting platforms

https://ikius.com/blog/vercel-vs-netlify

There are several Jamstack hosting platforms available, such as Netlify, Vercel, Gatsby Cloud, AWS, Firebase, Heroku, and DigitalOcean.

"Battle of the Jamstack (Javascript, API, and Markup) giants". The core principle of Jamstack is that all the content is pre-rendered at build time, so you don’t have any expensive runtime calculations on the server for processing user requests. And, contrary to dynamic server-side rendering, you can deploy your static site on a content delivery network (CDN) for even faster loads.

**These two COMBINE hosting and development flow**. takes care of deployment and other issues:

- **automated builds** with **continuous, atomic deployments**, handling all pre render steps at build time with less config
- connects to your git repository, where your static site generator sits, automatically deploys any changes you push
- discrete **previews** for atomic deployments and **easy rollbacks**
- puts the generated HTML files on a **CDN**, allows you to run **edge functions** for localization and performance

Highly regarded in the industry for their reliability and performance.

Netlify and Vercel are multi-cloud platforms, meaning they equally employ GCP and AWS for their infrastructure.

Both handle SSL certs for you.

**If website is SSR-based, opt for Vercel.**

### Serverless functions

Serverless functions serve as a backend for your website. But with one major difference: scaling, security, and monitoring is none of your concern. In fact, serverless functions are HTTP API endpoints that are represented by separate functions, not a whole backend project.

Serverless functions are placed in a specific folder in the same repo where your front-end lives. The hosting platform automatically detects and deploys them. Both Netlify and Vercel use AWS Lambda in the background for a serverless function.

When everything is static, and all the data is retrieved at build time, you don't need this (or any) backend.

Some differences in the Netlify vs. Vercel debate:

- Asynchronous execution: Vercel serverless functions are synchronous by nature. Netlify offers “background functions,” which can run for up to 15 minutes asynchronously. You can use them for batch processing or web scraping.
- Edge caching: With Vercel's Edge caching, you don’t run the same function again and again — the results of the first function run will be cached periodically and retrieved from the cache on the consequent calls. This will come in handy if you’re regularly fetching something, say, current cryptocurrency prices. Plus, the feature is available on the free tier. Netlify offers “Edge handlers” with similar functionality, but the feature is still in the trial stage.
- Language support: Vercel offers more language choices. While Netlify supports only Typescript, JavaScript and Go for creating serverless Netlify functions, Vercel also supports Python and Ruby.
- Both providers set the maximum function execution time to 10 seconds on the free tier and 60 seconds on the pro plan.

### Forms etc

Need to check this out more. Theoretically Netlify offers support for form submissions? Submitted data will be available in the Netlify dashboard.

Read more at https://ikius.com/blog/vercel-vs-netlify

### Security

Through abstraction. TODO More here on auth and beyond

### Scaling

Both are cheap to start, expensive to scale. AWS or Google offer more cost effective solutions at scale with a lot more control (read: configuration).

Not afiliated, but https://www.flightcontrol.dev/ seems like a good path away from Vercel onto AWS once you hit a certain scale.

### Not JAMStack

These platforms are not an option for non-composable architectures, and non-static applications.

Take a PHP monolith. Netlify doesn’t provide runtime PHP hosting, so you can’t host a standard PHP based website here. You can use PHP to output a static HTML website (generates HTML, CSS, and JavaScript code rendered in the user's browser), but you still wouldn’t be able to use PHP scripts for server-side functionality.If you have a PHP based site and aren’t looking to convert it to static, then your best bet will be to host it elsewhere, e.g. **Heroku**.
