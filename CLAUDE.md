# How to work on this site

This repo is the live source for castrategicsolutions.org (Strategic Solutions, Inc.).
Merging to `main` publishes automatically through Netlify, which runs `npm run build`
(Astro) and publishes `dist/`. Every merge is snapshotted (tag `live-…` plus a Release
zip of the built site) by `.github/workflows/snapshot.yml`.

## Rules
- Work on a branch and open a pull request. Send Luke the Netlify Deploy Preview link.
  Merge only after Luke says "publish", "approved" or "go live" in chat.
- Never push to `main` directly. Never run `netlify deploy --prod`.
- Never change DNS, domains, email records or the registrar.
- Keep Netlify Forms working (if any are added): data-netlify, the honeypot and form-name
  stay intact.
- Never put prices, lenders, partners, buyer or tenant details, or eviction notes on the site.
  Property cards show address, city, status, mission line, units and month resold only.
- Never publish an item on HOLD until it is cleared in chat. Leave the current live text
  in place until then.
- Grant figures come only from the current SSI Website Grant List, entered in
  `src/data/figures.js`; the build fails if the totals don't add up. Both sites quote the
  same totals, with an "as of" date (`AS_OF` in that file), updated each quarter.
- Follow /design-system/README.md for voice and visual rules. Reuse existing classes and
  the breakpoints in `src/styles/styles.css` (760px primary; 880 / 540 / 480 fine-tuning).
- To replace an image in `public/assets/`, give it a new filename (e.g. `-v4`) and update
  the reference. Browsers and Netlify's edge cache a published URL, so reusing a name can
  keep showing the old file.
- Report to Luke in plain language. Any document for Luke must be a PDF, never .md.
- Rollback on request: revert the merge PR, or republish the previous Netlify deploy.
