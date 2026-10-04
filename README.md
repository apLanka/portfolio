# Pasindu Lanka — AI Engineer portfolio

Next.js 16 (App Router) · React 19 · Tailwind CSS 4 · TypeScript. No animation libraries.

```bash
npm run dev          # http://localhost:3000
npm run build        # production build (fetches Archivo + JetBrains Mono at build time)
npm run lint
npm run check-types
```

## Design system — "Spec Sheet"

| Layer | Decision |
| --- | --- |
| Surfaces | Three tones switched with `data-tone`: graphite (default), bone, citron. Components read semantic tokens (`--base`, `--fg`, `--mute`, `--line`, `--hi`), so they work on every surface with no overrides. |
| Marker colour | One flat citron (`#d9f24c`), used as a highlighter: fills, selection, active state. No gradients, glows or shadows. |
| Type | Archivo on its **width** axis: `.f-display` (ultra-condensed black caps), `.f-head` (condensed bold), `.f-title` (semi-condensed). JetBrains Mono (`.mono-label`) for metadata. |
| Layout | 12-column hairline grid, full-screen Index menu, desktop section rail. |

All tokens and motion live in `src/app/globals.css`.

## Motion

- **Page transitions**: `components/motion/page-transition.tsx`. A curtain wipes over, the route changes underneath, the curtain exits. Use `TLink` instead of `next/link` for in-site navigation between pages.
- **Enter animations**: `RevealObserver` toggles `data-in` on `[data-reveal]`, `[data-lines]`, `[data-draw]` and `.flow`; CSS does the rest.
- **Scroll-driven**: parallax and the word-by-word paragraph reveal use CSS `animation-timeline` (progressive enhancement; static where unsupported).
- **Hero figure**: `components/figures/agent-graph.tsx`, an agent loop that pauses off-screen.
- Everything respects `prefers-reduced-motion` and works without JavaScript (content is server-rendered).

## Content

Edit content in `src/content/*` — never in components:

- `profile.ts` — identity, about copy, stats, capabilities, section list
- `projects.ts` — case studies (problem, build, pipeline, decisions, impact, stack, links)
- `experience.ts`, `stack.ts`, `writing.ts`

Adding a project to `projects.ts` automatically creates its sheet on the home page, its `/work/[slug]` page, and its sitemap entry.

## Structure

```
src/app/                 routes, metadata, OG image, icon, sitemap, robots
src/components/sections  home page sections
src/components/figures   agent graph, architecture flow
src/components/motion    reveal observer, count-up, page transitions
src/components/nav       header + menu, section rail, footer
src/components/ui        text composition, icons, small primitives
src/lib                  hooks
```
