---
title: "Compiling and Pre/Post-processing"
subtitle: "Tailwind PostCss, Babel Transformations, etc"
date: "2024-08-14"
status: "Done"
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

[Steps in transformation](https://mhk-bit.medium.com/babel-under-the-hood-63e3fb961243)

1. Parsing: Babel takes the source code and parses it into an `AST (Abstract Syntax Tree)`, describing each part of the syntax of the source code and their relation to each other. Nodes in this tree are things like ExpressionStatement, ArrowFunctionExpression, BinaryExpression...
1. Transformation: Specified babel `plugins/presets` manipulate the AST such that it represents a browser suppported code. These plugins use `babel-traverse` to traverse the AST, and contain the code which defines how to modify/replace the original AST with the new AST.
1. Code generation: The transformed new AST is turned into its source code (browser supported) by `babel-generator`.

### CSS Modules

Early CSS was all global. This causes some problems: small changes create sweeping side effects, file becomes hige and unwieldy, etc.

[CSS Modules](https://css-tricks.com/css-modules-part-1-need/) is not an official spec or an implementation in the browser, but rather a process in a build step (with the help of Webpack or Browserify) that changes class names and selectors to be scoped ("automatic class name generation"). Localized scoping is a big improvement for maintainability, but is a performance risk if not managed well.

### Preprocessors

Preprocessors have their own syntax, which requires you to compile or transpile your code into code the browser can understand before sending it to the browser.
Common preprocessors:

- CoffeeScript
- LiveScript
- TypeScript
- Sass/Less

Sass and Less are two popular preprocessors that extend the capabilities of CSS. They allow you to use variables, mixins, functions, nesting, inheritance, and other features that make your code more readable and maintainable. They also have their own syntax, which requires you to compile your code into plain CSS before sending it to the browser.

### Tailwind

Tailwind CSS is a utility-first CSS framework that provides a set of pre-defined CSS classes you can leverage when styling your HTML elements. While highly customizable, the initial set of classes makes for quick prototyping and sweeping standardization.

### Tailwind PostCSS

PostCSS is a tool for transforming CSS with JavaScript. It offers a plugin system and the ability to perform various transformations on your CSS code.

PostCSS is not a preprocessor, but a postprocessor. That means it does not have its own syntax, but instead uses standard CSS and modifies it with plugins. PostCSS takes a CSS file and provides an API to analyze and modify its rules (by transforming them into an Abstract Syntax Tree). This API can then be used by plugins to do a lot of useful things, e.g., to find errors automatically, or to insert vendor prefixes.

For example, this project includes the `@tailwind base;` directive in the global css file, and the `text-xl` class in several components. Both are postprocessed into simple CSS at build time.

There are performance benefits of PostCSS:

- JIT (Just-in-Time): Tailwind v2.1 only generates the styles that are declared in your template files, ensuring that unused classes don't exist in production.
- Purging: Tailwind restricts various CSS idiosyncrasies and keeps the user within its token and class ecosystem, providing full predictability for [PurgeCSS](https://purgecss.com/) to safely remove unused code.
- Config-less Optimization and Compatibility: Tailwind uses minification and compression to deliver optimized CSS bundles.

### Tailwind Setup

[Guide](https://medium.com/@rifantechguy55/setting-up-a-next-js-13-project-with-eslint-and-prettier-735c3ccfd26c)

1. Install Prettier as a development dependency
1. Set up Prettier and ESLint
1. Install and Configure Tailwind CSS
1. Add Tailwind CSS Directives to global css
1. Automatically Sort Tailwind Classes with Prettier

### Emotion vs Tailwind

Emotion is another library designed for writing css styles with JavaScript. It provides powerful and predictable style composition in addition to a great developer experience with features such as source maps, labels, and testing utilities. Both string and object styles are supported.

MaterialUI includes an Emotion-based styling solution.

Emotion's syntax looks closer to standard CSS, with keys and values, vs tailwind classes that abtract away the hyphens/colons/etc. It could be an advantage when you need finer control of values, or when property-to-class recall is too hard.
