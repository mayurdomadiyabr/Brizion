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

      {/* Promise strip */}
      <section style={{ padding: '36px 0', borderBottom: '1px solid var(--brz-border-hair)' }}>
        <div
          className="brz-wrap"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, minmax(0,1fr))',
            gap: 40,
            alignItems: 'center',
          }}
        >
          {[
            ['Clinically Proven', '3rd party tested'],
            ['Derm Tested', 'Sensitive skin safe'],
            ['Fast Results', 'Visible in 8 weeks'],
            ['Fragrance Free', 'Made for real skin'],
          ].map(([h, s]) => (
            <div key={h} style={{ display: 'flex', gap: 14, alignItems: 'center' }}>
              <svg
                width={22}
                height={22}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20 6 9 17l-5-5" />
              </svg>
              <div>
                <strong style={{ display: 'block', fontSize: 13, fontWeight: 700 }}>{h}</strong>
                <span style={{ fontSize: 11, color: 'var(--brz-fg-2)', letterSpacing: '0.04em' }}>
                  {s}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Editorial split — image + dermatologist message */}
      <section
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          minHeight: 620,
        }}
      >
        <div
          style={{
            background: "#2A2A2A url('/assets/bg-grey-800.jpg') center/cover",
          }}
        />
        <div
          style={{
            padding: '100px 80px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <div
            style={{
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: '0.28em',
              textTransform: 'uppercase',
              color: 'var(--brz-fg-2)',
            }}
          >
            Real results
          </div>
          <h2
            style={{
              fontFamily: 'var(--brz-font-display)',
              fontWeight: 600,
              fontSize: 54,
              lineHeight: 1.08,
              letterSpacing: '-0.02em',
              margin: '18px 0 24px',
            }}
          >
            Formulated with{' '}
            <em
              style={{ fontFamily: 'var(--brz-font-serif)', fontStyle: 'italic', fontWeight: 500 }}
            >
              dermatologists,
            </em>{' '}
            tested on real skin.
          </h2>
          <p style={{ fontSize: 16, color: 'var(--brz-fg-2)', lineHeight: 1.65, marginBottom: 28, maxWidth: 460 }}>
            Every Brizion product is developed over 18+ months with board-certified dermatologists
            and put through independent clinical trials. No filler, no empty promises — just proof.
          </p>
          <a href={`/${locale}/science`} style={{ alignSelf: 'flex-start', textDecoration: 'none' }}>
            <button className="btn-outline">Read the science →</button>
          </a>
        </div>
      </section>

      {/* Reviews */}
      <section style={{ padding: '120px 0', borderTop: '1px solid var(--brz-border-hair)' }}>
        <div className="brz-wrap">
          <div style={{ marginBottom: 56 }}>
            <div
              style={{
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: '0.28em',
                textTransform: 'uppercase',
                color: 'var(--brz-fg-2)',
              }}
            >
              Real women, real results
            </div>
            <h2
              style={{
                fontFamily: 'var(--brz-font-display)',
                fontWeight: 600,
                fontSize: 'clamp(36px, 4.2vw, 56px)',
                lineHeight: 1.05,
                letterSpacing: '-0.02em',
                margin: '12px 0 0',
              }}
            >
              Over 100,000{' '}
              <em
                style={{
                  fontFamily: 'var(--brz-font-serif)',
                  fontStyle: 'italic',
                  fontWeight: 500,
                }}
              >
                reviews
              </em>{' '}
              and counting.
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0,1fr))', gap: 28 }}>
            {[
              {
                name: 'Re’gan',
                product: 'Firm & Lift',
                quote:
                  "I've been using it consistently and my skin feels way smoother and more hydrated. I can tell it's firming things up little by little.",
              },
              {
                name: 'Eileen',
                product: 'Renewal Cream',
                quote:
                  'My absolute holy grail product. This gave me back my confidence as a 57-year-old. My neck literally looks a decade younger.',
              },
              {
                name: 'Faith',
                product: 'Golden Hour Oil',
                quote:
                  'I looked at my before and after, and my skin looked smoother, firmer — in a way I did not expect.',
              },
            ].map((r) => (
              <article
                key={r.name}
                style={{
                  background: '#fff',
                  border: '1px solid var(--brz-n-200)',
                  padding: '36px 32px',
                  display: 'flex',
                  flexDirection: 'column',
                  minHeight: 260,
                }}
              >
                <div style={{ letterSpacing: '0.15em', fontSize: 13, marginBottom: 18 }}>★★★★★</div>
                <p
                  style={{
                    fontFamily: 'var(--brz-font-serif)',
                    fontStyle: 'italic',
                    fontWeight: 500,
                    fontSize: 18,
                    lineHeight: 1.45,
                    color: 'var(--brz-ink)',
                    flex: 1,
                    margin: '0 0 24px',
                  }}
                >
                  “{r.quote}”
                </p>
                <div
                  style={{
                    paddingTop: 18,
                    borderTop: '1px solid var(--brz-n-100)',
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

      {/* Ingredients */}
      <section style={{ padding: '120px 0', background: 'var(--brz-ink)', color: '#fff' }}>
        <div className="brz-wrap">
          <div
            style={{
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: '0.28em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.6)',
              textAlign: 'center',
            }}
          >
            What&apos;s inside
          </div>
          <h2
            style={{
              fontFamily: 'var(--brz-font-display)',
              fontWeight: 600,
              fontSize: 64,
              lineHeight: 1.02,
              letterSpacing: '-0.02em',
              textAlign: 'center',
              maxWidth: 900,
              margin: '14px auto 72px',
            }}
          >
            Active ingredients.{' '}
            <em
              style={{ fontFamily: 'var(--brz-font-serif)', fontStyle: 'italic', fontWeight: 500 }}
            >
              Nothing else.
            </em>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, minmax(0,1fr))', gap: 28 }}>
            {[
              ['01', 'Biomimetic Peptide', '4% concentrate that firms & lifts over 8 weeks.', 'Clinically proven'],
              ['02', 'Niacinamide 5%', 'Smooths texture and balances tone from day one.', 'Dermatologist tested'],
              ['03', 'Hyaluronic Acid', 'Multi-weight HA for deep, lasting hydration.', 'Vegan'],
              ['04', 'Squalane', 'Restores barrier without clogging pores.', 'Non-comedogenic'],
            ].map(([idx, name, desc, badge]) => (
              <div
                key={idx}
                style={{
                  border: '1px solid rgba(255,255,255,0.16)',
                  padding: '32px 26px',
                  minHeight: 240,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <div>
                  <div
                    style={{
                      fontFamily: 'ui-monospace, Menlo, monospace',
                      fontSize: 11,
                      color: 'rgba(255,255,255,0.5)',
                      letterSpacing: '0.08em',
                    }}
                  >
                    Ingredient {idx}
                  </div>
                  <div
                    style={{
                      fontFamily: 'var(--brz-font-display)',
                      fontWeight: 600,
                      fontSize: 26,
                      letterSpacing: '-0.01em',
                      margin: '20px 0 10px',
                    }}
                  >
                    {name}
                  </div>
                  <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.7)', lineHeight: 1.5, margin: 0 }}>
                    {desc}
                  </p>
                </div>
                <div
                  style={{
                    fontFamily: 'ui-monospace, Menlo, monospace',
                    fontSize: 11,
                    color: 'rgba(255,255,255,0.5)',
                    letterSpacing: '0.08em',
                    marginTop: 24,
                  }}
                >
                  {badge}
                </div>
              </div>
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
