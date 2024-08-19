---
title: "AI for code generation"
subtitle: "Tradeoffs of different tools and workflows"
date: "2024-08-19"
status: "In Progress"
---

[Battle of AI coding tools, 2023](https://e2b.dev/blog/github-copilot-vs-cursor-so-vs-aide-battle-of-ai-coding-tools)

There has been a boom of AI-powered coding tools. They have been a big topic, as people are trying to test as many of them as possible. The blog above compared the more established GitHub Copilot with two newly launched AI coding copilots, Cursor and Aide, both built as a modification of VSCode.

- [GitHub Copilot](https://github.com/features/copilot)
- [Sweep](https://sweep.dev/)
- [GPT Engineer](https://github.com/AntonOsika/gpt-engineer)
- [codium](https://www.codium.ai/)
- [Open Interpreter](https://openinterpreter.com/)
- [Replit](https://replit.com/) / [Anthropic](https://docs.anthropic.com/en/docs/welcome) / [Vellum](https://www.vellum.ai/)
- [Cursor](https://cursor.so/)
- [Aide](https://codestory.ai/)

### GitHub Copilot

Copilot is the established player, but only about 3 years old. Created by Microsoft-backed OpenAI. It has been trained on a selection of English language and source code from publicly available sources, including code in public repositories on GitHub.

There is no free tier.

### Cursor

Cursor by Anyspehere is an AI-powered code editor that recently gained big popularity. The IDE is a fork of VSCode, it can generate code from scratch, ask questions about your codebase, edit code with prompts, debug the code, or explain it. Cursor is currently being developed by a small team and is described by them as an "attempt at a new way to write code."

While Cursor is its own IDE, during setup it allowed me to import my VSCode extensions and even my workspace.

The chatbot has a Global Context where you can "chat with your codebase" and ask holisitc questions.

Questions posed:

- is there a better way to read, parse, and render markdown than the way im doing it?
- what other types should i consider defining?
