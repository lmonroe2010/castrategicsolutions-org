# Strategic Solutions, Inc. — Marketing Site

Production source for **[castrategicsolutions.org](https://castrategicsolutions.org)** — a single-page Astro site for Strategic Solutions, Inc., a California 501(c)(3) nonprofit working on the West Sonoma County housing crisis through community grants, affordable housing investment, and a free grant-writing service for other Sonoma nonprofits.

## Stack

- **[Astro](https://astro.build)** — static site generation, zero JS shipped by default
- **CSS custom properties** — design tokens in `src/styles/colors_and_type.css`
- **[Netlify](https://www.netlify.com/)** — hosting + continuous deploy

## Local development

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # output to ./dist
npm run preview  # serve the built site locally
```

## Project structure

```
src/
├── layouts/
│   └── Base.astro         # head, meta, OG, GA4 — wraps every page
├── components/
│   ├── SiteHeader.astro   # sticky nav
│   ├── SiteFooter.astro
│   ├── Hero.astro         # + DataStrip below
│   ├── DataStrip.astro
│   ├── About.astro        # Our Story
│   ├── DeployFunds.astro  # 50/25/25 program columns
│   ├── Grants.astro       # Q2 + Q1 ledger; edit arrays at top
│   ├── RobinHoodCallout.astro
│   └── Team.astro
├── pages/
│   └── index.astro        # composes the page
└── styles/
    ├── colors_and_type.css  # design tokens (do not edit ad-hoc)
    └── styles.css           # component styles

public/
├── assets/                  # images, logo, favicons, OG, PDF
└── privacy.html
```

## Editing grant cycles

Grant data lives at the top of [`src/components/Grants.astro`](src/components/Grants.astro) as `Q2_GRANTS` / `Q1_GRANTS` arrays. For Q3 2026 onward: prepend a `Q3_GRANTS` array and add a new ledger block. Long-term, this should move to a CMS (Decap or TinaCMS) so non-developers can add grants.

## Deployment

Pushing to `main` triggers a Netlify build via the configured GitHub integration. Manual deploys also work:

```sh
npm run build
netlify deploy --prod --dir=dist
```

## Design system

The design tokens, component specs, and copy in this repo are the canonical implementation of the **Strategic Solutions, Inc. Design System v1** handoff package. See the original `README.md` in that handoff for the full token table, voice rules, and recommendations.

---
© Strategic Solutions, Inc. · A California 501(c)(3) nonprofit.
