---
title: "Node package manager comparison"
subtitle: "Yarn vs. NPM vs PNPM in 2024"
date: "2024-08-16"
status: "Done"
---

NPM, Yarn, and PNPM are all package managers for Node.js that offer different advantages and trade-offs in terms of performance, features, and workflows. ([good source](https://romanglushach.medium.com/comparing-npm-yarn-and-pnpm-package-managers-which-one-is-right-for-your-distributed-project-to-4d7de2f0db8e#:~:text=As%20you%20can%20see%2C%20PNPM,life%20easier%20as%20a%20developer.))

### NPM

- default package manager for Node.js applications. NPM is part of the JavaScript ecosystem and is bundled with Node.js.
- large ecosystem of packages and strong community support
- often considered the slowest package manager
- does not use any caching mechanism, so it downloads and installs each package every time
- sufficient for small projects (low number of dependencies) with no sub-projects (no need for duplicate package downloads)

### Yarn

- Created by Facebook
- designed to address some of NPM's shortcomings, particularly in terms of performance and consistency
- focuses on speed, reliability, and security, and offers deterministic dependency resolution and faster installation times
- innovative features like workspaces and can prevent you from installing malicious packages
- uses a global cache of packages, but it still copies them to each project.
- the benefit is obvious with monorepo architectures

### PNPM

- PNPM is the fastest package manager, followed by YARN and then NPM.
- PNPM uses a novel approach called “symlinked node_modules”, which creates hard links to the global store of packages instead of copying them to each project. This saves disk space and reduces duplication.
- The benefit is obvious with monorepo architectures
- pnpm is managed to different nodejs versions like nvm

Important! You need to keep in mind that pnpm doesn’t use dependency hoisting:

When installing dependencies with npm or Yarn Classic, all packages are hoisted to the root of the modules directory. As a result, source code has access to dependencies that are not added as dependencies to the project.
By default, pnpm uses symlinks to add only the direct dependencies of the project into the root of the modules directory.
pnpm

In practice it means that if you have a package A that imports a package B (import something from 'B') but doesn’t explicitly specify B in the dependencies or devDependencies, then the execution will fail.

### Features of all node package managers

- Workspaces: This feature allows you to manage multiple sub-projects within a single repository, and share dependencies between them. This is useful for monorepo architectures, where you have multiple packages that depend on each other
- Lockfiles: This feature ensures that the exact versions of your dependencies are installed every time, regardless of any changes in the registry or in the package.json files. This improves the reproducibility and reliability of your builds
- Scripts: This feature allows you to run custom commands before or after installing or updating your dependencies, such as compiling, testing, or linting your code
- Hooks: This feature allows you to execute custom logic during certain events of the package manager’s lifecycle, such as resolving, fetching, linking, or auditing your dependencies.
  - NPM has hooks that allow users to be notified of changes to the NPM registry and packages. Hooks can be used to create integrations that respond to these changes, such as triggering a deploy, integration testing, or an announcement in a chat channel.
  - Hooks can also be used to add pre and post middleware hooks to JavaScript methods. For example, hooks can be used to
    add validation by running validation code before each save, among other things.
- (NPM and Yarn only) Audit: This feature allows you to check your dependencies for any known vulnerabilities or issues, and get recommendations on how to fix them

### Usage with NextJS and Vercel

All of them work well with Next. Vercel will automatically use pnpm for builds of projects that have a pnpm-lock.yaml file.

### How to migrate from yarn / npm to pnpm

[Migration guide](https://dev.to/andreychernykh/yarn-npm-to-pnpm-migration-guide-2n04)

It is also easy to start using pnpm if you have used npm or yarn before because the CLI is very similar.

1. Add a `preinstall` script to to package.json. This will prevent other devs from accidentally installing dependencies with anything else than pnpm.
1. Create a pnpm workspace yaml
1. import (leverages lockfile from previous package manager to scaffold the new lockfile)
1. install

### Observed effects of pnpm

- lockfile size decreased from 7k to 4k lines
- pnpm i was noticeably faster (`Done in 4.2s`) than npm i (`added 494 packages, and audited 495 packages in 8s`)
- pnpm demonstrated a cache hit the second time: `Progress: resolved 466, reused 466, downloaded 0, added 466, done`
- pnpm eliminated redundancies in 2nd-level dependencies: 466 vs 494
- Node modules size decreased very slightly with pnpm: 1MB
- overall package size decreased very slightly when using "analyze" script: partial KB
- don't need to use the `run` keyword for scripts with pnpm
- pnpm command line output is more succinct and organized, but didn't show deprecated package warnings like npm did, out of the box