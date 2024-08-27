---
title: "NextJS Refresher"
subtitle: "What NextJS is great at, including when and how to Use Static Generation v.s. Server-side Rendering"
date: "2024-07-31"
status: "Done with Todos"
---

### Key features of NextJS

- Server-Side rendering
- Automatic Code Splitting: Downloads only the necessary codes for each page and makes your web pages load faster.
- Static Site Generation: Converts the HTML server files into a complete HTML client page, in build-time
- ES6 support
- Typescript Support
- HMR (Hot module replacement): Speeds up development by making changes in a running application, without the need for a full reload.
- Asynchronous/Await

Highlights below from https://nextjs.org/learn-pages-router

### Routing

App Router is the newer and more recommended way, vs Page Router. The tutorial uses page router but I've updated this project after learning the difference. There is also a toggle built into the documentation navigation because the page router is still in heavy use publicly.

In version 13, Next.js introduced a new App Router built on React Server Components, which supports shared layouts, nested routing, loading states, error handling, and more. It is server-centric, supports server compoennts, and performs better. It has advantages for SPAs; re-rendering only the parts of pages that need it is a huge performance boost.

Moving to the App Router, the key concepts to understand are Server Components and Suspense.

While [switching from PR to AR](https://nextjs.org/docs/pages/building-your-application/upgrading/app-router-migration), here were the main differences:

- AR relies more on co-location and file hierarchy than explicit component references
- `getServerSideProps`, `getStaticProps` and `getStaticPaths` from PR are no longer recommended in AR

### Assets, Metadata, and CSS

Next.js has built-in support for CSS and Sass.

NextJS also has some optimized components, like Image, which abstracts the cruft of responsively sizing images for different browsers and platforms.

SEO metadata is a first-class concern and can be easily implemented for each page, statically or dynamicaally. Next.js will automatically generate the relevant head elements for your pages on the server-side.

### Pre-rendering and Data Fetching

By default, Next.js pre-renders every page. This means that Next.js generates HTML for each page in advance, instead of having it all done by client-side JavaScript. Pre-rendering can result in better performance and SEO.

Each generated HTML is associated with minimal JavaScript code necessary for that page. When a page is loaded by the browser, its JavaScript code runs and makes the page fully interactive. (This process is called hydration.)

You can show that pre-rendering is happening because the site renders even when you disable JavaScript in your browser (unlike creat-react-app).

Next.js has two forms of pre-rendering: Static Generation and Server-side Rendering. The difference is in when it generates the HTML for a page.

- Static Generation is the pre-rendering method that generates the HTML at build time. The pre-rendered HTML is then reused on each request.
- Server-side Rendering is the pre-rendering method that generates the HTML on each request.

### Static Site Generation

https://nextjs.org/docs/basic-features/pages#static-generation-recommended

### Server components and client components

A component transforms into a client component under two primary scenarios:

1. Explicit Declaration: By adding 'use client' at the beginning of a component, developers explicitly instruct the framework to treat this component as a client-side entity, irrespective of its original context.
2. Importation into a Client Component: Any component, regardless of being a server component initially, will morph into a client component if it’s imported into another client component. This behavior underscores the importance of understanding component dependencies and their execution context.

Cursor AI helped me out here-- I asked "am i using client vs server optimally for performance?" in a global scope and got actionable suggestions.

### Dynamic paths

We recommend using **Static Generation** (with and without data) whenever possible because your page can be built once and served by CDN, which makes it much faster than having a server render the page on every request.

You can use Static Generation for many types of pages, including:

- Marketing pages
- Blog posts
- E-commerce product listings
- Help and documentation

You should ask yourself: "Can I pre-render this page **ahead** of a user's request?" If the answer is yes, then you should choose Static Generation.

On the other hand, Static Generation is **not** a good idea if you cannot pre-render a page ahead of a user's request. Maybe your page shows frequently updated data, and the page content changes on every request.

In that case, you can use **Server-Side Rendering**. It will be slower, but the pre-rendered page will always be up-to-date. Or you can skip pre-rendering and use client-side JavaScript to populate data.

### API Routes

API Routes let you create an API endpoint inside a Next.js app. You can do so by creating a handler function inside the pages/api directory.

They can be deployed as Serverless Functions (also known as Lambdas).

Fetching API routes should happen server side. You can write code such as direct database queries without sending them to browsers.

API Routes do not specify CORS headers, meaning they are same-origin only by default. You can customize such behavior by wrapping the request handler with the CORS request helpers.

API Routes can't be used with static exports. However, Route Handlers in the App Router can.

### Writing server side code

https://nextjs.org/docs/pages/building-your-application/data-fetching/get-static-props#write-server-side-code-directly

Extract the heavy logic and use it for both the API endpoint server-side fetch, to improve performance.

See exactly which code Next eliminates from client side bundle using this tool: https://next-code-elimination.vercel.app/

### Preview mode

https://nextjs.org/docs/pages/building-your-application/configuring/preview-mode

When you’re writing a draft on your headless CMS and want to preview the draft immediately on your page, you’d want Next.js to render these pages at request time instead of build time and fetch the draft content instead of the published content. You’d want Next.js to bypass Static Generation only for this specific case.

### Errors

NextJS offers more convenience here. [The error.js file](https://nextjs.org/docs/app/building-your-application/routing/error-handling) convention allows you to gracefully handle unexpected runtime errors in nested routes, and specify custom behaviors.

- Automatically wrap a route segment and its nested children in a React Error Boundary.
- Create error UI tailored to specific segments using the file-system hierarchy to adjust granularity.
- Isolate errors to affected segments while keeping the rest of the application functional.
- Add functionality to attempt to recover from an error without a full page reload.

- TODO add some data storage, like lesson doneness
- TODO add tests
- TODO practice more with [debugging tools](https://nextjs.org/docs/pages/building-your-application/configuring/debugging)
