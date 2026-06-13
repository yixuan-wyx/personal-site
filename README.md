# Yixuan Wang — Personal Website V0

A clean, maintainable personal website built with Next.js App Router, TypeScript, and Tailwind CSS.

The goal is to launch a simple digital home now and keep improving it over time.

## Status

V0 is live on Vercel.

This version is intentionally simple: a personal lab / digital garden foundation with structured content files and minimal UI complexity.

## Tech stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Vercel

## Structure

```txt
app/          Routes and page layouts
components/   Reusable UI components
data/         Structured site content
public/       Static assets
prompts/      Current and future build instructions
```

## Updating content

Most content updates should happen in the data files:

- `data/site.ts` — name, intro text, contact links, focus areas, about content
- `data/projects.ts` — project cards and project metadata
- `data/notes.ts` — simple note archive entries

This keeps the page components stable and makes future updates easier.

## Local development

```bash
npm install
npm run dev
```

Then open:

```txt
http://localhost:3000
```

For mobile testing on the same local network, run:

```bash
npm run dev -- -H 0.0.0.0
```

Then open the Mac's local network address from the phone, for example:

```txt
http://<local-ip>:3000
```

## Build

```bash
npm run build
```

## Lint

```bash
npm run lint
```

## Deployment

The site is deployed through Vercel.

Typical deployment flow:

1. Push changes to GitHub.
2. Vercel detects the update automatically.
3. Vercel runs `npm run build`.
4. If the build succeeds, the production site is updated.

No environment variables are required for V0.

## Known follow-ups

- Add real project links as they become available.
- Add more complete project and note content over time.
- Decide on a custom domain.
- Recheck the theme toggle behavior on mobile.
- Consider a China-accessible mirror only if mainland access becomes important.

## Principle

Launch first. Iterate forever.
