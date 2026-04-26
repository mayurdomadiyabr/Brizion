# Brizion Design System

> Editorial beauty. Clinical confidence. Soft skin, strong typography.

---

## About Brizion

**Brizion** is a modern cosmetic skincare brand targeting women 30+ who want visible, clinically-backed results without the sterility of a pharmacy aisle or the noise of viral TikTok beauty. The brand voice is **reassuring, expert, feminine, and quietly confident** — it reads like a column in a grown-up beauty magazine, not a hype cycle.

The brand wordmark is a high-contrast **didone-style serif** (think *Vogue*, *Harper's Bazaar*) set in dramatic wide-tracked uppercase. This editorial serif is the anchor of the entire system; everything else — soft pastel product backdrops, clean sans body copy, studio-lit flatlays — orbits around it.

### Reference
- **Visual + interaction reference:** [gopure.com](https://gopure.com) — cosmetic e‑comm site with product-first photography, pastel lavender/blush/sand backdrops, editorial italic callouts (*"new here?"*, *"can't get enough"*), and a clean, clinical-but-warm layout vocabulary. Brizion is **inspired by**, not a copy of, this aesthetic — we share the same market posture but use our own type, color, and motion system.
- **Brand asset given:** `uploads/brizion (1).jpg` — the Brizion wordmark, black on white, didone-style serif. Copied into `assets/logo-brizion-wordmark.jpg` and processed into transparent-background PNGs (`logo-brizion-wordmark.png`, `logo-brizion-wordmark-white.png`).

### Products represented
Only the **marketing website** is represented in this system (single product line). Brizion is a direct‑to‑consumer skincare brand — the surfaces are: home/landing, product detail page (PDP), product listing (PLP / collection), about, and cart drawer. No mobile app, admin dashboard, or native product was provided.

---

## Index

| File / folder | Purpose |
|---|---|
| `README.md` | You are here. Brand overview, content & visual foundations, iconography. |
| `SKILL.md` | Cross-compatible Agent Skill frontmatter — makes this system downloadable as a Claude Code skill. |
| `colors_and_type.css` | CSS vars for colors, type scale, spacing, radii, shadows, motion. Import this from every artifact. |
| `assets/` | Logos (wordmark, light & dark), sample product placeholders, background textures. |
| `preview/` | Small HTML cards that populate the Design System tab (one card per token group / component cluster). |
| `ui_kits/website/` | JSX components + `index.html` — a click-thru recreation of a Brizion product page / PDP. |

---

## Content Fundamentals

Brizion copy sounds like a **quietly confident, expert friend** — a dermatologist-adjacent voice that has seen the trends come and go and isn't impressed by hype. It's warm but never syrupy, specific but never scientific-cold.

### Voice
- **Second-person, singular.** "You" and "your skin" — never "we all" or "ladies."
- **Brand as "we."** "We believe feeling beautiful should be within reach." Never "I" — Brizion is a house, not a person.
- **Active verbs, present tense.** *Hydrates. Plumps. Firms. Brightens.* Verbs are the workhorses; they lead every product subtitle.
- **Specific claims, softened with "the look of."** Never *"reduces wrinkles"* — always *"reduces the look of wrinkles."* Legally safer and tonally more honest.
- **Editorial italics for emotional accents.** Pull-quote phrases get a didone italic treatment: *"new here?"*, *"can't get enough"*, *"real women, real results."* Use sparingly — one per section max.

### Casing
- **Wordmark:** always uppercase, wide-tracked — `BRIZION`. Never lowercased, never mixed case.
- **Headlines:** sentence case. "Meet our best sellers" — not Title Case, not ALL CAPS.
- **Eyebrows / section labels:** UPPERCASE + letter-spaced (0.22em). "BEST SELLERS", "NEW ARRIVAL", "AWARD WINNER."
- **Buttons:** sentence case. "Add to cart", "Shop bundles", "Learn more."
- **Product names:** Title Case. "Dramatically Dewy Serum", "Advanced Repair Eye Cream."

### Vocabulary
- **Use:** *firm, plump, sculpt, smooth, refine, renew, hydrate, illuminate, clinical, dermatologist-tested, clean, gentle, powerful, visible, confidence.*
- **Avoid:** *miracle, revolutionary, breakthrough, game-changer, anti-aging* (say *age-defying* or *firming* instead), *girl/girly, babe, hun, slay.*
- **No emoji.** Zero. Emoji break the editorial feel. Use italic serif accents or unicode arrows (→, ↗) instead.
- **Numbers are hero.** "4% Peptide Blend." "After 8 weeks." "30% Vitamin C." Concrete percentages earn credibility.

### Examples
> **Hero headline:** "Skincare that meets you *where you are.*"
> **Eyebrow:** "NEW ARRIVAL"
> **Product subtitle:** "Firms the look of wrinkles."
> **Testimonial framing:** *"Customers can't get enough"*
> **CTA:** "Shop the set →"
> **Microcopy:** "Spend $49 to earn free shipping."
> **Reassurance:** "60-day money-back guarantee. No questions, no hassle."

---

## Visual Foundations

### Colors
Brizion is built on **warm cream + near-black** as the chassis, with a trio of pastel accents — **lilac, blush, sand/sage** — borrowed from the product-packaging tradition of cosmetic brands. Accents are always soft and desaturated; saturated color is essentially banned except in photography.

- **Ink (`#0E0E0E`)** — wordmark + primary text. Near-black, never pure `#000`.
- **Cream (`#F7F2EC`)** — signature page/section backdrop. Warmer than off-white.
- **Shell (`#FDFAF6`)** — lightest cream, default page bg.
- **Lilac** scale — `#F4EFF7 → #8566A5`. Dominant product-shot background color.
- **Blush** scale — `#FBF1ED → #D9927A`. Warm secondary, often for skin/body products.
- **Sage / Sand** — used for editorial accent blocks (story, testimonials).

See `colors_and_type.css` for the full token list with CSS vars.

### Type
Three families, no more.
- **Landour Display (SemiBold)** — the official Brizion display face, loaded from `fonts/Landour-SemiBoldDisplay.woff2`. Used for the wordmark, hero headlines, and display type. Playfair Display is kept as a fallback.
- **Cormorant Garamond** — softer serif for lead paragraphs, long-form (about page, story blocks, pull quotes).
- **Manrope** — clean geometric sans for UI, body copy, labels, buttons, eyebrows.

No third serif. No display sans. No script/handwriting fonts.

### Spacing
4px base. Use the token scale (`--brz-s-1` through `--brz-s-24`). Sections on the website breathe — vertical rhythm is **80–120px between blocks**, never tighter. Cards inside a section are **24–32px apart**.

### Backgrounds
- **Solid pastel washes** are the primary section background device. A PDP hero is a single soft lilac sheet; the product floats in the middle with a long ground shadow.
- **Product photography** is always studio-lit on a flat pastel ground — never gradients, never outdoor, never environmental.
- **Lifestyle photography** (about page, testimonials) is **warm, natural, slightly overexposed** — soft outdoor light or clean window light. Never harsh, never cool-toned.
- **No repeating patterns or textures.** No hand-drawn illustrations. No stock-photo gradients.
- **No full-screen video** as hero. Occasional short product-application loops on PDP, muted, autoplay.

### Motion
- **Restrained and slow.** Nothing bounces. Nothing springs. Default easing is `cubic-bezier(0.2, 0.6, 0.2, 1)` — a calm, tapered ease-out.
- **Durations:** 160ms (micro — hover opacity), 240ms (default — color, transform), 420ms (slow — page-in, reveal).
- **Page entries** fade + translate 8–12px up. No 3D, no parallax, no flying elements.
- **Hover on product cards:** cross-fade to a close-up texture shot (the cream swatch). This is the single "signature" motion — borrowed straight from the cosmetic-site idiom.

### Interaction states
- **Hover on links/text buttons:** drop opacity to 0.6. That's it.
- **Hover on primary button:** background darkens ~8%, no transform.
- **Hover on product card:** image cross-fades to swatch; the frame never moves.
- **Press state:** scale to 0.98 over 120ms. Subtle.
- **Focus:** 2px outline in `--brz-lilac-400`, 2px offset. Visible but elegant.
- **Disabled:** opacity 0.4, no other change.

### Borders
- **Hairlines** are king. `1px solid rgba(14,14,14,0.10)` separates most sections.
- No colored borders except for focus rings.
- **No "rounded corner + left-color-accent" cards.** Forbidden — AI-slop trope.

### Shadows
Soft, diffuse, studio-lit. Three real elevations:
- `--brz-shadow-sm` — resting cards.
- `--brz-shadow-md` — hovered cards, dropdowns.
- `--brz-shadow-product` — lavender-tinted long shadow (`0 30px 60px -20px rgba(70,40,90,0.18)`) reserved for floating product bottles. This is the one place we use a tinted shadow.

### Radii
- **Editorial buttons & pills:** fully rounded (`999px`) — echoes the product-jar silhouette.
- **Cards & images:** 14–22px. Soft but not pillowy.
- **Inputs:** 8px. Reads as clean/clinical.
- **Never** sharp (`0`) except for the wordmark framing.

### Transparency & blur
- **Nav bar:** translucent cream, `backdrop-filter: blur(12px)`, only when scrolled.
- **Cart drawer:** opaque cream — no blur.
- **Modal scrims:** `rgba(14,14,14,0.4)`, no blur.
- Used very, very sparingly.

### Imagery color-grade
Warm, slightly desaturated, film-like. Never cold. Never high-contrast. A faint lavender cast in shadows is on-brand. Black-and-white is reserved for editorial headshots only (founder portraits, dermatologist bios).

### Layout rules
- Max content width: **1320px**. Editorial modules occasionally break to full-bleed.
- Grid: **12 columns**, 32px gutter.
- Nav height: **72px**. Sticky on scroll with backdrop-blur.
- Footer: dark `--brz-ink` background with cream type — the one dark surface in the system.

---

## Iconography

Brizion leans heavily on **typography and photography**, not icons. The icon system is deliberately minimal.

- **Icon library:** [Lucide](https://lucide.dev/) — linked via CDN (`https://unpkg.com/lucide@latest`). Stroke-based, 1.5px stroke, minimal detail. *Flagged substitution: Brizion likely has no custom icon set; Lucide is the closest clean, editorial-compatible default. If the real brand has a custom icon kit, swap in via the `assets/icons/` folder.*
- **Stroke weight:** 1.5px. Round line caps. No filled icons except for solid star (reviews).
- **Default size:** 20px in UI, 24px in nav, 16px inline with text.
- **Color:** inherits current text color — never colored on its own.
- **Usage:** cart, search, account, hamburger, chevrons (product carousels), checkmarks (benefit lists), star (reviews). That's roughly the whole set.
- **No emoji.** Ever. See Content Fundamentals.
- **Unicode as typographic accent:** `→`, `↗`, `·`, `—` are welcome — they belong to the editorial type system, not the icon system.
- **SVG product icons** (the "clinically proven", "dermatologist recommended", "clean & safe" badges seen on PDPs) are **custom line illustrations** — line-only, ink color, usually circular. Placeholder treatments live in `assets/badges/`.
- **No PNG icons.** Everything is SVG (Lucide) or inline glyph.

---

## Caveats & flagged substitutions

1. **Display typeface is now official.** The real brand face, **Landour SemiBold Display**, is loaded from `fonts/`. Italic, light, and heavy weights are not yet provided — if you need italics for editorial accents, please share the italic cut.
2. **Icon set is a substitution.** Using Lucide as a default — replace with the brand's real icon set if one exists.
3. **No codebase was provided.** Every component in `ui_kits/website/` is modeled from the goPure reference aesthetic + the wordmark's typographic DNA. If a real Brizion site/Figma exists, please attach it so the kit can be pinned to real components rather than plausible ones.
4. **Product imagery is placeholder.** No real Brizion product packshots were provided. Lavender-on-pastel flat rectangles stand in; swap for real packshots.
5. **Color palette inferred from reference + wordmark.** If Brizion has a brand guidelines PDF with a locked palette, drop it in so we can pin exact hex values.
