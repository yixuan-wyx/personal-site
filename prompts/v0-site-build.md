# Personal Website V0

## Mission

Build and deploy a personal website that can serve as a long-term digital home for projects, notes, and exploration.

The goal is NOT to build a perfect portfolio.

The goal is to launch a clean, maintainable website today and allow it to grow gradually over time.

Design principle:

Launch first.
Iterate forever.

Avoid over-engineering.

---

# Tech Stack

Required:

* Next.js (App Router)
* TypeScript
* Tailwind CSS
* Git
* Vercel

Optional:

* shadcn/ui
* Framer Motion (only for subtle interactions)

Do not add unnecessary dependencies.

---

# Repository Setup

Initialize a proper Git repository.

Create a clean production-style project structure.

Suggested structure:

/app
/components
/data
/lib
/public
/styles

Prepare project for GitHub version control.

All content should be stored as structured data files rather than hardcoded inside page components.

Example:

/data/projects.ts
/data/notes.ts
/data/site.ts

Future updates should only require editing data files.

---

# Design Philosophy

The website should feel like:

* Personal Lab
* Digital Garden
* Exploration Archive

Not:

* Corporate Resume
* Startup Landing Page
* Design Showcase

Avoid:

* Skill bars
* Percentage ratings
* Complex timelines
* Excessive animations
* Overly decorative UI

Focus on:

* Simplicity
* Readability
* Fast loading
* Long-term maintainability

---

# Theme Support

Must support:

* Light Mode
* Dark Mode
* Theme Toggle
* Persistent user preference

Use Tailwind dark mode implementation.

Theme switching should feel clean and lightweight.

---

# Site Structure

## Home

This is the most important page.

Target height:

Approximately 1.5 to 2 screen heights.

Do not create a long scrolling homepage.

---

### Section 1: Hero

Display:

Yixuan Wang

Builder.
Researcher.
Explorer.

Short description:

Exploring AI, cities, data, systems, and independent projects.

Buttons:

* View Projects
* Notes

Clean and centered layout.

---

### Section 2: Current Focus

Display three focus areas:

* AI Systems
* Urban Data
* Independent Projects

Short descriptions.

Simple cards or blocks.

---

### Section 3: Featured Projects

Display 4-6 selected projects.

Use placeholder content initially.

Examples:

* Personal AI Platform
* Open Data Archive
* Git Podcast
* Heat & Health Dashboard
* NBA API Package

Each card contains:

* Title
* Description
* Tags

---

### Section 4: Contact

Display:

* GitHub
* LinkedIn
* Email

No contact form.

Keep simple.

---

## Projects Page

Grid layout.

Each project contains:

* Title
* Short description
* Tags
* Status
* External link (optional)

Projects should be loaded from:

/data/projects.ts

---

## Notes Page

Simple note archive.

Each note contains:

* Title
* Date
* Summary

Notes should be loaded from:

/data/notes.ts

No CMS required.

No markdown system required for V0.

Static data is sufficient.

---

## About Page

Brief personal introduction.

Include:

* Background
* Interests
* Current focus

Keep concise.

Maximum 1 page.

---

# Visual Style

Requirements:

* Minimalist
* Modern
* Professional
* Responsive

Color palette:

* Neutral colors
* White / Gray / Black

Avoid:

* Bright gradients
* Glassmorphism
* Heavy shadows

Typography and spacing should carry the design.

---

# Performance

Requirements:

* Mobile responsive
* Fast loading
* SEO-friendly metadata
* Accessible navigation

Use Next.js best practices.

---

# Deployment

Prepare for Vercel deployment.

Provide:

* Local development instructions
* Build instructions
* Deployment instructions

Project should deploy successfully without additional modifications.

---

# Success Criteria

The project is successful when:

✓ Runs locally

✓ Builds successfully

✓ Deploys to Vercel

✓ Home page complete

✓ Projects page complete

✓ Notes page complete

✓ About page complete

✓ Light/Dark mode works

✓ Mobile responsive

✓ Easy to update content

---

# Important Constraint

Do NOT over-engineer.

Do NOT add:

* CMS
* Database
* Authentication
* Analytics
* Blog engine
* Comment system
* RSS
* Internationalization

Those belong to future versions.

The only objective is to launch a clean and maintainable V0 today.
