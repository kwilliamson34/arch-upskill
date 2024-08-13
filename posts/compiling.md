---
title: "Compiling and Pre/Post-processing"
subtitle: "Tailwind PostCss, Babel Transformations, etc"
date: "2024-08-14"
status: "In Progress"
---

### Compiler vs Interpreter vs Transpiler

- Compiler: translates high level language program to a lower level
  - The language processor reads the complete source program written in high-level language as a whole in one go and translates it into an equivalent program in machine language
  - e.g. C, C++, C#, and Java => machine language
- Interpreter: translate statements to machine language
  - e.g. Python, Ruby, Perl, and PHP => machine language
- Transpiler: taking source code written in one language and transforming into another language that has a similar level of abstraction
  - e.g. CoffeeScript / TypeScript / JSX => JavaScript

### Babel

Babel is a JavaScript compiler​.

Babel is a toolchain that is mainly used to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript in current and older browsers or environments. It allows developers to write modern JavaScript code using the latest language features, and then convert that code into a format that can be run on older browsers or environments.

Many modern frameworks have their own compilers so it's unecessary to configure Babel explicitly.

Next.js includes the next/babel preset to your app, which includes everything needed to compile React applications and server-side code. But if you want to extend the default Babel configs, it's also possible.

When your application has a .babelrc file, Next.js will automatically fall back to using Babel for transforming individual files. This ensures backwards compatibility with existing applications that leverage custom Babel plugins.

### How Babel works

TODO what/how does it transform

### Preprocessors

Preprocessors have their own syntax, which requires you to compile or transpile your code into code the brwser can understand before sending it to the browser.
Common preprocessors:

- CoffeeScript
- LiveScript
- TypeScript
- Sass/Less

### Tailwind PostCSS

It is a tool for transforming CSS with JavaScript; The end of global CSS.

CSS Modules provide localized scoping and automatic class name generation, while PostCSS offers a plugin system and the ability to perform various transformations on your CSS code.

Sass and Less are two popular preprocessors that extend the capabilities of CSS. They allow you to use variables, mixins, functions, nesting, inheritance, and other features that make your code more readable and maintainable. They also have their own syntax, which requires you to compile your code into plain CSS before sending it to the browser.

PostCSS is not a preprocessor, but a postprocessor. That means it does not have its own syntax, but instead uses standard CSS and modifies it with plugins.

### Tailwind Setup

[Guide](https://medium.com/@rifantechguy55/setting-up-a-next-js-13-project-with-eslint-and-prettier-735c3ccfd26c)

1. Install Prettier as a development dependency
1. Set up Prettier and ESLint
1. Install and Configure Tailwind CSS
1. Add Tailwind CSS Directives to global css
1. Automatically Sort Tailwind Classes with Prettier

### Emotion

TODO systems that go a step beyond
