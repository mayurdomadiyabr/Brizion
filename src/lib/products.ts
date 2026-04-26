export type Product = {
  id: string;
  slug: string;
  kind: string;
  name: string;
  sub: string;
  /** Base price in USD; localized at render time */
  priceUsd: number;
  rating: number;
  reviews: number;
  tag?: string;
  img: string;
  bg: string;
};

export const PRODUCTS: Product[] = [
  {
    id: '01',
    slug: 'firm-and-lift-serum',
    kind: 'Serum · 01',
    name: 'Firm & Lift Serum',
    sub: 'Visibly firms the look of skin in 8 weeks.',
    priceUsd: 39.99,
    rating: 5,
    reviews: 1240,
    tag: 'Best Seller',
    img: '/assets/product-1-lilac-serum.png',
    bg: '#F2F2F2',
  },
  {
    id: '02',
    slug: 'overnight-renewal-cream',
    kind: 'Cream · 02',
    name: 'Overnight Renewal Cream',
    sub: 'Plumps & hydrates while you sleep.',
    priceUsd: 44.99,
    rating: 5,
    reviews: 890,
    tag: 'Award',
    img: '/assets/product-2-blush-jar.png',
    bg: '#FAFAFA',
  },
  {
    id: '03',
    slug: 'illuminating-vitamin-c',
    kind: 'Serum · 03',
    name: 'Illuminating Vitamin C',
    sub: 'Brightens the look of dull skin.',
    priceUsd: 36.0,
    rating: 5,
    reviews: 612,
    tag: 'New',
    img: '/assets/product-3-sand-bottle.png',
    bg: '#F2F2F2',
  },
  {
    id: '04',
    slug: 'gentle-renew-cleanser',
    kind: 'Cleanser · 04',
    name: 'Gentle Renew Cleanser',
    sub: 'Refines without stripping.',
    priceUsd: 24.0,
    rating: 5,
    reviews: 432,
    img: '/assets/product-8-cleanser.png',
    bg: '#FAFAFA',
  },
  {
    id: '05',
    slug: 'advanced-repair-eye-cream',
    kind: 'Eye cream · 05',
    name: 'Advanced Repair Eye Cream',
    sub: 'Smooths the look of fine lines.',
    priceUsd: 42.0,
    rating: 5,
    reviews: 980,
    img: '/assets/product-5-lilac-jar.png',
    bg: '#F2F2F2',
  },
  {
    id: '06',
    slug: 'dewy-glow-mist',
    kind: 'Mist · 06',
    name: 'Dewy Glow Mist',
    sub: 'A fine veil of hydration.',
    priceUsd: 28.0,
    rating: 5,
    reviews: 320,
    img: '/assets/product-4-sage-bottle.png',
    bg: '#FAFAFA',
  },
  {
    id: '07',
    slug: 'restorative-neck-cream',
    kind: 'Cream · 07',
    name: 'Restorative Neck Cream',
    sub: 'Firms the look of neck & décolleté.',
    priceUsd: 48.0,
    rating: 5,
    reviews: 220,
    img: '/assets/product-7-neck-cream.png',
    bg: '#F2F2F2',
  },
  {
    id: '08',
    slug: 'hydra-boost-essence',
    kind: 'Essence · 08',
    name: 'Hydra Boost Essence',
    sub: 'Drenches skin in moisture.',
    priceUsd: 32.0,
    rating: 5,
    reviews: 180,
    img: '/assets/product-6-blush-small.png',
    bg: '#FAFAFA',
  },
];

export function getProduct(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}
