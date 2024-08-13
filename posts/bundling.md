---
title: "Bundles and Modules"
subtitle: "Efficienct chunking in 2024"
date: "2024-08-13"
status: "Done"
---

### History

- Arose with ECMAScript in 2015, including a native module system (hence import/export module syntax)
- Advantage that 3rd party server code did not have to be included in a client app to be used ([more](https://8thlight.com/insights/a-history-of-javascript-modules-and-bundling-for-the-post-es6-developer))
- RequireJS and Browserify were dated approaches to bundling pre-webpack

### Core Concepts

**Tree shaking, code splitting and minification are crucial techniques in JavaScript optimization.**

- modules: can be imported, exported, and loaded asynchronously. Natively supported by JavaScript since ECMAScritp 2015.
- chunks: flat, minified code created by the bundler crawling your dependency tree.
  - During the bundling process, modules are combined into chunks. Chunks combine into chunk groups and form a graph (ChunkGraph).
  - "initial" is the main chunk for the entry point. This chunk contains all the modules and their dependencies that you specify for an entry point.
  - "non-initial" is a chunk that may be lazy-loaded. It may appear when dynamic import or SplitChunksPlugin is being used. A unique ID is used instead of a name
- entry: When you describe an entry point - under the hood, you create a chunk group with one chunk.
- output: Each chunk has a corresponding asset. The assets are the output files.

### Webpack

- It creates a dependency graph for all of the assets in a website — JS, CSS, images, SVGs, and even HTML
- able to parse JS modules written with AMD or CommonJS syntax, and create an output bundle which the index.html file uses in its single script
- enabled React to usher in the age of the single-page web app: instead of clients making a fresh request at each different route of a website, the entire application is downloaded on the client's first request and executed client-side, using mostly JS code.
- drawback: huge initial download
- has a dev server so that incremental code changes can be watched and immediately rebundled (CICD approach)
- There are four basic concepts in webpack: entry , output , modules and plug-ins

### Tree shaking (live code inclusion) and dead code elimination

- webpack 2 includes unused module export detection
- webpack 4 expands on this capability with a way to provide hints to the compiler via the ["sideEffects"](https://webpack.js.org/guides/tree-shaking/#mark-the-file-as-side-effect-free) package.json property to denote which files in your project are "pure" and therefore safe to prune if unused. When this property is set, any imported file is subject to tree shaking.
- tree shaking eliminates unused functions from across the bundle by starting at the entry point and only including functions that may be executed. It is succinctly described as "live code inclusion".

### NextJS

Webpack 5 is now the default for all Next. js applications. If you did not have a custom webpack configuration, your application is already using webpack 5.

By default, packages imported inside Server Components and Route Handlers are automatically bundled by Next.js. [This page](https://nextjs.org/docs/app/building-your-application/optimizing/package-bundling) will guide you through how to analyze and further optimize package bundling.

### Turbopack

Turbopack can be used in Next. js in both the pages and app directories for faster local development. To enable Turbopack, use the --turbo flag when running the Next. js development server. Turbopack might make a difference in large projects.

### Measuring and optimizing bundle size

- @next/bundle-analyzer
- [optimizePackageImports](https://nextjs.org/docs/app/api-reference/next-config-js/optimizePackageImports)
- Ensure no compilers transform your ES2015 module syntax into CommonJS modules (this is the default behavior of the popular Babel preset @babel/preset-env - see the documentation for more details).