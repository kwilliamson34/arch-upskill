---
title: "Level Up on Functional Programming"
subtitle: "Following rabbit holes"
date: "2024-08-26"
status: "Done with Todos"
---

### Basics of functional programming

When John Backus coined the phrase functional programming, he specifically said that its main merit was point-free style, and that "functional programming eschews the lambda expression".

Point-free style, also known as tacit programming, is a programming paradigm where function definitions do not explicitly identify the arguments (or "points") on which they operate. Instead, the functions are composed without mentioning their arguments.

This can help writers and readers think about composing functions at a high level, rather than shuffling data at a low level. It can help writers derive more compact and clearer versions of code, and can be particularly useful when deriving efficient programs by calculation.

Key aspects of point-free style:

- Function composition: Functions are combined to create new functions without explicitly mentioning the arguments they will be applied to.
- Higher-order functions: It heavily relies on higher-order functions that take other functions as arguments or return functions.
- Reduced variable declarations: It aims to reduce the explicit declaration of intermediate variables.
- Focus on data flow: It emphasizes the flow of data through functions rather than the explicit transformation of variables.

Example in JavaScript:

```javascript
const add = (x, y) => x + y;
const double = (x) => x * 2;
const addThenDouble = (x) => double(add(x, 1)); // Not point-free
const addThenDouble = compose(double, add(1)); // Point-free
```

Other principles:

- First class functions - functions are data type variables and can be used like any other variables
- Pure functions - no side effects, produce the same output if the given input is the same, kind of like idempotency
- Immutable - program each function to produce the same result irrespective of the program's state
- Least surprise - the function does exactly what is expected from it

Advantages:

- Lazy evaluation - compute when needed, reuse results from previous computations
- Parallelism - functions can be executed in parallel, due to the immutable nature of data
- Composition - functions can be composed to form new functions; easy to reuse
- Easy to read, debug, and test - well defined scope, boundaries, and dependencies
- Efficiency - especially for analyzing extensive data sets and machine learning

Vocab:

- Higher Order Functions - accepts other functions as parameters or returns functions as outputs
- Currying - functions that return functions
- Lambdas - anonymous functions as values
- Recursion - functions can call themselves

Functional languages:

- Haskell
- OCaml
- Scala
- Clojure
- Elm
- PureScript
- Rust

Can support functional paradigm:

- Python
- JavaScript/TypeScript
- C#
- Java
- C++
- Go
- PHP

### Lambdas

The name "lambda" comes from lambda calculus, a mathematical notation for expressing computation based on function abstraction and application. In computer science, the concept of lambda functions was adopted from lambda calculus to represent anonymous functions—functions without a name.

The term "lambda" has different meanings in functional programming and in AWS.

Lambda in Functional Programming:

- An unnamed, inline function definition
- Often used for short-term use
- Can be passed as an argument or returned from other functions
- Typically concise, often consisting of a single expression

Example in Python:
`square = lambda x: x**2`

Lambda in AWS:

- A serverless compute service
- Allows running code without provisioning or managing servers
- Executes code in response to events or HTTP requests
- Automatically scales based on the incoming request rate

Example AWS Lambda function in Node.js:

```javascript
exports.handler = async (event) => {
  // Function logic here
  return {
    statusCode: 200,
    body: JSON.stringify("Hello from Lambda!"),
  };
};
```

### Typescript and functional programming

([source](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes-func.html)) TypeScript began its life as an attempt to bring traditional object-oriented types to JavaScript so that the programmers at Microsoft could bring traditional object-oriented programs to the web. As it has developed, TypeScript’s type system has evolved to model code written by native JavaScripters. The resulting system is powerful, interesting and messy. It is interoperable with Haskell and ML languages with the right conceptual approach. Notice similarities in arrow functions that use the contextual type to type their parameters; the compiler can then complete inferences for interfaces for the parameters.

### Python and functional programming

Python is a multi-paradigm programming language. It supports procedural, object-oriented, and functional programming.

It is a good choice for coding interviews because you can easily pivot to the paradigm that offers the most elegant solution. TODO: try some leetcode problems in Python.

More to come in Python 101 lesson.
