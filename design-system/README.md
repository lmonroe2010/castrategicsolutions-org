# Strategic Solutions, Inc. — Design System

A design system for **Strategic Solutions, Inc. (SSI)** — a California nonprofit applying business-minded strategy to West Sonoma County's housing crisis through direct investment, rent subsidies, home safety upgrades, and education.

> **Tagline:** Housing Progress Through Innovation
> **HQ:** 12697 Graton Rd., Sebastopol, CA · 707-331-3121
> **Web:** [castrategicsolutions.org](https://castrategicsolutions.org)

This system gives a design agent — or a human designer — everything they need to produce on-brand decks, marketing pages, grant reports, donor letters, and prototypes that look unmistakably *SSI*.

---

## Sources used

| Source | URL / Path | Used for |
|---|---|---|
| Live marketing site | `https://castrategicsolutions.org` | Mission copy, programs structure, funding model, team, content tone |
| Brand mark | `assets/SSI_Logo_Sharp.png` (provided by user) | Logo, primary palette anchor |

Re-attach these if a future agent needs deeper access — the live site was fetched as text only during this build, so visual styling decisions were made by the agent against the constraints picked in the kickoff form (classic & institutional type, navy + steel + cream palette).

---

## Org snapshot

**Strategic Solutions, Inc.** is a California nonprofit founded by Luke Monroe. It runs a **50 / 25 / 25** model:

- **50% — Community Grants** to local nonprofits focused on affordability, housing, food security, and education. Q1 2026 inaugural cycle awarded $50K across six 501(c)3s (Healthy Room Project, TLC Child & Family Services, Children's Museum of Sonoma County, Redwood Empire Food Bank, Sonoma County Acts of Kindness, shARK Education Foundation).
- **25% — Affordable Housing Investment** — direct investment / down-payment equity for housing projects in unincorporated West County, including tiny-home villages and multifamily.
- **25% — Grant Writing Position** — a full-time grant writer matchmaking Sonoma County nonprofits with state, federal, and private funds.

A subsidiary, **Robin Hood Homes, LLC**, participates in California's **SB 1079** program — acquiring post-foreclosure properties at the 45-day match window and deed-restricting them as affordable housing for 30 years.

**Geographic focus:** West Sonoma County's rural and unincorporated communities — Sebastopol, Forestville, Guerneville, Occidental, the Russian River corridor.

**Primary audiences:** funders, government agencies, nonprofit partners, civic leaders, community members.

---

## Content fundamentals

### Voice

- **Confident but humble.** SSI claims discipline and rigor without overpromising. *"We don't accept that housing instability is inevitable — we look for the angles others miss."*
- **Operator-tone, not academic.** Sentences are direct. Numbers do the heavy lifting. No filler adjectives.
- **Plural first-person.** "We" — never "I". Speaks for the org.
- **Reader-respecting "you".** Calls to action address the reader directly ("Interested in applying for a grant?") but most copy is descriptive third-person.

### Tone

Professional & trustworthy first — the primary audience is funders, gov agencies, and nonprofit partners who need to take SSI seriously. Warmth comes through *content* (community-first, rural, specific place names) rather than *style*.

### Conventions

| Element | Rule | Example |
|---|---|---|
| Casing | Title Case for headings; sentence case for body | "How We Deploy Our Funds" |
| Emphasis | *Italic* for short conceptual phrases; **bold** for the load-bearing claim in a paragraph | *"the discipline and creativity of business strategy"* |
| Em-dashes | Used freely for parenthetical asides (en-dashes for ranges) | "We bring business rigor to a human problem — because the need is too urgent for anything less." |
| Numbers in body | Spell out one through nine; numerals for 10+ and all money/stats | "1,952 people", "9 in 10 renters", "$50,000" |
| Money | Always with `$` and comma separators; no decimals on round figures | `$15,000` not `15K` |
| Locations | Specific. Name the town, the road, the corridor. Never just "the region" | "12697 Graton Rd., Sebastopol" |
| Acronyms | Spell out first use, abbreviate after; keep SB 1079 stylized as "SB 1079" | "Strategic Solutions, Inc. (SSI)" |
| Stats blocks | Large numeral on one line, plain-language explanation below | `1,952` / "People experiencing homelessness in Sonoma County" |
| Emoji | The live site uses emoji as eyebrow icons (📞📍📧🤝⚖🏡). **The design system replaces these with proper icon glyphs** (see Iconography) for a more institutional feel — but emoji are acceptable in informal channels (email, partner letters). |
| First person | Plural ("we"), never singular. Founder quotes are attributed. |

### Copy patterns

- **Eyebrow → headline → lead** is the dominant rhythm. The eyebrow is a 1-3 word category label (e.g. "Who We Are", "Transparent by Design", "Get In Touch"); the headline is a sentence-case serif statement; the lead is one paragraph of sans-serif body.
- **Pull-quotes** carry conviction statements. Always attributed when external; when internal/founder, may be unattributed if the tone is unmistakable.
- **Data callouts** anchor most marketing sections. A big numeral + a 10-15 word explanation. SSI never uses a stat without context.
- **Avoid:** marketing-speak ("game-changing", "revolutionary"), nonprofit clichés ("vulnerable populations", "underserved communities" — use specific terms like "unincorporated West County" instead), exclamation points.

---

## Visual foundations

### Color

The brand pivots on three colors, all warm and earthen — none are pure web defaults.

- **Navy `#1B3A6B`** — the logo blue. Used for headings, primary text on light, primary buttons, the inverted "dark mode" surface (footer, hero banners). Carries authority.
- **Steel `#2A6FAE`** — accent and CTA. Earthen Sonoma clay tone. Used sparingly: a single accent on a page, the eyebrow label color, primary CTA hover, data-mark highlights.
- **Cream `#F4EFE6`** — primary surface. Page background tilts toward `#FBF8F2` (cream-50) so paper stays softer than `#FFFFFF`. Pure white is reserved for elevated cards.

Two supports:

- **Steel** (`#5E7551`) — used for success states, rural/community contexts, and as a secondary illustrative accent.
- **Gold** (`#C49628`) — used for grant-related callouts, dollar marks on data figures, "investment" framing.

Text colors are warm: `--ink-700` (`#2C2A24`) for primary text, `--stone-600` (`#54503F`) for body — both biased warm rather than cool gray.

### Typography

Classic & institutional pairing — chosen to read as a policy brief or annual report, not a tech product:

- **Display:** *Source Serif 4* — Adobe's open-source institutional serif. Used at semibold (600) for h1/h2/h3, regular for big data figures.
- **Body:** *Source Sans 3* — pairs natively with Source Serif. Used at regular (400) for body, semibold (600) for buttons and emphasis.
- **Mono:** *JetBrains Mono* — data tables, code, callouts.

Both Source families ship from Google Fonts; no custom fonts were provided. **⚠️ Substitution flag:** If SSI has a contracted brand font, please share it so we can swap in the real file under `fonts/`.

Type scale is a modular 1.250 (major third) anchored at 17px body, with `clamp()` for responsive display sizes.

### Backgrounds & surfaces

- **Primary page surface:** warm cream (`--cream-50`). Never pure white.
- **Elevated cards:** white paper (`--paper`) with a navy-tinted shadow, hairline border, and subtle 1px inner stroke.
- **Inverted sections:** deep navy (`--navy-600` or `--navy-800`) — used for hero banners, the footer, and "manifesto" callout sections. Body text on navy uses `--cream-50`.
- **Section dividers:** prefer thin steel or gold rules over heavy backgrounds. Avoid alternating zebra-stripe sections.
- **Imagery direction:** photography should be **warm-graded**, mid-contrast, naturalistic — rural Sonoma settings (small homes, vineyards, redwoods, community gatherings), people in candid moments, no stock-photo gloss. B&W treatments are acceptable for archival or portrait contexts. **No** illustrated avatars, isometric scenes, or hand-drawn whimsy.
- **No gradients** except for full-bleed photographic backgrounds where a navy gradient protects text legibility (`linear-gradient(180deg, rgba(20,43,81,0) 40%, rgba(20,43,81,0.85) 100%)`).
- **No patterns / textures** in the base system — paper is plain. (Optional: a subtle 4% noise texture is acceptable on the navy hero band if needed for print.)

### Spacing, layout

- 4pt baseline. Tokens `--s-1` … `--s-12` (4 → 128).
- Three container widths: `--container-narrow` (760px, long-form reading), `--container-base` (1100px, default), `--container-wide` (1280px, hero / wide grids).
- Section padding is generous — `--s-10` to `--s-12` (80–128px) between major page sections.
- Body line length: 65–75 characters. Lead paragraphs: 55–65.

### Corner radii

Restrained. Institutional tone wants near-rectangular geometry:

- Buttons & inputs: `6px` (`--r-md`)
- Cards: `10px` (`--r-lg`)
- Large image frames: `16px` (`--r-xl`)
- Pills (status badges): `999px` (`--r-pill`) — sparingly

Never use radii above 16px on rectangular surfaces — soft rounded cards read as consumer-product, not nonprofit.

### Shadows & elevation

Three levels, all navy-tinted (not neutral gray) to harmonize with the palette:

- `--shadow-sm` — resting card on cream
- `--shadow-md` — interactive hover state
- `--shadow-lg` — modal / overlay
- `--shadow-inset` — subtle 1px stroke for elevated cards on cream

**Cards** sit on cream with: white background, `--shadow-sm`, `--shadow-inset` stroke, `--r-lg` radius. On hover (where interactive): translate up 2px, swap to `--shadow-md`.

### Borders

Hairlines only — `1px solid var(--color-border)` (a soft cream). Heavy borders are reserved for **the steel accent rule** — a 3px steel line under section eyebrows or beside pull-quotes. This is the brand's signature edge treatment.

### Buttons

- **Primary:** navy fill, cream text, 6px radius, semibold body label, 12px vertical / 24px horizontal padding. Hover: darken to navy-700, no scale change. Active: navy-800, 0.5px translate-y.
- **Secondary:** navy outline (1.5px), navy text, transparent fill. Hover: navy fill + cream text.
- **Accent / CTA:** steel fill — used for the single most important action on a page.
- **Ghost:** no border or fill, navy text, underline on hover.
- **Disabled:** 50% opacity, no pointer.

Never use shadows on buttons. Never round buttons more than 6px (no pill buttons except for tags/badges).

### Hover & press states

- **Links:** color shifts from navy → steel. No underline change.
- **Buttons:** color darkens by ~10–15% lightness. No scale change on press for primary actions — keep institutional feel. Tertiary/icon buttons may shrink to `0.97` on press.
- **Cards (interactive):** lift `translateY(-2px)`, swap to `--shadow-md`, animate over `var(--dur-base)` with `var(--ease-out)`.
- **Inputs:** focused state shows a 2px navy ring offset by 2px (`outline: 2px solid var(--navy-500); outline-offset: 2px;`).

### Motion

Restrained. Easings:

- `--ease-out` (default) — most enter / hover transitions
- `--ease-in-out` — bidirectional transforms
- `--ease-emph` — rare; only for hero or marquee moments

Durations: `fast` 150ms (hover/focus), `base` 220ms (cards, menus), `slow` 420ms (page transitions, hero reveals). **No bounces. No 600ms+ swooshes.** Fades over slides. Stat blocks can count up on enter — that is the showiest the brand goes.

### Transparency & blur

Sparingly. Accepted uses:

- 85–95% opacity navy gradient over hero photography for text legibility
- 0.10 ink rgba for dividers
- *Avoid* glassmorphism, frosted nav bars, blur-behind effects — they read as too tech-product for an institutional nonprofit.

### Layout rules / fixed elements

- Top nav: sticky, 72px tall, cream background with a `1px` cream-200 bottom border. No drop shadow until you scroll past the hero.
- Footer: full-width navy (`--navy-800`) band, cream type, 4-column on desktop / stacked on mobile.
- CTA "Apply for a Grant" pill button is the single fixed-color call-to-action across the site (steel).

---

## Iconography

The live site (castrategicsolutions.org) currently uses **Unicode emoji** (📞 📍 📧 🤝 ⚖ 🏡 ✍ 📊) as inline icons. This works but reads as more casual than the chosen "professional & trustworthy" direction.

### Design-system approach

We standardize on **Lucide** ([lucide.dev](https://lucide.dev)) — a clean, open-source line-icon set with consistent 1.5px stroke weight and 24px viewport. Lucide:

- Reads as institutional, not consumer-tech
- Has direct one-to-one replacements for every emoji used on the live site (phone, map-pin, mail, handshake, scale, home, pencil, bar-chart)
- Is CDN-available and free

**⚠️ Substitution flag:** The live site does not use Lucide today. This is a recommended upgrade by the design system; the live emoji approach remains acceptable until icons are swapped in.

### Loading Lucide

```html
<script src="https://unpkg.com/lucide@latest"></script>
<i data-lucide="home"></i>
<script>lucide.createIcons();</script>
```

Or with React:

```jsx
import { Home, MapPin, Phone } from "lucide-react";
```

### Usteel rules

- **Stroke 1.5px** at 20–24px size for body contexts; 28–32px for section eyebrow icons; 40–56px for large card headers.
- **Color:** navy (`--navy-600`) on cream, cream (`--cream-50`) on navy, steel (`--steel-500`) only when the icon is the primary attention-grab.
- **Never** mix line and filled icons in the same context. Stick with line.
- **Never** add background plates or colored circles behind icons — keep them as inline glyphs.
- **Bullet lists** may use icons in place of bullets (a small navy `check` or `arrow-right`) for variety; default is unstyled disc bullets in stone-500.

### Imagery / illustration

There is **no illustrated mark set** in this brand. The logo's stylized California-with-houses-on-a-hand is the only illustration in the system. Don't generate spot illustrations, character art, or isometric scenes. If a layout needs visual interest beyond icons, use:

1. Photography (warm-graded Sonoma scenes — see Backgrounds)
2. Large numeric data figures (a `$50,000` set in Source Serif is its own piece of design)
3. The steel rule treatment

---

## File index

```
.
├── README.md                  ← this file
├── assets/notes/SKILL.from-standalone.md ← Agent Skills manifest (Claude Code-compatible)
├── colors_and_type.css        ← CSS custom properties + element defaults
├── assets/
│   └── SSI_Logo_Sharp.png     ← primary logo, navy on transparent
├── preview/                   ← Design System tab cards (one HTML per concept)
│   ├── colors-primary-navy.html
│   ├── colors-accent-steel.html
│   ├── colors-supports.html
│   ├── colors-neutrals.html
│   ├── colors-semantic.html
│   ├── type-display.html
│   ├── type-body.html
│   ├── type-scale.html
│   ├── type-data-figures.html
│   ├── spacing-scale.html
│   ├── radii.html
│   ├── shadows.html
│   ├── buttons.html
│   ├── inputs.html
│   ├── cards.html
│   ├── data-callout.html
│   ├── eyebrow-pattern.html
│   ├── badge.html
│   ├── pull-quote.html
│   ├── logo-marks.html
│   ├── logo-on-dark.html
│   └── iconography.html
└── ui_kits/
    └── marketing-site/        ← marketing website UI kit (3 variants)
        ├── README.md
        ├── index.html         ← interactive multi-page click-thru
        ├── Header.jsx
        ├── Hero.jsx
        ├── DeployFunds.jsx    ← key screen: "How We Deploy Our Funds"
        ├── GrantsList.jsx     ← key screen: grants awarded
        ├── DataStat.jsx
        ├── Button.jsx
        ├── Card.jsx
        ├── Footer.jsx
        └── styles.css
```

Open `preview/*.html` cards individually, or browse them all in the **Design System** tab of this project.

---

## How an agent should use this system

1. **Read `colors_and_type.css` first.** All tokens you need are there.
2. **Read this README's Content fundamentals before writing copy.** Match the voice.
3. **Read `ui_kits/marketing-site/` before building marketing pages.** Lift components, don't reinvent them.
4. **For decks:** import `colors_and_type.css`, set headings in Source Serif 4 / 600, body in Source Sans 3 / 400. Use the navy + cream split and steel sparingly.
5. **Numbers are the brand.** When in doubt, lead with a stat.

---

## Tokens and components

- Take every color, type style, spacing step, radius, shadow and size from `tokens.json` (compiled to `tokens.css`); its token names match the `--` custom properties in `colors_and_type.css`.
- Motion (`--ease-*`, `--dur-*`) and `--hairline` live only in `colors_and_type.css`.
- Build buttons, badges and tags, cards, data callouts, the section opener, form inputs, pull-quotes, the logo and icons from `components/<Name>/` — each folder has a live `preview.html` and a `README.md` with its markup and rules; their classes (`ssi-…`) are in `components/bundle.css`.
- Use `assets/SSI_Logo_Sharp.png` for the mark and `assets/team/` for team portraits.
