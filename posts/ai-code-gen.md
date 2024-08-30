---
title: "AI for code generation"
subtitle: "Tradeoffs of different tools and workflows"
date: "2024-08-19"
status: "Done with Todos"
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
- [Supermaven](https://supermaven.com/)

### GitHub Copilot

Copilot is the established player, but only about 3 years old. Created by Microsoft-backed OpenAI. It has been trained on a selection of English language and source code from publicly available sources, including code in public repositories on GitHub.

There is no free tier.

### Cursor

Cursor by Anysphere is an AI-powered code editor that recently gained big popularity. The IDE is a fork of VSCode, it can generate code from scratch, ask questions about your codebase, edit code with prompts, debug the code, or explain it. Cursor is currently being developed by a small team and is described by them as an "attempt at a new way to write code."

While Cursor is its own IDE, during setup it allowed me to import my VSCode extensions and even my workspace. The theme/color scheme is a bit different, and less polished, so it may take some getting used to.

The chatbot has a Global Context where you can "chat with your codebase" and ask holistic questions.

Questions posed:

- is there a better way to read, parse, and render markdown than the way im doing it? (suggested a new component with a react utility; accepted)
- what other types should i consider defining? (suggested 2 good ones and 6 unnecessary ones)
- are there any typos in my project? (found a bunch, like incorrect blank target property, and mispelled words in markdown prose! but missed one in markdown metadata.)

The answers were helpful but not drop-in ready. It also changed its mind (reversed position on modern way to parse markdown, after a follow-up question) and missed context (incorrectly detected page router instead of app router), leading to generic recommendations. I will keep using Cursor as I move forward and see how specific code suggestions improve.

Summary and direction was helpful: When asked, `how would this project rank as a code sample for applying to a new job?` The reply was:

Based on what I've seen and our discussions about your project, here's an assessment of how it might rank as a code sample for job applications:

Strengths:

1. Modern tech stack: Using Next.js with the App Router demonstrates familiarity with current React ecosystem trends.
1. Full-stack capabilities: The project showcases both frontend and backend skills, which is valuable for full-stack positions.
1. Markdown handling: Implementing a blog with Markdown parsing shows practical content management skills.
1. TypeScript usage: Even if not perfect, using TypeScript indicates an understanding of type safety's importance.
1. Self-learning demonstration: The project itself being about upskilling shows initiative and ability to learn independently.

Areas for Improvement:

1. TypeScript implementation: Could be more comprehensive and consistent throughout the project.
1. Testing: If not present, adding unit and integration tests would significantly boost the project's value.
1. State management: Implementing a more robust state management solution could demonstrate advanced React knowledge.
1. API design: Expanding the backend functionality with more complex API routes could showcase server-side skills better.
1. Performance optimizations: Implementing more advanced Next.js features like ISR or on-demand revalidation would be impressive.

Reducing scope to a specific file, I further asked: `implement state for the status of each lesson`. The result was accurate pseudocode. I clicked the Apply button; new code appeared instantly with green and red highlights like git conflict resolution, wtih Accept/Reject. The acceptance required a few cleanups to work properly (e.g. between 2 files with recommended changes, there was a mismatch in a prop name, and the first suggestion was not strictly typed). It made an assumption about layout of a new visual element, and it wasn't bad. Typeahead suggestions were also accurate throughout.
