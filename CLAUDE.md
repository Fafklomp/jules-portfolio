# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview
Personal portfolio website for Julia Tucker, Interior Designer. A clean, editorial site showcasing luxury hospitality and residential projects, professional background, and contact details. Built end-to-end using Claude Code with no manual coding.

## Tech Stack
- React 19 + Vite
- Tailwind CSS v4 (via `@tailwindcss/vite` plugin — no `tailwind.config.js` needed)

## Development Commands
```
npm run dev       # start dev server
npm run build     # production build
npm run preview   # preview production build
npm run lint      # lint
```

## Design System
- **Fonts:** Cormorant Garamond (display/headings) + Inter light (body) — loaded via Google Fonts in `index.html`
- **Palette** (defined as `@theme` tokens in `src/index.css`):
  - `--color-offwhite`: `#F7F4EF` — background
  - `--color-stone`: `#2C2822` — primary text
  - `--color-sage`: `#8A9485` — accent / labels
  - `--color-terra`: `#B8643A` — hover highlight
- **Tone:** Warm, editorial, refined — not corporate
- Use `font-family: var(--font-display)` inline for Cormorant Garamond headings (Tailwind's `font-display` utility maps to this token)

## Site Structure
- **Hero** — name, role ("Interior Designer"), short tagline, animated entrance
- **About** — bio, values, Clifton Strengths, personal section
- **Projects** — filterable list (All / Residential / Hospitality) with modal lightbox and project specs
- **Contact** — floating-label form, project type selector, wired to Resend or Formspree

## Architecture
All components live in `src/components/`. Currently built:
- `Projects.jsx` — filter tabs + numbered project list; clicking a row opens the modal
- `ProjectModal.jsx` — overlay panel with specs (year, area, role), description, and tag chips; closes on backdrop click or Escape key

Project data is co-located as a plain array in `Projects.jsx`. No routing library — smooth-scroll single page.

## Key Rules
- Keep the site simple and fast — no unnecessary dependencies
- Use semantic HTML for accessibility
- Make everything responsive (mobile-first)
- Images must be self-hosted in `public/` (not pulled from external CDNs — external image requests may be blocked)
- No backend required; contact form connects to Resend or Formspree
