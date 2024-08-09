---
title: "Basics of Turbo build system"
subtitle: "101 course"
date: "2024-08-09"
status: "Done"
---

[Turborepo docs](https://turbo.build/repo/docs)

### Basics of Turborepo

Turborepo is a high-performance build system for JavaScript and TypeScript codebases. It is designed for scaling monorepos. While Turborepo is highly effective in multi-package workspaces (commonly referred to as monorepos), it can also be used to make single-package workspaces faster.

Turborepo's most important features are:

1. Local and remote caching
2. Task parallelization

Additional features are:

1. Fast incremental build
2. Dependency graph visualization

Monorepos are very popular in modern application development because of their immense benefits. It is very easy to make cross-cutting code changes across different applications (/backend, /frontend) in a single atomic commit. It also provides a single source of truth for various environmental concerns you would want to be applied uniformly across your organization.

The main idea behind monorepo is to never recompute the work that has already been done before.

- It keeps a cache of previous builds for each project and then uses it for subsequent builds; only those packages that changed will be re-tested or re-built.
- It keeps track of the output of any task you execute and then skips the work that is already done.
- Turborepo is designed to speed up your tasks through smart scheduling, minimizing idle CPU.
- By default, the cache is local to your machine. But by working with providers like Vercel, Turborepo can securely communicate with a remote cache - a cloud server that stores the results of your tasks.

Turbo should be used when:

- your monorepo is getting difficult to scale; each workspace has its own test suite, linting, and build process, resulting in hundreds or thousands of tasks to execute to deliver changes to your software
- you want to speed up your build steps; offload optimal scheduling for build, test, lint, etc
- you have lots of pre-build steps and you want to turn them into one script (e.g. start docker container, push db schema, seed db, etc)

### Vercel Turbo remote cache setup

- [Turbo setup guide](https://turbo.build/repo/docs/core-concepts/remote-caching#vercel)
- [Vercel remote Ccaching usage Limits](https://vercel.com/docs/monorepos/remote-caching) - Free up to 10GB for Hobby, then disallowed
- [Official Turbo+NextJS starter](https://vercel.com/templates/next.js/turborepo-next-basic)

### Alternatives to Turbo

The biggest contender is NX, which aquired Lerna. But Turborepo is part of the Vercel ecosystem, so it tends to have a big market share.

**Generally, stick to the solution that best supports your immediate needs, while providing a reasonable amount of space to move forward. Don't pre-optimize.**

### Not to be confused with TurboPack

TurboPack is meant to be the next WebPack: an incremental bundler optimized for JS and TS.

The same weback team (now Next+Vercel) has taken the lessons from 10 years of webpack, combined with the innovations in incremental computation from Turborepo and Google's Bazel. It's written in Rust.

As of today, Turbopack can be used in Next.js 14.

[In the future](https://turbo.build/pack/docs/roadmap), both Vercel products Turborepo and Turbopack will merge into a single toolchain--Turbo--that can be used as either a bundler or a build system or both.

### Vite

[What is Vite?](https://vitejs.dev/) -> Created by open source developer Evan You, creator of Vue

Vite is a build tool that aims to provide a faster and leaner development experience for modern web projects. It consists of two major parts:

- A dev server that provides rich feature enhancements over native ES modules
- A build command that bundles your code with Rollup, pre-configured to output highly optimized static assets for production

Vite is known for its blazing-fast startup times and page loads. It uses native ES modules, which means that it doesn’t have to bundle your code before sending it to the browser. HMR is really snappy.

It boasts:

- Instant server start
- Lightning fast hot module replacement
- Out of the box Typescript, JSX, CSS support
- Optimized, pre-configured rollup build with mutli-page and library modes
- Rolled-up plugins set
- Fully typed Plugin API and JavaScript API

Internet rumors say Turbopack is 10x faster though.

### Popular Build Tools: from project to application

- Webpack (The Battle-Tested Giant)
- Turbopack (Vercel/Next)
- Vite (Vue)
- Rollup
- Parcel

## Gulp and Grunt

JavaScript task runners that automate routine tasks to help make builds more reliable and consistent.

They are [largely unecessary](https://www.reddit.com/r/javascript/comments/1aq5i73/askjs_what_happened_to_task_runners_such_as_grunt/) now as modern build tools take care of this for you; Webpack replaced them.
