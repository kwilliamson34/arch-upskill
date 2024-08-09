---
title: "Basics of Turbo and Vite"
subtitle: "101 course"
date: "2024-08-09"
status: "Not Started"
---

[Turborepo docs](https://turbo.build/repo/docs)

### Basics of Turbo

Turborepo is a high-performance build system for JavaScript and TypeScript codebases. It is designed for scaling monorepos. While Turborepo is highly effective in multi-package workspaces (commonly referred to as monorepos), it can also be used to make single-package workspaces faster.

Turborepo's most important features are

- local and remote caching
  - Turborepo's task cache saves time by never doing the same work twice. By default, it's local to your machine.
  - But by working with providers like Vercel, Turborepo can securely communicate with a remote cache - a cloud server that stores the results of your tasks.
- task parallelization

Additional features are

- Fast incremental build
- Dependency graph visualization

Monorepos are very popular in modern application development because of their immense benefits. It is very easy to make cross-cutting code changes across different applications (/backend, /frontend) in a single atomic commit. It also provides a single source of truth for various environmental concerns you would want to be applied uniformly across your organization.

The main idea behind monorepo is to never recompute the work that has already been done before. It keeps a cache of previous builds for each project and then uses it for subsequent builds. It keeps track of the output of any task you execute and then skips the work that is already done. Turborepo is designed to speed up your tasks through smart scheduling, minimizing idle CPU.

It should be used when

- your monorepo is getting difficult to scale; each workspace has its own test suite, linting, and build process, resulting in hundreds or thousands of tasks to execute to deliver changes to your software
- you want to speed up your build steps; offload optimal scheduling for build, test, lint, etc
- you have lots of pre-build steps and you want to turn them into one script (e.g. start docker container, push db schema, seed db, etc)

### Vercel Turbo setup

[Turbo setup guide](https://turbo.build/repo/docs/core-concepts/remote-caching#vercel)
[Vercel remote Ccaching usage Limits](https://vercel.com/docs/monorepos/remote-caching) - Free up to 10GB for Hobby, then disallowed
[Official Turbo+NextJS starter](https://vercel.com/templates/next.js/turborepo-next-basic)

### Alternatives to Turbo

Also Vite: https://vitejs.dev/
and maybe shad?
