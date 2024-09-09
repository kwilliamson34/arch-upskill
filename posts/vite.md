---
title: "Vite"
date: "2024-09-06"
subtitle: "Other react boilerplates"
status: "Done"
---

TIL that create-react-app is no longer (as of 2023) maintained. I noticed this because just getting React Testing Library/Jest tests to work with it was painful.

Vite is a nice alternative. In a nutshell, Vite is a modern JavaScript build tool that provides out-of-the-box support for common web patterns, offering optimized builds with the flexibility and maturity of rollup paired with a snappy bundleless dev server made possible by esbuild and native ES modules.

Vitest is a JavaScript testing framework that pairs well with Vite and reimplements a lot of things Jest does. Sources disagree on whether Vitest is more performant than Jest, but it's also nice with Typescript, and easy to setup.

I built a functional app with Vite + Vitest + Typescript + SWR + Axios + Tailwind in 3 evenings.
