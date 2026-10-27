Form inputs and selects with a label, a helper line, and default, focus and error states.

**Markup:** `div.ssi-field` containing `label.ssi-field__label`, then `input.ssi-input` or `select.ssi-select`, then an optional `div.ssi-field__helper`. Add `is-error` to the input and helper for an error. Focus styling applies on `:focus`. The consumer provides the label text, placeholder, value and helper or error message.

**When to use:** the contact form ("I'm reaching out about…"), grant interest forms, newsletter signup.

**Do:** keep the `r-md` (6px) radius and the 3px navy focus ring. Write errors as plain instructions ("Please enter a complete phone number").

Contrast note: the source's `cream-300` input border is 1.6:1 on `paper`, under 3:1 for a control border; helper text in `stone-500` is 4.49:1 on `cream-50`. Both are kept as the source has them.
