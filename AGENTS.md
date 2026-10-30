<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Project Context
- **Project:** `studio-space-client` (Next.js 16.4.3)
- **App structure:** App Router (`src/app/`)
- **Styling:** Tailwind CSS (v4)
- **Compiler:** Babel React Compiler (v1) enabled.

## Development Commands
- `npm run dev` – Starts development server.
- `npm run build` – Production build.
- `npm run lint` – Runs ESLint.

## Important Gotchas
- **Tailwind v4:** Uses CSS-first configuration. Check `tailwind.config` files carefully as they may be deprecated or unnecessary in favor of standard CSS imports.
- **Next.js 16:** Assume non-standard behaviors; check documentation inside `node_modules/next` if encountering unexpected runtime errors.

