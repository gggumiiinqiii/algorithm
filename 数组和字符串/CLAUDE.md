# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Personal LeetCode algorithm practice repo. Solutions are written in JavaScript (Node.js), primarily covering arrays and strings problems (some DP, greedy, sliding window problems as well).

## How to run

There is no build system, test framework, or package.json. Each file is a standalone script:

```bash
node "88.合并两个有序数组.js"
```

Files that export via `module.exports` won't print anything when run directly; those with inline test calls at the bottom will print output.

## Commit convention

Use Chinese `feat:` prefix:

```
feat: 问题描述
```

## Code conventions

- File naming: `{LeetCode编号}.{问题描述}.js` (e.g., `88.合并两个有序数组.js`, `72.编辑距离.js`)
- JSDoc comment block at the top with `@param`/`@return` annotations copied from LeetCode
- Chinese inline comments explaining algorithm logic
- Console.log for debugging output is common and acceptable
- Use `module.exports` when the file is meant to be required elsewhere; use inline test calls at the bottom for self-contained verification
- Preference for modern JS: `const`/`let`, arrow functions, destructuring, `Array.from()`, `Map`/`Set`
