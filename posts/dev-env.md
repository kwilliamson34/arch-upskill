---
title: "Repeatable motion dev environment"
subtitle: "Checklist for setting up efficent dev environment from scratch"
date: "2024-07-30"
status: "Done"
---

1. Install VSCode
1. Get extensions
   1. For each langauge: support + intellisense. OK to let VSCode autodetect to find the right one. TODO look into Snippets
   1. Eslint
   1. Prettier
   1. Preferences (CMD+Shift+P): format on save + organize imports on save
   1. GitLens (blame, codelens, hovers)
1. Test the embedded VSCode terminal and debugger
1. Get Chrome + setup Profile. Establish some browser bookmarks: Blogs, Tools, Diagramming, Actions, Tutorials, Cheatsheets, etc
1. File system:
   1. Set up GitHub folder, add shortcut in Finder, and create VSCode workspace. View Hidden Files in Finder with Cmd + Shift + .
   1. Set up a Screenshots folder, add shortcut in Finder, and change the default location for screenshots (from the screenshot app Options)
   1. Add the "Open Folder Context Menus for VsCode extension" and setup windows across mac desktops to 3-finger-scroll between
1. Pin Terminal to dock
1. Install Homebrew. Note that Homebrew automatically graps CLI Tools for XCode, whihch includes Git. Ensure brew also gets added to your Path.
1. Install nvm. Not recommend to use brew for this. Initialize `~/.zshrc` with `source ~/.nvm/nvm.sh`.
1. Install NodeJS with nvm: `nvm install latest`
1. Install GitHub Desktop
1. Helpful libs within projects: Tailwind, MUI/react-icons, Clsx, Date-fns, SWR
1. Ensure Eslint and Prettier are available for the project
1. Set up Typescript early: init tsconfig.json, strict mode, no nulls, make sure automatic imports work
1. Consider AI code generation tools/workflows. For this project, I'm now using the Cursor IDE with built-in autocomplete and chatbot. It imported the VSCode settings and extensions I had set up previously (except I had to ask the bot how to re-setup "format on save").
