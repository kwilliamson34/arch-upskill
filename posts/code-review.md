---
title: "Code Review Standards"
subtitle: "My personal philosophy and community discussion"
status: "Not Started"
---

- [Standard](https://google.github.io/eng-practices/review/reviewer/standard.html)
- [What to look for](https://google.github.io/eng-practices/review/reviewer/looking-for.html)
- [Style Guide](https://google.github.io/styleguide/)

### Including tests in every code review

- An edge case is a bug that only occurs for a subset of users (one operating parameter is at an extreme, max or min).
- A corner case is a bug that only occurs under complex circumstances (multiple operating parameters are at extreme levels, and the combination creates a unique environmental conidtion).
