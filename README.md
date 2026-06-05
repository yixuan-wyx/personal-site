# Yixuan Wang — Personal Website V0

A clean, maintainable personal website built with Next.js App Router, TypeScript, and Tailwind CSS.

The goal is to launch a simple digital home now and keep improving it over time.

## Structure

```txt
app/          Routes and page layouts
components/   Reusable UI components
data/         Structured site content
public/       Static assets
prompts/      Current and future build instructions
```

Content updates should mostly happen in:

- `data/site.ts`
- `data/projects.ts`
- `data/notes.ts`

## Local development

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

## Build

```bash
npm run build
```

## Deployment

This project is prepared for Vercel deployment, but deployment is intentionally undecided for now.

When ready, connect this repository to Vercel and use the default Next.js build settings.
