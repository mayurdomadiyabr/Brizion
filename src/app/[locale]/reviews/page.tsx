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
    title: 'Real reviews from real customers',
    description:
      'Independent customer reviews of Brizion serums, creams and cleansers. Verified purchases only.',
  });
}

const REVIEWS = [
  {
    name: 'Anna · 38',
    product: 'Firm & Lift Serum',
    quote:
      'I’ve tried a dozen serums in five years. Brizion is the first that gave me visible results in two months — and the only one that doesn’t smell like perfume.',
  },
  {
    name: 'Priya · 42',
    product: 'Overnight Renewal Cream',
    quote:
      'My skin feels plumper when I wake up. The packaging is beautiful but the formula is the real story.',
  },
  {
    name: 'Sara · 35',
    product: 'Illuminating Vitamin C',
    quote:
      'Brightens without irritating. I have sensitive skin and this is the only Vitamin C I can tolerate.',
  },
];

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
      <section
        style={{
          background: 'var(--brz-n-50)',
          padding: '96px 0',
          textAlign: 'center',
          borderBottom: '1px solid var(--brz-border-hair)',
        }}
      >
        <div className="brz-wrap" style={{ maxWidth: 880 }}>
          <div
            style={{
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: '0.28em',
              textTransform: 'uppercase',
              color: 'var(--brz-fg-2)',
            }}
          >
            Customer reviews
          </div>
          <h1
            style={{
              fontFamily: 'var(--brz-font-display)',
              fontWeight: 600,
              fontSize: 'clamp(44px, 5.4vw, 68px)',
              letterSpacing: '-0.02em',
              lineHeight: 1.05,
              margin: '20px 0 16px',
            }}
          >
            Real women.{' '}
            <em
              style={{
                fontFamily: 'var(--brz-font-serif)',
                fontStyle: 'italic',
                fontWeight: 500,
              }}
            >
              Real results.
            </em>
          </h1>
          <p
            style={{
              fontFamily: 'var(--brz-font-serif)',
              fontStyle: 'italic',
              fontSize: 19,
              color: 'var(--brz-fg-2)',
            }}
          >
            Verified purchases only. No paid reviews. Ever.
          </p>
        </div>
      </section>
      <section style={{ padding: '96px 0' }}>
        <div className="brz-wrap">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
              gap: 28,
            }}
          >
            {REVIEWS.map((r) => (
              <article
                key={r.name}
                style={{
                  border: '1px solid var(--brz-border-soft)',
                  padding: '36px 32px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 18,
                  minHeight: 260,
                }}
              >
                <div style={{ letterSpacing: '0.15em', fontSize: 13 }}>★★★★★</div>
                <p
                  style={{
                    fontFamily: 'var(--brz-font-serif)',
                    fontStyle: 'italic',
                    fontSize: 18,
                    lineHeight: 1.45,
                    margin: 0,
                    color: 'var(--brz-ink)',
                    flex: 1,
                  }}
                >
                  “{r.quote}”
                </p>
                <div
                  style={{
                    paddingTop: 18,
                    borderTop: '1px solid var(--brz-border-hair)',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'baseline',
                  }}
                >
                  <span
                    style={{
                      fontSize: 11,
                      fontWeight: 700,
                      letterSpacing: '0.22em',
                      textTransform: 'uppercase',
                    }}
                  >
                    {r.name}
                  </span>
                  <span style={{ fontSize: 10, color: 'var(--brz-fg-3)' }}>{r.product}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
