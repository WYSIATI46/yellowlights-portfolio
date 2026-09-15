# Yellowlights.ai Codex Guidance

## Working model
- Work on a feature branch, not `main`.
- Do not commit, push, merge, or deploy to production unless the task explicitly requires it.
- Prefer Vercel preview deployments for review before production.
- Keep changes narrowly scoped to the requested task. Preserve intentional UI/UX choices unless the task asks to change them.

## Before changing code
- Inspect the relevant implementation and nearby dependencies first.
- Identify security, data-loss, production, and dependency risks before consequential changes.
- Do not install packages or modify `package.json` / `package-lock.json` unless required. If dependency changes are needed, explain why first.

## Validation
- Run `npm run build` before considering code ready.
- For UI changes, run the local Vite app and visually verify the affected flow in the built-in browser.
- Check `git status` and staged/unstaged diffs before finishing.
- Do not report a fix as complete if validation failed or was not performed.

## Production safety
- Treat `main` as production-bound because Vercel auto-deploys pushes to `main`.
- Never force-push `main` or rewrite shared history.
- Never expose secrets, tokens, API keys, private data, or environment values in client code, commits, logs, or prompts.
- Do not change Vercel production settings, domains, environment variables, or production aliases without explicit approval.

## Quality
- Prefer maintainable, minimal solutions over clever abstractions.
- Distinguish confirmed defects from subjective improvement suggestions.
- If a requested change conflicts with existing architecture or creates material risk, flag it before implementation.