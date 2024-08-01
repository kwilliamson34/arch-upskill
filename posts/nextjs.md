---
title: "Basics of NextJS"
subtitle: "What NextJS is great at, including when and how to Use Static Generation v.s. Server-side Rendering"
date: "2024-07-31"
status: "Done"
---

Highlights from https://nextjs.org/learn-pages-router

### Create a Next.js App

TODO

### Navigate Between Pages

TODO

### Assets, Metadata, and CSS

TODO

### Pre-rendering and Data Fetching

By default, Next.js pre-renders every page. This means that Next.js generates HTML for each page in advance, instead of having it all done by client-side JavaScript. Pre-rendering can result in better performance and SEO.

Each generated HTML is associated with minimal JavaScript code necessary for that page. When a page is loaded by the browser, its JavaScript code runs and makes the page fully interactive. (This process is called hydration.)

You can show that pre-rendering is happening because the site renders even when you disable JavaScript in your browser (unlike creat-react-app).

Next.js has two forms of pre-rendering: Static Generation and Server-side Rendering. The difference is in when it generates the HTML for a page.

- Static Generation is the pre-rendering method that generates the HTML at build time. The pre-rendered HTML is then reused on each request.
- Server-side Rendering is the pre-rendering method that generates the HTML on each request.

### Static Generation

https://nextjs.org/docs/basic-features/pages#static-generation-recommended

#### Implement getStaticPaths

We recommend using **Static Generation** (with and without data) whenever possible because your page can be built once and served by CDN, which makes it much faster than having a server render the page on every request.

You can use Static Generation for many types of pages, including:

- Marketing pages
- Blog posts
- E-commerce product listings
- Help and documentation

You should ask yourself: "Can I pre-render this page **ahead** of a user's request?" If the answer is yes, then you should choose Static Generation.

On the other hand, Static Generation is **not** a good idea if you cannot pre-render a page ahead of a user's request. Maybe your page shows frequently updated data, and the page content changes on every request.

In that case, you can use **Server-Side Rendering**. It will be slower, but the pre-rendered page will always be up-to-date. Or you can skip pre-rendering and use client-side JavaScript to populate data.

#### Implement getStaticProps

getStaticProps only runs on the server-side. It will never run on the client-side. It won’t even be included in the JS bundle for the browser. That means you can write code such as direct database queries without them being sent to browsers. Because it’s meant to be run at build time, you won’t be able to use data that’s only available during request time, such as query parameters or HTTP headers.

getStaticProps can only be exported from a page. You can’t export it from non-page files. One of the reasons for this restriction is that React needs to have all the required data before the page is rendered.

### Dynamic Routes

TODO

### Page Path Depends on External Data

TODO

### API Routes

API Routes let you create an API endpoint inside a Next.js app. You can do so by creating a handler function inside the pages/api directory.

They can be deployed as Serverless Functions (also known as Lambdas).

You should not fetch an API Route from getStaticProps or getStaticPaths. Instead, write your server-side code directly in getStaticProps or getStaticPaths (or call a helper function).

Here’s why: getStaticProps and getStaticPaths run only on the server-side and will never run on the client-side. Moreover, these functions will not be included in the JS bundle for the browser. That means you can write code such as direct database queries without sending them to browsers.

API Routes do not specify CORS headers, meaning they are same-origin only by default. You can customize such behavior by wrapping the request handler with the CORS request helpers.

API Routes can't be used with static exports. However, Route Handlers in the App Router can.

### Writing server side code

https://nextjs.org/docs/pages/building-your-application/data-fetching/get-static-props#write-server-side-code-directly

Extract the heavy logic and use it for both the API endpoint and getStaticProps, to improve performance.

See exactly which code Next eliminates from client side bundle using this tool: https://next-code-elimination.vercel.app/

## Preview mode

https://nextjs.org/docs/pages/building-your-application/configuring/preview-mode

When you’re writing a draft on your headless CMS and want to preview the draft immediately on your page, you’d want Next.js to render these pages at request time instead of build time and fetch the draft content instead of the published content. You’d want Next.js to bypass Static Generation only for this specific case.

### Deploying Your Next.js App

Saved for next lesson
