# AGENTS.md

This file provides guidance to Codex (Codex.ai/code) when working with code in this repository.

## Overview

Marketing website for Kartavya Technology™ — an enterprise AI engineering and
Agentic AI company, official Anthropic partner, operated by Inferex Pvt Ltd.
Built with Next.js (App Router), TypeScript and Tailwind CSS, statically
exported (no Node server required in production).

The full positioning brief this site was built from is in
`MASTER PROMPT — BUILD KARTAVYA TECHNOLOGY WEBSITE.md`.

The previous static HTML/CSS/JS site is preserved for reference in
`legacy-static/`.

## Stack

- **Next.js 14 (App Router)** + **TypeScript** + **Tailwind CSS**
- `output: "export"` in `next.config.mjs` — `npm run build` produces a fully
  static site in `out/` that can be hosted anywhere (no Node server needed)
- `lib/data.ts` — all editable content: solutions, services, industries,
  technology stack, case studies, insights posts, navigation
- `lib/site.ts` — site-wide config: company name, parent company, address,
  WhatsApp number, Calendly link, social links
- `components/` — Navbar, Footer, WhatsAppButton, ContactForm, FadeIn
  (scroll-reveal), PageHero, FlowDiagram
- `app/` — one route per page (App Router), dynamic `[slug]` routes for
  solutions, case studies and insights posts

## Commands

```bash
npm install       # install dependencies
npm run dev       # local dev server at http://localhost:3000
npm run build     # type-check, lint, and export static site to out/
```

Deploy by uploading the contents of `out/` to any static host.

## Pages

- `/` — homepage (hero, trust bar, problem statement, solutions, Axiominds
  Consulting case study, agentic AI section, build process, services,
  industries, founder, contact CTA)
- `/solutions`, `/solutions/[slug]` — 6 solutions (ai-agents, customer-ai,
  recruitment-ai, knowledge-ai, operations-ai, developer-ai)
- `/services` — 8 services
- `/case-studies`, `/case-studies/[slug]` — currently Axiominds Consulting only;
  add new entries to the `caseStudies` array in `lib/data.ts`
- `/technology` — model-agnostic tech stack + technology partners
- `/responsible-ai` — AI governance principles
- `/about` — company + founder narrative
- `/insights`, `/insights/[slug]` — technical blog posts; add entries to the
  `insights` array in `lib/data.ts`
- `/contact` — contact form (mailto fallback), WhatsApp, Calendly, address
- `/privacy` — privacy policy

## Design tokens

Colours are defined in `tailwind.config.ts` under `theme.extend.colors`
(`accent` #3b82f6 blue, `bg.primary` #0a0a0a, `bg.secondary` #0f172a,
`bg.card`, `text.primary/secondary/muted`, `border`). Shared utility classes
(`.card-surface`, `.btn-primary`, `.btn-secondary`, `.eyebrow`,
`.section-padding`, `.fade-in-up`) live in `app/globals.css`. This preserves
the dark theme from the original static site.

## WhatsApp

A floating WhatsApp button (`components/WhatsAppButton.tsx`) appears on
every page, linking to `wa.me/917795691794` with a pre-filled message. The
number and default message are configured in `lib/site.ts`.

## Social sharing card

Open Graph and Twitter Card metadata (title, description, and
`/images/og-hero.png` as the hero image) are set once in `app/layout.tsx`
via the Next.js Metadata API and inherited by every page; individual pages
override `title`/`description` via their own `metadata` export.

## Footer / company info

The footer states Kartavya Technology™ is a subsidiary of **Inferex Pvt
Ltd**, and lists the registered office address (BeHive, 27th Main, HSR
Layout, Bangalore - 560102, India). Edit `lib/site.ts` to change either.

## Responsive breakpoints

Tailwind defaults are used throughout (`sm` 640px, `md` 768px, `lg` 1024px).
Nav collapses to a hamburger menu below `lg`; grids collapse from 3/4
columns down to 2 then 1 column at `sm`/below.

## External links

- Calendly booking: `https://calendly.com/dharam-tiwari/30min`
- Founder LinkedIn: `https://www.linkedin.com/in/dharamtiwari/`
- Company LinkedIn: `https://www.linkedin.com/company/kartavyatech/`
- Twitter/X: `https://x.com/draj_02`
- WhatsApp: `https://wa.me/917795691794`
