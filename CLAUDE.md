# CLAUDE.md

## Purpose

Personal portfolio and resume site for Ignacio Gurí (ignacioguri.me). Showcases professional summary, technical skills, work experience, and GitHub projects.

## Tech Stack

- **Framework:** Next.js 16 (App Router) with React 19 and TypeScript
- **Styling:** Tailwind CSS v4 with PostCSS, dark mode via `dark` class + localStorage
- **GitHub integration:** Octokit SDK fetches projects dynamically (7-day in-memory cache)
- **Analytics:** @vercel/analytics
- **Deployment:** Vercel
- **Node version:** 22 (.nvmrc)

## Project Structure

```
app/                  # Next.js App Router
  layout.tsx          # Root layout (dark mode init, FloatingNav, Footer)
  page.tsx            # Home — composes all sections
  secret/page.tsx     # Easter egg: client IP/UA info
  api/hello/route.ts  # Simple API route
components/           # Reusable UI (Accordion, Button, FloatingNav, ThemeSwitcher, Icons)
sections/             # Page sections (Header, Abstract, Skills, Experience, Projects, Footer)
lib/                  # Utilities and types (github.ts, types.ts, stringUtils.ts)
styles/global.css     # Tailwind imports, custom utilities, dark mode vars
public/logos/         # Tech and company logo assets
```

Path aliases configured in tsconfig: `@components/*`, `@lib/*`, `@sections/*`, `@styles/*`.

## Key Patterns

- Server Components by default; `"use client"` only for interactive parts (Accordion, FloatingNav, ThemeSwitcher)
- Experience and skills data are hardcoded in section components; projects are fetched from GitHub API at render time
- Dark mode: inline script in layout prevents flash, theme persisted in localStorage
- ESLint flat config enforces consistent type imports and import ordering

## Environment Variables

- `GITHUB_API_TOKEN` — required for GitHub API access (see `.env.example`)

## Scripts

```
npm run dev        # Dev server
npm run build      # Production build
npm start          # Production server
npm run lint       # ESLint check
npm run lint:fix   # ESLint autofix
```
