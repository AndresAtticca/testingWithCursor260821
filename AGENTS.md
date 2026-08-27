<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Repository-specific rules

This repository is a minimal Next.js (App Router, TypeScript, `src/`) app.

### Git and publishing

- Never create a git commit unless the user explicitly asks for a commit.
- Never push, force-push, amend published history, or deploy unless the user explicitly asks.
- Never change git config or skip git hooks.

### Scope and dependencies

- Keep the implementation minimal, readable, and easy to change.
- Do not add features, files, or abstractions that are not required.
- Do not add or upgrade dependencies unless they are necessary for the requested work. Prefer Node.js and Next.js built-ins; Vitest is the approved test runner.
- Do not introduce Tailwind CSS or other styling frameworks unless asked.
- Do not change or downgrade the installed Node.js version.

### Quality bar

- After implementation, run tests, lint, and a production build (`npm test`, `npm run lint`, `npm run build`) and fix failures before considering the work done.
- Keep random-number logic in a small pure function and cover it with automated tests.
- Prefer clear names and small modules over comments that restate the code.

### How to explain work

- Explain all relevant changes: what changed, why, and how to verify it.
- Name the files you touched and any commands you ran.
