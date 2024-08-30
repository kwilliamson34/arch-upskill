---
title: "React Native"
subtitle: "101 course"
date: "2024-08-30"
status: "Done with Todos"
---

### Shared concepts with React

- same core: algos for state, components, and rendering
- same syntax: JSX, props, and state
- same lifecycle methods and support hooks for functional components

### Differences from React

- React Native uses native components instead of web/HTML+CSS components. E.g. `<View>` instead of `<div>`, `<Text>` instead of `<p>`, etc.
- React Native does not use Create React App; React Native CLI instead
- React Native supports only a subset of CSS properties
- React Native uses React Navigation for navigation instead of URL based React Router
- React Native is tested with device simulators or Expo developer tools instead of browsers
- React Native Paper is available for UI components instead of Material-UI

Often in a monorepo setup, code can be shared between a react native app and a web app (react or next).

### Expo

[Expo](https://expo.dev/) is an open-source framework for building native apps that run on Android, iOS, and the web. It is a popular choice for building React Native apps because it provides a set of tools and libraries that make it easier to develop, review/test, and deploy.

- initialize project from CLI
- file-based routing, TypeScript support
- hot reloading
- access to every device API (maps, camera, images, natvigation, etc)
- can write custom native code (e.g. in Swift or Kotlin) if you wish
- end-to-end testing with Detox
- QR codes generated on pushes/branches for ephemeral testing on real devices and simulators
- ability to manage submisssions to app stores
- dashboards and collaboration tools

Today I followed the [Expo tutorial](https://docs.expo.dev/get-started/create-a-project/) to create a new project and write some react native functionality. There is also an [onboarding guide](https://expo.dev/onboarding/hello) for real apps. Findings:

- Development workflow/debug/iteration options:
  - Expo Go is a free app / limited sandbox for previewing app during development.
  - A development build is a debug build of your app that contains the expo-dev-client package. By using development builds instead of Expo Go, you gain full control over the native runtime, so you can install any native libraries, modify any project configuration, or write your own native code.
- On first dev start, I broke the watcher bc i had too many files open in my IDE
- On successful dev start, CLI outputs a QR code to scan to launch the app with Expo Go, as well as localhost URL to launch in web or emulators. Startup on device tool a couple seconds, then launched nicely with developer tools onscreen on the iPhone (gesture recognition: shake device to re-open developer tools at any point).
- Configuring the [camera plugin](https://docs.expo.dev/config-plugins/introduction/) was simple, and I found a [drop in component](https://docs.expo.dev/versions/latest/sdk/camera/) that allowed the app to grant camera permissions, display the camera's POV, and flip the camera in use (back vs front). I was surprised, based on the docs, that the functionality was previewable/interactive in Expo Go.
- React Native components will take some getting used to; for example, buttons are achieved with <Pressable> and <Text>.
- The component-level CSS was a bit clunky, but there are solutions like NativeWind and Tamagui for inline style props and shorthand.

### Boilerplates

- [create-t3-turbo](https://github.com/t3-oss/create-t3-turbo): turbo repo, expo, nextjs, prisma, tRPC
  - tRPC = TypeScript Remote Procedure Call, an API framework
  - [The “T3 Stack”](https://create.t3.gg/en/introduction) is a web development stack focused on simplicity, modularity, and full-stack typesafety. The core pieces are Next.js and TypeScript. Tailwind CSS is almost always included. If you're doing anything resembling backend, tRPC, Prisma, and NextAuth.js are great additions too.
- [tamagui](https://tamagui.dev/): tamagui, solito, next, expo

### Aside/refresher on React hooks

- the useContext hook allows you to access the value of a context provided by a parent component. Context API is a built-in feature of React and is simpler and more lightweight than Redux.
- useEffect hook lets you synchronize a component with an external system. For example, you might want to control a non-React component based on the React state, set up a server connection, or send an analytics log when a component appears on the screen. Watch out because they are an easy way to create race conditions and memory leaks.
- useMemo lets you cache the result of a calculation between re-renders. Super helpful for skipping expensive recalculations.
- useRef lets you reference a value that’s not needed for rendering. Accesssed by `ref.current`. A common use case is to reference a DOM element, or to setInterval or setTimeout that runs in the background.
- useState: local component state
- others / less common: useCallback, useDebugValue, useDeferredValue, useId, useImperativeHandle, useInsertionEffect, useLayoutEffect, useReducer, useSyncExternalStore, useTransition
- two new hooks in experimentation: useActionState and useOptimistic
- [ref](https://react.dev/reference/react/hooks)

TIL: In Strict Mode, React will call your component function twice in order to help you find accidental impurities. This is development-only behavior and does not affect production.

### Putting it all together

While this isn't directly related to React Native, I came across it and found it helpful:

[From 0 to Production - The Modern React Tutorial (RSCs, Next.js, Shadui, Drizzle, TS and more)](https://www.youtube.com/watch?v=d5x0JCZbAJs)

Ignore "software is not easy, boys" (34:32)... Theo - t3.gg has some hot takes but is a prominent youtuber in the space and this video covers a lot of ground.
