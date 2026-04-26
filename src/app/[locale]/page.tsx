import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { isLocale, type Locale, getCountry } from '@/lib/locales';
import { buildMetadata, SITE } from '@/lib/seo';
import { JsonLd, breadcrumbsLd, faqLd } from '@/lib/jsonld';
import { PRODUCTS } from '@/lib/products';
import { ProductCard } from '@/components/ProductCard';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const c = getCountry(locale);
  return buildMetadata({
    locale,
    title: `${SITE.name} — Skincare that meets you where you are`,
    description: `Dermatologist-grade skincare with clinically-tested peptides. Visible results in 8 weeks. Shipping to ${c.countryName} in ${c.shipping.standard}.`,
  });
}

const FAQ = [
  {
    question: 'What is Brizion?',
    answer:
      'Brizion is a dermatologist-grade cosmetic skincare brand that formulates clinically-tested serums, creams and cleansers. Every formula is tested by a third-party lab and dermatologist-reviewed, with visible results in eight weeks of daily use.',
  },
  {
    question: 'Where does Brizion ship?',
    answer:
      'Brizion ships to the United States, Canada and India. Pricing, taxes and shipping windows are localized for each region — see the country selector in the navigation bar.',
  },
  {
    question: 'Are Brizion products clean and cruelty-free?',
    answer:
      'Yes. Brizion is fragrance-free, paraben-free, vegan and never tested on animals. Every product is dermatologist-tested and safe for sensitive skin.',
  },
  {
    question: 'What is the Brizion return policy?',
    answer:
      'In the US and Canada, every order ships with a 60-day money-back guarantee. In India, orders are covered by a 30-day return policy.',
  },
];

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();
  const locale = rawLocale as Locale;
  const country = getCountry(locale);
  const bestSellers = PRODUCTS.slice(0, 4);

  return (
    <>
      <JsonLd
        data={breadcrumbsLd(locale, [{ name: 'Home', path: '' }])}
      />
      <JsonLd data={faqLd(FAQ)} />

      {/* Hero */}
      <section style={{ padding: '96px 0 120px', borderBottom: '1px solid var(--brz-border-hair)' }}>
        <div
          className="brz-wrap"
          style={{
            display: 'grid',
            gridTemplateColumns: '1.1fr 1fr',
            gap: 80,
            alignItems: 'center',
          }}
        >
          <div>
            <div
              style={{
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: '0.28em',
                textTransform: 'uppercase',
                color: 'var(--brz-fg-2)',
              }}
            >
              The new firming serum
            </div>
            <h1
              style={{
                fontFamily: 'var(--brz-font-display)',
                fontWeight: 600,
                fontSize: 'clamp(56px, 7vw, 96px)',
                lineHeight: 1.02,
                letterSpacing: '-0.02em',
                margin: '22px 0 28px',
                textWrap: 'balance',
              }}
            >
              Skincare that meets you{' '}
              <em
                style={{
                  fontFamily: 'var(--brz-font-serif)',
                  fontStyle: 'italic',
                  fontWeight: 500,
                }}
              >
                where you are.
              </em>
            </h1>
            <p
              style={{
                fontSize: 17,
                lineHeight: 1.55,
                color: 'var(--brz-fg-2)',
                maxWidth: 500,
                marginBottom: 36,
              }}
            >
              Dermatologist-grade formulas. Clinically-tested peptides. Real, visible results in 8
              weeks — without the fuss. Shipping to {country.countryName} in {country.shipping.standard}.
            </p>
            <div style={{ display: 'flex', gap: 16 }}>
              <a
                href={`/${locale}/shop`}
                style={{
                  background: 'var(--brz-ink)',
                  color: '#fff',
                  padding: '16px 32px',
                  fontSize: 12,
                  fontWeight: 700,
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  textDecoration: 'none',
                }}
              >
                Shop Firm &amp; Lift
              </a>
              <a
                href={`/${locale}/science`}
                style={{
                  border: '1px solid var(--brz-ink)',
                  color: 'var(--brz-ink)',
                  padding: '15px 28px',
                  fontSize: 12,
                  fontWeight: 700,
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  textDecoration: 'none',
                }}
              >
                The Science →
              </a>
            </div>
          </div>
          <div
            style={{
              aspectRatio: '1/1.05',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'var(--brz-n-100)',
              padding: 48,
            }}
          >
            <Image
              src="/assets/product-1-lilac-serum.png"
              alt="Brizion Firm & Lift Serum — clinically-tested peptide blend"
              width={520}
              height={680}
              priority
              style={{ width: 'auto', maxHeight: '100%', objectFit: 'contain' }}
            />
          </div>
        </div>
      </section>

      {/* Best Sellers */}
      <section style={{ padding: '120px 0', background: 'var(--brz-n-50)' }}>
        <div className="brz-wrap">
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
              marginBottom: 56,
            }}
          >
            <div>
              <div
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: '0.28em',
                  textTransform: 'uppercase',
                  color: 'var(--brz-fg-2)',
                }}
              >
                Best sellers
              </div>
              <h2
                style={{
                  fontFamily: 'var(--brz-font-display)',
                  fontWeight: 600,
                  fontSize: 'clamp(36px, 4.2vw, 56px)',
                  lineHeight: 1.05,
                  letterSpacing: '-0.02em',
                  margin: '12px 0 0',
                  maxWidth: 720,
                }}
              >
                Proven favorites. Formulated{' '}
                <em
                  style={{
                    fontFamily: 'var(--brz-font-serif)',
                    fontStyle: 'italic',
                    fontWeight: 500,
                  }}
                >
                  for every stage.
                </em>
              </h2>
            </div>
            <a
              href={`/${locale}/shop`}
              style={{
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                borderBottom: '1px solid var(--brz-ink)',
                paddingBottom: 3,
                textDecoration: 'none',
                color: 'var(--brz-ink)',
              }}
            >
              Shop all →
            </a>
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
              gap: 24,
            }}
          >
            {bestSellers.map((p) => (
              <ProductCard key={p.id} product={p} locale={locale} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ — written in plain Q&A for AEO/GEO answer extraction */}
      <section style={{ padding: '120px 0' }}>
        <div className="brz-wrap" style={{ maxWidth: 880 }}>
          <div
            style={{
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: '0.28em',
              textTransform: 'uppercase',
              color: 'var(--brz-fg-2)',
              marginBottom: 12,
            }}
          >
            Frequently asked
          </div>
          <h2
            style={{
              fontFamily: 'var(--brz-font-display)',
              fontWeight: 600,
              fontSize: 'clamp(32px, 3.8vw, 48px)',
              lineHeight: 1.08,
              letterSpacing: '-0.02em',
              marginBottom: 48,
            }}
          >
            Answers, in plain English.
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
            {FAQ.map((q) => (
              <div key={q.question}>
                <h3
                  style={{
                    fontFamily: 'var(--brz-font-sans)',
                    fontSize: 18,
                    fontWeight: 700,
                    margin: '0 0 8px',
                  }}
                >
                  {q.question}
                </h3>
                <p style={{ margin: 0, color: 'var(--brz-fg-2)', lineHeight: 1.6 }}>
                  {q.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
