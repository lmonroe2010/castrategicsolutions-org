Status pills and taxonomy tags: rounded badges for status (featured, cycle dates, awarded, open, program, hiring) and square mono tags for categories.

**Markup:** `<span class="ssi-badge ssi-badge--<variant>">` with variant `primary`, `accent`, `success`, `gold`, `soft` or `outline`; add `<span class="ssi-badge__dot"></span>` before the label for a live status. Taxonomy tags are `<span class="ssi-tag">`, in lowercase kebab-case ("food-security", "west-county"). The consumer provides the label.

**When to use:** badges mark status on cards and listings ("Q1 2026", "Awarded", "SB 1079"); tags group content by topic. Use `r-pill` only here — never on buttons.

**Don't:** use a badge as a button, or stack more than one or two badges on a card.

Contrast note: the `gold` badge keeps the source's `gold-500` on `gold-50` pair, 3.5:1 — under 4.5:1 for 12px text. Prefer another variant where legibility matters.
