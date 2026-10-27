Buttons for page actions: primary (navy), accent CTA (steel), secondary (navy outline), ghost (underlined text), in a small size and a disabled state.

**Markup:** a `<button>` (or `<a>`) with `ssi-btn` plus one variant class: `ssi-btn--primary`, `ssi-btn--accent`, `ssi-btn--secondary` or `ssi-btn--ghost`. Add `ssi-btn--sm` for the small size and the `disabled` attribute for the disabled state. The consumer provides the label, in Title Case ("Apply for a Grant", "Learn More").

**When to use:** primary for the main action in a section; accent (`steel-500`) for the single most important action on a page — "Apply for a Grant" is the site's fixed accent CTA; secondary beside a primary; ghost for inline "read more" links.

**Do:** keep the radius at `r-md` (6px) and the label semibold. Darken on hover (`navy-700` for primary), with no scale change on press.

**Don't:** add shadows to buttons, round them past 6px, or use pill buttons — pills are for badges only. Never put two accent buttons on one page.

Text contrast: `cream-50` on `navy-600` is 10.6:1; `cream-50` on `steel-500` is 5.0:1.
