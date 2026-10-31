<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Development & Verification
- **Dev server:** `npm run dev`
- **Lint:** `npm run lint` (ESLint 9 flat config in `eslint.config.mjs`)
- **Typecheck:** `npx tsc --noEmit` (no dedicated npm script)
- **Build:** `npm run build`

## Architecture & Configuration
- **App Structure:** Next.js 16 App Router in `src/app/`. Path alias `@/*` maps to `./src/*`.
- **Tailwind CSS v4:** Standard CSS-first setup via `@import "tailwindcss";` in `src/app/globals.css`. Turbopack CSS loader configured in `next.config.ts`.
- **React Compiler:** React 19 Compiler enabled (`reactCompiler: true` in `next.config.ts`).
