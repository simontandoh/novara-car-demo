# AGENTS.md

## Purpose

This repository is a reusable Next.js App Router template for Novara. Keep changes generic and appropriate for reuse across multiple future projects.

## Working rules

- Preserve the top-level directories: `app/`, `public/`, `components/`, `lib/`, `styles/`, and `docs/`.
- Do not introduce demo-specific branding, services, or market vertical assumptions.
- Keep dependencies minimal unless there is a clear template-level need.
- Prefer small, composable components and straightforward TypeScript.
- Maintain compatibility with `npm run dev`, `npm run build`, and `npm run typecheck`.

## Editing guidance

- Treat `app/page.tsx` as a neutral placeholder unless a downstream project is being built.
- Keep `app/layout.tsx` and `app/globals.css` clean and framework-oriented.
- Put shared config or helpers in `lib/`.
- Put reusable visual tokens in `styles/`.
- Document non-obvious template decisions in `README.md` or `docs/`.

## Before finishing

- Verify the app still builds successfully.
- Flag any manual review items, especially around dependency changes or template assumptions.
