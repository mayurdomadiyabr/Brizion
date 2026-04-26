export type Article = {
  slug: string;
  title: string;
  emTitle?: string;
  category: 'Ingredients' | 'Rituals' | 'Science' | 'Edits' | 'Interviews';
  readMin: number;
  author: string;
  date: string;
  dek: string;
  body: string;
};

export const ARTICLES: Article[] = [
  {
    slug: 'the-case-for-retinal',
    title: 'The case for ',
    emTitle: 'retinal',
    category: 'Ingredients',
    readMin: 12,
    author: 'Dr. Mira Chen',
    date: '2026-03-14',
    dek: 'A plain-language breakdown of why we picked the less-famous retinoid, how it converts in skin, and what 8 weeks of daily use actually did in our lab.',
    body: 'Retinal (also called retinaldehyde) is one chemical step away from retinoic acid — the form your skin actually uses. Retinol, by contrast, is two steps away. That single conversion difference matters: retinal is roughly 11× more potent than retinol on a like-for-like basis, with comparable tolerability when paired with a soothing peptide complex.',
  },
  {
    slug: 'concentrations-on-a-label',
    title: "Why concentrations on a label don't tell the ",
    emTitle: 'whole truth',
    category: 'Science',
    readMin: 8,
    author: 'Dr. Sam Okafor',
    date: '2026-02-28',
    dek: 'A 10% Vitamin C is not always more effective than a 5% one. Here is why.',
    body: 'Stability, pH, vehicle, and packaging matter as much as the headline percentage. A poorly stabilised 20% Vitamin C oxidises in weeks; a well-formulated 10% remains active for months.',
  },
  {
    slug: 'minimalist-evening-routine',
    title: "A minimalist's guide to a three-step evening.",
    category: 'Rituals',
    readMin: 5,
    author: 'Julien Marché',
    date: '2026-02-12',
    dek: 'Cleanse, treat, occlude. Done well, three products beat seven.',
    body: 'A gentle cleanser, one targeted treatment, and a moisturiser that seals it all in. That is the entire routine.',
  },
  {
    slug: 'peptides-in-order-of-usefulness',
    title: 'Peptides, in ',
    emTitle: 'order of usefulness',
    category: 'Ingredients',
    readMin: 6,
    author: 'Dr. Mira Chen',
    date: '2026-01-30',
    dek: 'Not all peptides are useful. Here is the short list, ranked by clinical evidence.',
    body: 'Signal peptides, carrier peptides, neurotransmitter-inhibiting peptides, enzyme-inhibiting peptides — each does something different.',
  },
  {
    slug: 'travel-edit-five-products',
    title: "The five products we'd bring to a one-week trip.",
    category: 'Edits',
    readMin: 4,
    author: 'The Editors',
    date: '2026-01-18',
    dek: 'Compact, multi-use, no compromises.',
    body: 'A balm cleanser, a peptide serum, a 30 SPF, a lip treatment, and a single sheet mask for the flight home.',
  },
  {
    slug: 'okafor-on-sensitive-skin',
    title: 'A conversation with ',
    emTitle: 'Dr. Okafor',
    category: 'Interviews',
    readMin: 9,
    author: 'The Editors',
    date: '2026-01-04',
    dek: 'On reactive skin, the role of the barrier, and the products you can trust.',
    body: 'Sensitive skin is rarely a permanent state. It is usually a barrier in distress, asking for fewer products and more time.',
  },
];

export const getArticle = (slug: string) => ARTICLES.find((a) => a.slug === slug);
