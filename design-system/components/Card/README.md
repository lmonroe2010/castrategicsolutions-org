Elevated white cards on cream, in two forms: a program card with a big percentage and a 3px steel category rule, and a grant card with the award amount, recipient and blurb.

**Markup:** a `div.ssi-card`. Program card: `ssi-card__rule` (optional), `ssi-card__pct`, `h3.ssi-card__title`, `ssi-card__desc`. Grant card: `ssi-card__amount`, `ssi-card__recipient`, `ssi-card__blurb`. The consumer provides the figure, title or recipient, and one short sentence; the card's container sets its width (the site lays them in 2–3 column grids).

**When to use:** the 50 / 25 / 25 program breakdown, grants awarded, any set of parallel items that leads with a number.

**Do:** sit cards on `color-bg` (cream) with `paper` fill, `r-lg` radius, `shadow-sm` plus `shadow-inset`. Interactive cards lift `translateY(-2px)` and swap to `shadow-md` on hover. Write money as `$15,000`, never `15K`.

**Don't:** round past `r-xl` (16px), use colored left-border cards, or show a stat without its plain-language context.
