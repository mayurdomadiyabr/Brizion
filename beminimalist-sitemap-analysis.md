# BeMinimalist.co — Sitemap & Page Layout Analysis

> **Platform:** Shopify  
> **Date Analyzed:** March 8, 2026  
> **Total URLs:** ~400+ pages across 4 sub-sitemaps  
> **Company:** Uprising Science Pvt Ltd, Jaipur, Rajasthan, India  
> **Global Sites:** India (beminimalist.co), Global (global.beminimalist.co)  
> **CDN:** SpeedSize (sfycdn.speedsize.com) + Shopify CDN  
> **Reviews:** Yotpo  
> **Cookie Consent:** Custom cookies popup  
> **Multi-country:** Country/language selector (India, US, UK, UAE, Malaysia, Canada, Australia)

---

## 1. Sitemap Structure Overview

The main sitemap (`sitemap.xml`) is a **sitemap index** containing 4 child sitemaps:

| Sub-Sitemap | URL Count | Update Freq |
|---|---|---|
| `sitemap_products_1.xml` | ~82 products (incl. homepage) | daily |
| `sitemap_pages_1.xml` | ~70 pages | weekly |
| `sitemap_collections_1.xml` | ~115 collections | daily |
| `sitemap_blogs_1.xml` | 4 blog indexes + ~130+ articles | weekly |

---

## 2. Page Types & Layouts

### 2.1 Homepage (`/`)

**Layout Sections (top to bottom):**
1. **Announcement Bar** — Rotating offers (e.g., "Buy 2 and get a free Glass Bottle!", "Free shipping", "Trust Circle rewards")
2. **Navigation Header** — Search, Account, Cart, Hamburger menu
3. **Hero/Banner Section** — (likely carousel/banner, not fully rendered in text)
4. **"Our Best Sellers" Carousel** — Horizontal product slider with:
   - Product image (swipeable)
   - Product name
   - Concern/benefit tagline
   - Yotpo star ratings
   - Sale price / MRP with strikethrough
   - Size selector dropdown
   - "Add to cart" CTA
5. **"Shop by Category" Section** — Thumbnail carousel: Skin, Hair, Bath & Body, Lip, Eye
6. **"Shop by Concerns" Section** — Thumbnail carousel: Uneven Tone, Acne, Oiliness, Fine Lines, Dryness, Hair Fall, Anti-Dandruff
7. **"New Launches" Carousel** — Same product card format as Best Sellers
8. **"The Future of Personal Care" Brand Values Section** — Cards:
   - Transparency
   - Efficacy
   - Affordable
   - Only the best (ingredients)
9. **Minimalist Trust Circle Section** — Loyalty program CTA
10. **Download App Section** — App download CTA
11. **GST Notice Banner** — Tax reduction info
12. **Footer** — Company Overview, Quick Links, Contact Us, Social links, Copyright

---

### 2.2 Product Detail Page (PDP) — `/products/{slug}`

> **All individual products share the SAME layout template.** Kits and individual products use identical structure.

**Layout Sections (top to bottom):**
1. **Announcement Bar** — Same as homepage
2. **Navigation Header** — Same as homepage
3. **Product Image Gallery** — Multiple images (scrollable/swipeable), 6+ images per product
4. **Product Title** — H1 heading (e.g., "Hyaluronic + PGA 2% Face Serum")
5. **Product Tagline** — Bold subtitle (e.g., "Intense, Multi-Level Hydration without the Oily Feel")
6. **Product Description** — Short paragraph about the product
7. **Product Badges** — Icons: Fragrance free, Essential oil free, Non-comedogenic
8. **Pricing Block**:
   - Sale price
   - MRP with strikethrough
   - Discount percentage
   - "(incl. of all taxes)"
9. **Quantity Selector + Add to Cart Button**
10. **"What Makes It Potent?" Section** — Bullet-point list of key formulation highlights
11. **Ingredient sourcing note** — Where ingredients come from (e.g., "Jan Dekker, Netherlands")
12. **"Ideal For" Section**:
    - Skin type
    - Concerns
    - Suitable age
    - Pregnancy/Lactation safety
13. **"Clinical Results" Section** (if available):
    - Study description
    - Comparison chart/graph
    - Study methodology details (instrument, report number)
14. **"Consumer Studies" Section** (if available):
    - Percentage-based results (e.g., "93% noticed less dryness")
    - Patch testing note
15. **"How to Use" Section**:
    - Step-by-step instructions
    - When to use (AM/PM)
    - Frequency
16. **Sticky Price + Add to Cart** (repeat for convenience)
17. **"Goes Well With" Section** — Cross-sell product cards
18. **"Ingredients" Section**:
    - Key ingredients with descriptions
    - "All Ingredients" expandable full INCI list
19. **"FAQs" Section** — Accordion-style:
    - Product specifications (type, net quantity, shelf life, dimensions, country of origin, SKU, manufacturer info, consumer care)
    - Usage-related FAQs
20. **Footer** — Same as homepage

**Confirmed:** Kit products (e.g., Anti-Acne Kit) use the **exact same PDP layout** with the following minor differences:
- "How to Use" has multi-step instructions for each product in the kit
- "All Ingredients" lists ingredients for each product in the kit separately
- Product images show the kit bundle

**Pediatrics (Baby) products** use the same PDP layout with these additions:
- "Minimalist Pediatrics" sub-brand label above the product title
- Extra badges: Sulfates Free, Dye Free, Parabens Free, Phthalates Free (in addition to Fragrance Free, Essential Oil Free)
- "What Makes It Special?" instead of "What Makes It Potent?" (same section structure)
- **"Tests & Certifications" Section** (unique to Pediatrics) — Carousel of certification cards:
  - National Eczema Association (NEA) Seal of Acceptance™
  - Kind to Biome certified
  - Non-Comedogenic (Princeton Consumer Research, UK)
  - Pediatrician Approved
  - Suitable for Eczema Prone Skin
  - Each card includes Study Number references

**Products with customer testimonials** (e.g., SPF 50) include an inline quote with customer name between description and badges.

**Cross-sell section naming varies:**
- "Goes Well With" (Hyaluronic Acid serum)
- "You might also like" (Retinol serum)
- Same component, different heading text per product

**Some products lack optional sections:**
- Retinol 0.3%: No "Clinical Results" or "Consumer Studies" sections, no "Ideal For: Pregnancy" field
- SPF 50: Has "Clinical Results" with in-vivo SPF testing data but no "Consumer Studies"

---

### 2.3 Collection/Category Page — `/collections/{slug}`

> **All collection pages share the SAME layout template.** Product-type, concern-based, skin-type, and ingredient collections all use identical structure.

**Layout Sections (top to bottom):**
1. **Announcement Bar** — Same
2. **Navigation Header** — Same
3. **Sub-Category Tabs** — Horizontal navigation (e.g., Cleanse, Tone, Treat, Moisturize, SPF, Under Eye) — **only appears on product-type collections** (face-serum, face-cleanser, etc.), NOT on concern-based or skin-type collections
4. **Collection Title** — H1 (e.g., "Face Serum") + optional subtitle (e.g., "Top Selling products on Minimalist" on best-sellers)
5. **Sort Dropdown** — Options: Featured, Best selling, Alphabetical (A-Z, Z-A), Price (low-high, high-low), Date (old-new, new-old)
6. **Filter Sidebar (left):**
   - Category (e.g., Skin, Eye — with product counts)
   - Step (e.g., Cleanse, Tone, Treat, Moisturize, SPF — with counts)
   - Type of Product (e.g., Cleanser, Toner, Moisturizer, SPF, Serum, Combo Kit, Eye Cream — with counts)
   - Concern (e.g., Acne, Hyperpigmentation/Dark Spots, Dull Skin, Dehydrated Skin, Enlarged Pores, Oil Control, Sun Protection, Damaged Barrier, Dark Circle — with counts)
   - Price range (From/To input fields)
   - Ingredient (e.g., Vitamin C, Alpha Arbutin, BHA/Salicylic Acid, PHA, Niacinamide, Tranexamic Acid, Ceramide, UV Filters, Hydrating, Vitamin K — with counts)
   - Availability (In stock / Out of stock — with counts)
   - Each filter group has "Show more" expandable
7. **Product count** — "Showing X products"
8. **Product Grid** — Product cards with:
   - Product image (multiple images with hover/slider)
   - Product name
   - Concern tagline
   - Yotpo star ratings
   - Sale price / MRP with strikethrough
   - Size/variant selector dropdown
   - "Add to cart" button (or "Sold out" when unavailable)
   - Some products have promotional banner images between cards (e.g., "CleanserTestimonial", "SunscreenTestimonial", "SummerEssentials")
9. **Footer** — Same

**Verified consistent across:** `/collections/face-serum`, `/collections/best-sellers`, `/collections/oily-skin` (concern-based) — all use identical template with dynamically populated filters

---

### 2.4 Static/Info Pages — `/pages/{slug}`

These pages vary by purpose but share a **common outer shell**. Categorized below:

#### 2.4.1 Policy Pages
**Pages:** privacy-policy, terms, return-refund-policy, shipping-policy, payment-policy, disclaimer, data-deletion-instructions, grievances

**Layout:**
1. Announcement Bar
2. Navigation Header
3. H1 Title
4. **Long-form text content** — Paragraphs, bullet lists, legal definitions, headings
5. Footer

**Pattern:** Simple, text-heavy, single-column layout. No product elements.

---

#### 2.4.2 About / Values / Corporate Pages
**Pages:** about, our-values, about-2, corporate-information, media, distribution

**Layout (About page — richest version):**
1. Announcement Bar
2. Navigation Header
3. H2 "About Us" + brand description paragraphs
4. **Stats/Trust Badges** — "Clinically Proven", "Recommended by Dermatologist"
5. **Global Expansion Section** — "300 million+ customers across 5 continents and 17 countries"
6. **"Our Aspiration" Section**
7. **"Our Values" Section** — Cards: High-Performance, Transparency
8. **"Beyond Work" Section** — Employee benefits (Health, Celebrations, Work-Life)
9. **"Culture at Minimalist" Section**
10. **Social Media Links** carousel
11. **"Careers" Section** — CTA to reach out
12. **"Employee Testimonials" Carousel** — Name, designation, testimonial text (VP R&D, VP Finance, Director HR, Growth Managers, Product Manager, Brand Manager, Team Lead)
13. Footer

**"Our Values" page** — Simpler version: H1 + paragraphs only (founder story, transparency mission)

**"Corporate Information" page** — Minimal: H1 + CSR policy link + company legal address (Uprising Science Pvt Ltd, Jaipur) + contact email

---

#### 2.4.3 Routine Recommendation Pages
**Pages:** routine-for-acne-oil-control, routine-for-glowing-skin, routine-for-pigmentation-and-dark-spots, routine-for-anti-ageing, routine-for-open-pores-and-blackheads, routine-for-wintercare, anti-acne-regimen

**Layout:**
1. Announcement Bar
2. Navigation Header
3. **Product Routine Cards (vertical stack)** — Each card has:
   - Product name (H3)
   - Price + variant options (size/price pairs)
   - "When to use" (AM/PM)
   - "Frequency" (Everyday / Alternate days)
   - "Add to Cart" CTA
   - "View Details" link
4. Footer

**Pattern:** No descriptive content — purely product-focused routine builder. Likely uses a Page Builder (Pagefly/Shogun) section: `pf-*` IDs observed.

---

#### 2.4.4 Contact / FAQ Pages
**Pages:** get-in-touch, faqs

**Get in Touch Layout:**
1. H1 "Get in touch"
2. H2 "Drop us a line"
3. Contact form (Submit button)
4. Footer

**FAQs Layout:**
1. H1 "FAQs"
2. **Category-grouped accordion sections:**
   - Brand
   - Shipping details
   - Delivery details
   - Returns details
3. Footer

---

#### 2.4.5 Offer / Landing Pages
**Pages:** minimalist-b2g1-offer, minimalist-phonepe-offer-landing-page, minimalist-paytm-offer-landing-page, minimalist-razorpay-offer, minimalist-flash-co-offer, minimalist-gpay-offer-travel-pouch, minimalist-zepto-offer-travel-pouch, minimalist-zomato-offer-travel-pouch, minimalist-swiggy-offer-travel-pouch, minimalist-travel-pouch-offer, minimalist-skin-repair-kit-offer, kits-offer, minimalist-google-pay-rx

**Verified Layout (B2G1 offer page):** These are **mini-homepages** replicating the homepage structure:
1. Announcement Bar
2. Navigation Header
3. "Shop by Category" thumbnail carousel (Skin, Hair, Bath & Body, Lip, Eye)
4. "Our Best Sellers" product carousel
5. "Shop by Category" (concern-based: Uneven Tone, Acne, Oiliness, etc.)
6. "New Launches" product carousel
7. "The Future of Personal Care" brand values section
8. "Try Our Skin Analyzer" CTA
9. "Download Our App" CTA
10. Footer

**Pattern:** These are effectively **clones of the homepage layout** with minor variations (e.g., different hero banner). Not fully custom — they reuse the same Shopify sections as the homepage.

---

#### 2.4.6 Utility / Tool Pages
**Pages:** search-results-page, rapid-search-results, searchtap-search, search, build-your-routine-options, minimalist-routine-recommender-page, skin-insights, minimalist-ai-assistant, download-app-page, download-app-ios-android, reviews-1, rewards-1, trustcircle, qrc-page, find-the-perfect-cleanser-for-your-skin, minimalist-minis-travel-sized-skincare-essentials, minimalist-travel-kit

**Verified sub-layouts:**

**Skin Insights (AI Skin Analyzer):**
1. H2 "Understand your skin better with AI" + "Start Now" CTA + privacy consent
2. "How AI works" — 9 skin concern categories (Hydration, Lines, Skin Tone, Redness, Dark Circles, Pores, Uniformness, Pigmentation, Acne)
3. Before/After comparison images grid
4. "Advanced & Accurate Skin Analysis" — 3-step process (Assessment → Selfie → Routine)
5. "AI Powered Skin Analysis" — Stats section (10,000 graded pictures, 95% dermatologist match, 15 years research)
6. "How to take your picture" — Instructions with icons
7. FAQ accordion section
8. Footer

**Build Your Routine Options:**
1. Two CTA cards side-by-side:
   - "Skin Insights" — AI-Based Skin Analyzer → "Try Now"
   - "Skin Solutions" — Questionnaire Based Skin Analyzer → "Try Now"
2. Footer

**Pattern:** Each utility page has a unique layout. Most are custom-built with Shopify sections or embedded third-party tools.

---

#### 2.4.7 Expert Advice Pages
**Pages:** expert-skincare-advice-page, expert-skincare-advice-mahagun, expert-skincare-advice-celeste

**Pattern:** Location-specific skincare consultation pages. Likely contain CTA for booking expert advice at physical retail locations.

---

#### 2.4.8 Misc / Duplicate Pages
**Pages:** return-refund-policy-1, privacy-policy-1, terms-and-conditions, our-values-1

**Pattern:** Duplicate/alternate versions of existing policy and values pages. Possibly used for A/B testing or different contexts (e.g., in-app vs. website).

---

### 2.5 Blog Pages — `/blogs/{blog_handle}/{article_slug}`

**4 Blog Categories (from sitemap):**
- `/blogs/news` — Company news
- `/blogs/guide` — "No BS" ingredient guides (Hyaluronic Acid, Vitamin C, Retinol, Niacinamide, Benzoyl Peroxide, Salicylic Acid, Azelaic Acid, Squalane, Peptides, Colloidal Oatmeal)
- `/blogs/skin-care` — Skincare advice articles (~120+ articles)
- `/blogs/hair-care` — Hair care articles

**Blog Index Layout (`/pages/blogs`):**
1. Announcement Bar
2. Navigation Header
3. **"Knowledge Lab" Section Title**
4. **"Guides - Ingredients you should know" Section** — Blog card grid:
   - Thumbnail image
   - H3 Article title
   - "Read more" link
   - "View more" button
5. **"Skincare - Words of wisdom" Section** — Same card format
6. Footer

**Individual Blog Article Layout (verified on `/blogs/guide/vitamin-c`):**
1. Announcement Bar
2. Navigation Header
3. **Author/Review Line** — "Medically reviewed by Minimalist Health Specialist - Written by {Author Name} ({Role}) on {Date}"
4. **H1 Article Title** (e.g., "No BS Guide to Vitamin C Serum")
5. **Long-form article body** — Structured with:
   - H2 section headings
   - Paragraphs of educational content
   - Bullet-point lists (benefits, tips, etc.)
   - Product mentions/recommendations woven into content
   - Ingredient comparison sections
   - "Expert's Advice" callouts
   - "Track Order" inline CTA (appears embedded in content)
6. Footer

**Pattern:** Blog articles are long-form educational content (1000-3000+ words), organized by category. Includes medical review attribution. No sidebar, no related posts section visible. Content is SEO-focused with ingredient-specific guides and concern-based advice.

---

## 3. Shared Layout Components (Global)

These components appear on **every page**:

### Header
- **Announcement Bar** — 2-3 rotating promotional messages
- **Top Nav** — Search icon, Account icon, Cart (with count), Hamburger menu
- **Mobile Sidebar Menu** — Full navigation + social links (Email, Facebook, Instagram, YouTube)

### Footer
- **Company Overview** section (expandable)
- **Quick Links** section (expandable)
- **Contact Us** — Form link + email + gifting email
- **Social Icons** — Email, Facebook, Instagram, YouTube
- **Copyright** — "Copyright © 2026 Minimalist. Powered by Shopify"

### Product Card Component (reused across Homepage, Collections, Routines, Cross-sells)
- Product image (multi-image hover)
- Product name
- Concern/benefit subtitle
- Yotpo star ratings (when available)
- Price (sale + MRP strikethrough)
- Size/variant selector
- "Add to cart" / "Choose a variant first"

---

## 4. Product Catalog Summary

### 4.1 Individual Products (~65)

**Face Serums:** Hyaluronic + PGA 2%, Salicylic Acid 2%, Niacinamide 5%, Niacinamide 10%, Alpha Arbutin 2%, Vitamin C 10%, Vitamin C+E+Ferulic 16%, Multi-Peptides 10%, Tranexamic 3%, Retinol 0.3%, Retinol 0.6%, Retinal 0.1%, Retinal 0.2% Liposomal Cream, Multi Repair Actives 15%, Copper Peptide + PDRN 1.25%, Niacinamide 5% (10ml mini)

**Face Cleansers:** Salicylic+LHA 2% Cleanser, Oat Extract 6% Cleanser, Aquaporin Booster 5% Cleanser, Alpha Lipoic+Glycolic 7% Cleanser (+ 50ml mini), Marula Oil 05% Cleansing Oil

**Moisturizers:** Sepicalm 3%, Ceramides 0.3%+Madecassoside, Marula Oil 5%, Vitamin B5 10% (+ 30g mini), B12+Repair Complex 5.5%

**Toners:** PHA 3% Biotic Toner, Glycolic Acid 8% Exfoliating Liquid, Vitamin B12+NMF 03% Toner

**Face Peels/Exfoliators:** AHA BHA 10%, AHA PHA BHA 32%

**Sunscreens:** SPF 50, SPF 60, Invisible SPF 40, Light Fluid SPF 50, SPF 50+ Stick

**Eye Care:** Vitamin K+Retinal 1% Eye Cream

**Lip Care:** Lip Balm SPF 30, L-Ascorbic Acid 8% Lip Treatment Balm

**Hair Care:** Hair Growth Actives 18%, Maleic Bond Repair 5% Serum, Maleic Bond Repair 3.5% Shampoo (+ 100ml), Maleic Bond Repair 5% Mask, Frizz Control SPF 30, Vitamin B6+Carnitine 3% Scalp Serum, CPH Complex Anti-Dandruff Serum, Anti Dandruff Shampoo 3.5%

**Body Care:** SPF 30 Body Lotion, Niacinamide 5% Body Lotion, Glycolic+Tranexamic 11% Body Exfoliator, Salicylic+LHA 2% Body Wash, Nonapeptide+AHA 6% Underarm Roll-On, HOCL Skin Relief Spray

**Baby/Pediatrics:** Ceramide+Squalane Lotion, Ceramide+Vitamin B5 Cleanser, Provitamin D3 Massage Oil, Zinc Oxide+B5 Healing Ointment

**Accessories:** Travel Pouch, Tote Bag

### 4.2 Kits & Bundles (~15)
Oily Skincare Kit, Anti-Acne Kit, Dry Skincare Kit, Anti-Pigmentation Kit, Anti-Aging Kit, Body Care Kit, Sun Protection Kit, Glow & Protect Gift Set, Hydrating & Repairing Gift Set, Brightening & SPF Gift Set, Maleic Bond Repair Gift Set, Shampoo+Mask Duo, Serum+Shampoo Duo, Maleic Trio, Hair Repair Ritual Kit, Daily Radiance Ritual 3x Kit, Barrier Repair Kit

---

## 5. Collections Taxonomy

### By Body Area
- Skin, Hair, Bath & Body, Lip, Eye

### By Product Type
- **Face:** Cleanser, Serum, Moisturizer, Toner, Peel, SPF
- **Hair:** Serum, Shampoo, Mask, Toner
- **Body:** Wash, Exfoliator, Toner, SPF, Lotion, Serum
- **Lip:** Balm, SPF
- **Eye:** Cream

### By Skin Concern (Face)
Acne, Acne Marks, Pigmentation, Dark Spots, Dull Skin, Fine Lines/Wrinkles, Dryness, Oiliness, Uneven Tone, Uneven Texture, Damaged Barrier, Tanning, Blackheads, Skin Irritation, UV Damage, Enlarged Pores, Flakiness

### By Skin Concern (Body)
Dryness, Flakiness, Damaged Barrier, Uneven Tone, Uneven Texture, Tanning, Odour, Underarm Darkness, Rough Skin, Acne, Excess Sebum, SPF

### By Skin Concern (Lip)
Chapped Lips, Pigmentation, Dehydrated Lips

### By Skin Concern (Hair)
Hair Fall, Thinning, Damage, Oily Scalp, Scalp Irritation, Dandruff, Dull Hair, Frizzy Hair

### By Skin Concern (Eye)
Dark Circles, Puffiness, Fine Lines

### By Skin Type
Oily, Dry, Sensitive, Pregnancy/Lactation Safe

### By Active Ingredient
Niacinamide, Hyaluronic Acid, Ceramide, Vitamin C, Retinol, AHA, BHA/Salicylic Acid, Peptide, PHA, Tranexamic, Squalane, Alpha Arbutin, ALA, Vitamin K, Nonapeptide, Glycolic Acid

### By Marketing/Seasonal
Best Sellers, New Launches, All Products, Winter Essentials, Holi Essentials, Match Day Essentials, Summer Collection, Minis, Bigger Combo Packs, Standard Products, Treatments, UV Filters, Ritual Kits

---

## 6. Key Observations

1. **Product pages have a CONSISTENT layout** — Every PDP (individual product or kit) uses the same Shopify template. Optional sections (Clinical Results, Consumer Studies, Tests & Certifications) appear conditionally based on product data. Cross-sell section heading varies ("Goes Well With" vs "You might also like").

2. **Collection pages have a CONSISTENT layout** — All collections (product-type, concern-based, skin-type, ingredient-based, marketing) use the same filterable grid template. Sub-category tabs only appear on product-type collections. Promotional banner images appear between product cards on some collections.

3. **Static pages fall into 8 distinct sub-layouts** — Policy (text-heavy), About/Corporate (rich multi-section), Routine Recommendations (product cards with usage schedules), Contact/FAQ (form/accordion), Offer Landing (homepage clones), Utility/Tool (AI skin analyzer, routine builder), Expert Advice (location-specific), and Duplicate versions.

4. **Offer/landing pages are homepage clones** — Verified: B2G1 offer page replicates the homepage structure (best sellers, shop by category, new launches, brand values) rather than being custom-built.

5. **Blog is substantial** — 130+ articles across 4 categories (news, guide, skin-care, hair-care). Articles include medical review attribution. "No BS Guide" series is the signature content format for ingredient education.

6. **Baby care is a distinct sub-brand** — "Minimalist Pediatrics" has unique PDP additions (extra safety badges, Tests & Certifications section with UK-based clinical study references, NEA Seal of Acceptance™, Kind to Biome certification).

7. **Multi-country support** — Country/language selector offers 7 countries (India, US, UK, UAE, Malaysia, Canada, Australia) with separate global site (global.beminimalist.co).

8. **Shopping cart sidebar** — Sliding cart drawer with MCash loyalty points display, "BUY 2 PRODUCTS AND GET A FREE MOISTURIZER" banner, and real-time MCash earnings preview.

9. **Duplicate pages exist** — Some policies have `-1` suffix versions (return-refund-policy-1, privacy-policy-1, our-values-1) — likely for in-app vs. website contexts.

10. **The site is Shopify-powered** — Uses Shopify's native sitemap generation, Yotpo for reviews, SpeedSize CDN for image optimization, and PageFly (`pf-*` IDs) for some custom page sections.

---

## 7. Layout Summary Matrix

| Page Type | Count | Template Consistency | Key Differentiator |
|---|---|---|---|
| Product Detail (PDP) | ~82 | IDENTICAL template | Optional sections vary by product |
| Collection | ~115 | IDENTICAL template | Filters/products change dynamically |
| Blog Article | ~130+ | IDENTICAL template | Content varies, medical review line |
| Blog Index | 4 | Same card-grid format | Category grouping |
| Policy/Legal | ~10 | IDENTICAL (text-only) | Content varies |
| About/Corporate | ~6 | VARIES (custom sections) | Each page is unique |
| Routine Pages | ~7 | IDENTICAL (Pagefly) | Products change per concern |
| Offer Landing | ~13 | Homepage clone | Hero banner varies |
| Utility/Tool | ~10+ | VARIES (custom) | Each tool is unique |
| Contact/FAQ | 2 | Simple form/accordion | - |
| Homepage | 1 | Unique | - |
