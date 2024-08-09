---
title: "Babel"
subtitle: "What and how it transforms"
date: "2024-08-12"
status: "In Progress"
---

### What it is

Babel is a JavaScript compiler​.

Babel is a toolchain that is mainly used to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript in current and older browsers or environments. It allows developers to write modern JavaScript code using the latest language features, and then convert that code into a format that can be run on older browsers or environments.

Many modern frameworks have their own compilers so it's unecessary to configure Babel explicitly.

Next.js includes the next/babel preset to your app, which includes everything needed to compile React applications and server-side code. But if you want to extend the default Babel configs, it's also possible.

When your application has a .babelrc file, Next.js will automatically fall back to using Babel for transforming individual files. This ensures backwards compatibility with existing applications that leverage custom Babel plugins.

### Hoew it works

TODO
