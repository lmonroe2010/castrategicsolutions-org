# Strategic Solutions, Inc. — Marketing Site

[![Netlify Status](https://api.netlify.com/api/v1/badges/5d8aa793-af7a-4c23-8f27-1bd20cae1757/deploy-status)](https://app.netlify.com/projects/strategic-solutions-inc/deploys)

Production source for **[castrategicsolutions.org](https://castrategicsolutions.org)** — a single-page Astro site for Strategic Solutions, Inc., a California 501(c)(3) nonprofit working on the West Sonoma County housing crisis through community grants, affordable housing investment, and a free grant-writing service for other Sonoma nonprofits.

**How this repo deploys:** every change is made on a branch and opened as a pull request, which gets a Netlify Deploy Preview link for review. Merging the pull request into `main` publishes the site automatically (Netlify runs `npm run build` and publishes `dist/`); a failed build never publishes, so the previous version stays live. Each merge is also saved as a dated `live-YYYY-MM-DD-HHMM` tag and a GitHub Release with a zip of the built site. **Never run `netlify deploy --prod`** — manual deploys bypass review and the dated snapshots. Working rules for Claude sessions are in [`CLAUDE.md`](CLAUDE.md).

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
│   ├── GiffenHouse.astro  # featured affordable-housing project
│   ├── Grants.astro       # Community Grants (reads src/data/figures.js)
│   ├── RobinHoodCallout.astro
│   └── Team.astro
├── data/
│   └── figures.js         # "as of" date + every grant figure, checked at build
├── pages/
│   └── index.astro        # composes the page
└── styles/
    ├── colors_and_type.css  # design tokens (do not edit ad-hoc)
    └── styles.css           # component styles

public/
├── assets/                  # images, logo, favicons, OG, PDF
└── privacy.html

design-system/               # SSI design system reference (not published)
.github/workflows/           # dated snapshot of every production release
```

## Editing grant figures

All grant figures and the "Figures as of" date live in [`src/data/figures.js`](src/data/figures.js). Each quarter, add the new cycle to `CYCLES`, update `TOTAL` and `AS_OF`, and open a pull request. The build checks that every cycle, the overall total, the grant count and the organization count add up, and fails rather than publish a figure that doesn't.

## Design system

The SSI design system reference (brand book, tokens, component specs and logo) is in [`design-system/`](design-system/README.md). Use it for new sections and for voice; reuse the site's existing classes where they already exist.

---
© Strategic Solutions, Inc. · A California 501(c)(3) nonprofit.
