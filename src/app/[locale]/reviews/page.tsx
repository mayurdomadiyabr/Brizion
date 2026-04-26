import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { isLocale, type Locale } from '@/lib/locales';
import { buildMetadata } from '@/lib/seo';
import { JsonLd, breadcrumbsLd } from '@/lib/jsonld';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return buildMetadata({
    locale,
    path: '/reviews',
    title: 'Customer Reviews',
    description:
      'Every review on this page is verified. We don\u2019t filter negatives. We respond to every one.',
  });
}

const BARS = [
  ['5★', 82],
  ['4★', 12],
  ['3★', 4],
  ['2★', 1],
  ['1★', 1],
] as const;

const REVIEWS = [
  {
    initials: 'SC',
    name: 'Samira C.',
    meta: 'Verified · Sensitive, Age 42',
    stars: '★★★★★',
    title: <>The only retinoid I&apos;ve been able to <em>actually stick with</em>.</>,
    body: 'I\u2019ve tried three prescription retinoids and always gave up in the irritation phase. This is the first one I\u2019ve made it to week 8 on, and the fine lines around my eyes look genuinely softer. No flaking, no redness. My derm approved.',
    tags: ['Firming', 'Fine Lines', 'Sensitive OK'],
    product: 'Firm & Lift Serum · 30ml',
  },
  {
    initials: 'JM',
    name: 'Jordan M.',
    meta: 'Verified · Combination, Age 31',
    stars: '★★★★★',
    title: <>Packaging is stunning, formula is <em>better</em>.</>,
    body: 'Bought it for the aesthetic, stayed for the results. Six weeks in and my skin genuinely looks more even. The dropper is weighted and doesn\u2019t drip. Small thing but it\u2019s the details.',
    tags: ['Glow', 'Tone', 'Texture'],
    product: 'Overnight Renewal Cream · 50ml',
  },
  {
    initials: 'RO',
    name: 'Rita O.',
    meta: 'Verified · Dry, Age 56',
    stars: '★★★★☆',
    title: <>Does what it says — <em>expensive</em> but worth it.</>,
    body: 'The 30ml lasts me about 6 weeks. That\u2019s pricey per month but compared to what I was spending at Sephora on things that didn\u2019t work, it\u2019s a wash. Not docking a star for price — docking for the bottle design being hard to see how much is left.',
    tags: ['Anti-aging', 'Hydration'],
    product: 'Firm & Lift Serum · 30ml',
  },
  {
    initials: 'TL',
    name: 'Theo L.',
    meta: 'Verified · Oily, Age 28',
    stars: '★★★★★',
    title: <>My derm recommended it. She was <em>right</em>.</>,
    body: 'First retinoid I\u2019ve tried as someone with acne-prone, oily skin. Two months in and my texture is the smoothest it\u2019s been since my twenties. I use it three nights a week and it plays well with my BHA on off nights.',
    tags: ['Texture', 'Acne-safe', 'Tolerance'],
    product: 'Firm & Lift Serum · 30ml',
  },
  {
    initials: 'AP',
    name: 'Ana P.',
    meta: 'Verified · Normal, Age 38',
    stars: '★★★★★',
    title: <>The <em>cleanser</em> is the sleeper hit.</>,
    body: 'I came for the serum, but the cleanser is what I\u2019ll repurchase forever. Doesn\u2019t strip, rinses clean, no tightness. My skin feels calm after, not squeaky. Rare in a gel cleanser at this price.',
    tags: ['Gentle', 'Non-stripping'],
    product: 'Daily Gentle Cleanser',
  },
  {
    initials: 'MC',
    name: 'Marcus C.',
    meta: 'Verified · Combination, Age 45',
    stars: '★★★☆☆',
    title: <>Works but I wish the <em>bottle lasted longer</em>.</>,
    body: 'Results are real — skin feels firmer and my morning face looks more rested. But at 30ml/$40 I\u2019m going through it faster than feels good. Brand, please make a larger value size. Otherwise solid formula.',
    tags: ['Value', 'Repurchase'],
    product: 'Firm & Lift Serum · 30ml',
  },
  {
    initials: 'HO',
    name: 'Hannah O.',
    meta: 'Verified · Sensitive, Age 34',
    stars: '★★★★★',
    title: <>My skin feels like it did <em>ten years ago</em>.</>,
    body: 'I\u2019m 34 but my skin got reactive after pregnancy and nothing worked. The overnight cream has genuinely rebuilt my barrier — no stinging, no redness, and my morning face is soft and hydrated in a way I\u2019d forgotten was possible.',
    tags: ['Barrier', 'Hydration', 'Post-natal'],
    product: 'Overnight Renewal Cream · 50ml',
  },
  {
    initials: 'DK',
    name: 'Dana K.',
    meta: 'Verified · Dry, Age 49',
    stars: '★★★★★',
    title: <>Worth every penny. Finally, <em>honest skincare</em>.</>,
    body: 'I love that the bottle tells me the concentration. I love that the studies are published on the site. I love that I don\u2019t have to smell like a perfume shop to take care of my skin. Everything about this brand is grown-up.',
    tags: ['Brand', 'Fragrance-free'],
    product: 'The Firming Ritual · Bundle',
  },
];

const FILTERS = ['All reviews', '5 stars', 'Firm & Lift Serum', 'Overnight Cream', 'Sensitive skin', 'Over 40'];

export default async function ReviewsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();
  const locale = rawLocale as Locale;

  return (
    <>
      <JsonLd
        data={breadcrumbsLd(locale, [
          { name: 'Home', path: '' },
          { name: 'Reviews', path: '/reviews' },
        ])}
      />

      {/* Hero with score */}
      <section style={{ padding: '90px 0 64px', borderBottom: '1px solid var(--brz-border-soft)' }}>
        <div className="wrap" style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: 72, alignItems: 'end' }}>
          <div>
            <div className="eyebrow">Customer Reviews</div>
            <h1 style={{ fontFamily: 'var(--brz-font-display)', fontWeight: 600, fontSize: 'clamp(56px, 7vw, 96px)', lineHeight: 1, letterSpacing: '-0.03em', margin: '18px 0 24px' }}>
              What 12,000 people are <em style={{ fontFamily: 'var(--brz-font-serif)', fontStyle: 'italic' }}>actually saying</em>.
            </h1>
            <p style={{ fontFamily: 'var(--brz-font-serif)', fontStyle: 'italic', fontSize: 19, color: 'var(--brz-n-600)', margin: 0, maxWidth: 500, lineHeight: 1.45 }}>
              Every review on this page is verified. We don&apos;t filter negatives. We respond to every one.
            </p>
          </div>
          <div style={{ border: '1px solid var(--brz-ink)', padding: 28, display: 'grid', gridTemplateColumns: 'auto 1fr', gap: 32, alignItems: 'center' }}>
            <div style={{ fontFamily: 'var(--brz-font-display)', fontSize: 84, fontWeight: 600, letterSpacing: '-0.03em', lineHeight: 0.9 }}>4.8</div>
            <div>
              <div style={{ fontSize: 18, letterSpacing: '0.1em', marginBottom: 10 }}>★★★★★</div>
              <div style={{ fontSize: 11, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--brz-fg-2)', fontWeight: 600, marginBottom: 14 }}>12,414 Reviews</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                {BARS.map(([star, pct]) => (
                  <div key={star} style={{ display: 'grid', gridTemplateColumns: '20px 1fr 30px', gap: 8, alignItems: 'center', fontSize: 10, color: 'var(--brz-fg-3)', fontFamily: 'ui-monospace, Menlo, monospace' }}>
                    <span>{star}</span>
                    <div style={{ height: 6, background: 'var(--brz-n-200)', position: 'relative' }}>
                      <span style={{ position: 'absolute', left: 0, top: 0, bottom: 0, background: 'var(--brz-ink)', width: `${pct}%` }} />
                    </div>
                    <span>{pct}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter pills */}
      <section style={{ padding: '28px 0', borderBottom: '1px solid var(--brz-border-soft)' }}>
        <div className="wrap" style={{ display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap' }}>
          {FILTERS.map((f, i) => (
            <span
              key={f}
              style={{
                padding: '10px 16px',
                border: '1px solid ' + (i === 0 ? 'var(--brz-ink)' : 'var(--brz-border-soft)'),
                fontSize: 12,
                letterSpacing: '0.04em',
                cursor: 'pointer',
                background: i === 0 ? 'var(--brz-ink)' : '#fff',
                color: i === 0 ? '#fff' : 'var(--brz-ink)',
              }}
            >
              {f}
            </span>
          ))}
          <span style={{ marginLeft: 'auto', fontSize: 11, color: 'var(--brz-fg-2)', letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 600 }}>
            12,414 total
          </span>
          <span style={{ fontSize: 12 }}>
            Sort · <b style={{ fontWeight: 700 }}>Most recent ▾</b>
          </span>
        </div>
      </section>

      {/* List */}
      <section style={{ padding: '56px 0 80px' }}>
        <div className="wrap" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0,1fr))', gap: 28 }}>
          {REVIEWS.map((r) => (
            <article key={r.name} style={{ border: '1px solid var(--brz-border-soft)', padding: 32, display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 14 }}>
                <div style={{ display: 'flex', gap: 14, alignItems: 'center' }}>
                  <div style={{ width: 44, height: 44, borderRadius: '50%', background: 'var(--brz-n-200)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--brz-font-display)', fontWeight: 600, fontSize: 15, color: 'var(--brz-n-600)' }}>
                    {r.initials}
                  </div>
                  <div>
                    <b style={{ display: 'block', fontSize: 14, marginBottom: 2 }}>{r.name}</b>
                    <span style={{ fontSize: 11, color: 'var(--brz-fg-3)', letterSpacing: '0.04em' }}>{r.meta}</span>
                  </div>
                </div>
                <div style={{ fontSize: 12, letterSpacing: '0.1em' }}>{r.stars}</div>
              </div>
              <h3 style={{ fontFamily: 'var(--brz-font-display)', fontWeight: 600, fontSize: 22, lineHeight: 1.2, letterSpacing: '-0.01em', margin: '16px 0 10px' }}>
                {r.title}
              </h3>
              <p style={{ fontFamily: 'var(--brz-font-serif)', fontSize: 16, lineHeight: 1.55, color: 'var(--brz-n-700)', margin: '0 0 22px' }}>
                {r.body}
              </p>
              <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', paddingTop: 18, borderTop: '1px solid var(--brz-n-100)', marginBottom: 14 }}>
                {r.tags.map((tag) => (
                  <span key={tag} style={{ fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--brz-fg-2)', fontWeight: 600, padding: '5px 10px', background: 'var(--brz-n-50)' }}>
                    {tag}
                  </span>
                ))}
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: 11, color: 'var(--brz-fg-3)', letterSpacing: '0.04em', marginTop: 'auto' }}>
                <span style={{ fontWeight: 600, color: 'var(--brz-ink)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>{r.product}</span>
                <span style={{ fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--brz-ink)', fontWeight: 600 }}>✓ Verified</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Write CTA */}
      <section style={{ padding: '80px 0', background: 'var(--brz-n-50)', borderTop: '1px solid var(--brz-border-soft)', borderBottom: '1px solid var(--brz-border-soft)' }}>
        <div className="wrap" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0,1fr))', gap: 48, alignItems: 'center' }}>
          <div>
            <div className="eyebrow">Used it? Say so.</div>
            <h2 style={{ fontFamily: 'var(--brz-font-display)', fontWeight: 600, fontSize: 44, letterSpacing: '-0.02em', margin: '12px 0 16px' }}>
              Write a <em style={{ fontFamily: 'var(--brz-font-serif)', fontStyle: 'italic' }}>review</em>.
            </h2>
            <p style={{ fontFamily: 'var(--brz-font-serif)', fontStyle: 'italic', color: 'var(--brz-n-600)', fontSize: 17, margin: '0 0 24px', maxWidth: 440 }}>
              We read every one, publish every one (even the unflattering ones), and respond within 48 hours.
            </p>
            <button className="btn-primary">Write a review</button>
          </div>
          <div style={{ fontFamily: 'var(--brz-font-serif)', fontStyle: 'italic', fontSize: 19, color: 'var(--brz-n-600)', lineHeight: 1.55, borderLeft: '2px solid var(--brz-ink)', paddingLeft: 24 }}>
            &ldquo;We don&apos;t hide the 1-star reviews. We respond to them. Sometimes we change the formula because of them.&rdquo;
            <div style={{ marginTop: 18, fontFamily: 'var(--brz-font-sans)', fontStyle: 'normal', fontSize: 11, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--brz-fg-2)', fontWeight: 600 }}>
              — The Brizion Team
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
