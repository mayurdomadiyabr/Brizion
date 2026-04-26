---
name: brizion-design
description: Use this skill to generate well-branded interfaces and assets for Brizion, a modern editorial cosmetic skincare brand, either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. Always import `colors_and_type.css` and use the `--brz-*` CSS variables rather than hand-picking colors or fonts. Reuse components from `ui_kits/website/` where possible — they're modular JSX.

If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand. The key motifs to preserve:
- **Editorial didone serif** for all display type and the wordmark (wide-tracked uppercase).
- **Warm cream backgrounds** (`--brz-cream`, `--brz-shell`) not pure white.
- **Pastel lilac/blush/sand** accents — never saturated color outside photography.
- **Italic serif accents** for emotional section openers (*"new here?"*, *"can't get enough"*).
- **"The look of"** softener on every efficacy claim.
- **No emoji.** Ever.
- **Soft motion** — 240ms, tapered ease-out, no bounce.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions about audience / surface / fidelity, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.
