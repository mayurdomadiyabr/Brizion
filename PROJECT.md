# Brizion — Next.js 15 Storefront

Country-localized (US / CA / IN) marketing storefront for the Brizion skincare brand.
Built on Next.js 15 (App Router, RSC, async params) with React 19.

## Stack
- **Next.js 15** — App Router, Server Components, async params, MetadataRoute API.
- **React 19** + TypeScript strict.
- **lucide-react** for stroke icons.
- Inline styles + `colors_and_type.css` design tokens (no Tailwind, faithful to the design system).

## i18n (US / CA / IN)
- All routes are scoped under `/[locale]/…` where `locale ∈ {us, ca, in}`.
- `src/middleware.ts` redirects `/` to the user's best locale based on cookie → `x-vercel-ip-country` → `Accept-Language` → default (`us`).
- `src/lib/locales.ts` is the single source of truth: currency, fx, shipping windows, tax copy, language tag, contact email.
- The `<CountrySelector>` in the nav writes a `brz-locale` cookie and rewrites the path.

## SEO
- Per-page Metadata via the `buildMetadata()` helper:
  - canonical URL
  - hreflang `alternates.languages` for every locale + `x-default`
  - OpenGraph + Twitter cards (1200×630)
  - robots / googleBot (max-image-preview large, full snippet)
- `app/sitemap.ts` outputs every locale × every route, with `<xhtml:link rel="alternate">` per language.
- `app/robots.ts` is permissive for `*` and **explicitly allows AI crawlers**: GPTBot, ClaudeBot, PerplexityBot, Google-Extended, Applebot-Extended, etc.
- `<title>` template via root layout: `%s · Brizion`.

## AEO (Answer Engine Optimization)
- **JSON-LD structured data on every page** (`src/lib/jsonld.tsx`):
  - `Organization` (root layout) — brand identity, multi-region contact points.
  - `WebSite` with SearchAction (locale layout).
  - `BreadcrumbList` (every nested page).
  - `Product` with `Offer`, `AggregateRating` (PDP).
  - `FAQPage` (home).
- All copy uses **plain Q&A blocks** so answer engines can extract direct quotes.
- Microdata (`itemScope`, `itemProp`) on `<ProductCard>` for legacy search engines.

## GEO (Generative Engine Optimization)
- `app/llms.txt/route.ts` serves a curated `/llms.txt` summary
  ([llmstxt.org](https://llmstxt.org)) so generative engines (ChatGPT, Claude,
  Perplexity, Gemini) get a concise, accurate brand brief instead of guessing.
- `<meta name="ai-content" content="allow">` is emitted in `<head>` to signal
  consent to AI ingestion.
- Locale-specific descriptions (currency, shipping windows, return policy) are
  surfaced in metadata so AI summaries stay correct per region.

## Routes
- `/` → middleware redirects to `/{locale}`.
- `/{locale}` — home (hero, best-sellers, FAQ).
- `/{locale}/shop` — full collection.
- `/{locale}/products/{slug}` — PDP (statically generated for every locale × product).
- `/sitemap.xml`, `/robots.txt`, `/llms.txt` — global.

## Run
```bash
cp .env.example .env.local      # set NEXT_PUBLIC_SITE_URL
npm install
npm run dev                     # http://localhost:3000
npm run build && npm start      # production
```

## Design System
The original Brizion design system files (`assets/`, `fonts/`, `ui_kits/`,
`preview/`, `colors_and_type.css`, `README.md`, `SKILL.md`) are preserved at the
repo root for reference. The Next.js app consumes copies under `public/assets`,
`public/fonts`, and `src/app/brizion-tokens.css`.
