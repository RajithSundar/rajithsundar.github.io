# Design System: Mineral Ledger

## Visual World
An architectural field ledger set on cool mineral pewter paper (`oklch(96.2% 0.009 205)`) with deep graphite-slate ink (`oklch(18% 0.018 205)`) and a restrained deep botanical spruce signal (`oklch(39.5% 0.115 158)`) drawn from the sunlit foliage in Rajith's portrait.

## Typography (Uncommon, Enlarged Scale)
Served via Fontshare (Indian Type Foundry):
- **Display (`--font-display`)**: `Erode` (weight `600`), stone-cut wedge serif set oversized (`--text-display` up to `5.4rem`, `--text-section` up to `3.75rem`, tight `-0.025em` tracking, `text-wrap: balance`).
- **Body (`--font-body`)**: `Supreme` (weights `400` and `500`), clean Neo-Grotesk set slightly larger than standard web defaults (`19px` / `1.1875rem` body, `16px` / `1rem` metadata, `1.6` line-height, `text-wrap: pretty`).
- **Outlier (`--font-outlier`)**: `Panchang` (weight `600`), reserved strictly for one role: the `.wordmark` in header and footer.
- **Weight discipline**: Strictly three weights across the entire document (`400`, `500`, `600`).

## Anti-Slop Invariants
- Zero eyebrows or tracked-caps labels; headings announce themselves in plain sentence case.
- Zero middle-dot chains, `01/02` decorative counters, glued link arrows, pulsing dots, or em/en dashes in prose.
- Zero gradient text, purple/cyan hues, warm beige defaults, side-stripe cards, or nested cards.
- Surface ladder alternates cleanly across sections: mineral paper hero -> recessed stone band (`--color-paper-2`) interactive switcher -> full-width hairline repository table -> asymmetric split work history -> recessed academic record band -> calm statement colophon.
