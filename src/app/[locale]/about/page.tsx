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
    path: '/about',
    title: 'About Brizion — quietly powerful skincare',
    description:
      'Brizion was founded by women who wanted skincare to feel quieter, smarter, and more honest. Editorial beauty, clinical confidence.',
  });
}

export default async function AboutPage({
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
          { name: 'About', path: '/about' },
        ])}
      />
      <section
        style={{
          background: 'var(--brz-n-50)',
          padding: '120px 0',
          textAlign: 'center',
          borderBottom: '1px solid var(--brz-border-hair)',
        }}
      >
        <div className="brz-wrap" style={{ maxWidth: 980 }}>
          <div
            style={{
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: '0.28em',
              textTransform: 'uppercase',
              color: 'var(--brz-fg-2)',
            }}
          >
            Our story
          </div>
          <h1
            style={{
              margin: '20px 0 32px',
              fontFamily: 'var(--brz-font-display)',
              fontWeight: 600,
              fontSize: 76,
              lineHeight: 1.02,
              letterSpacing: '-0.02em',
            }}
          >
            Beauty that&apos;s{' '}
            <em
              style={{
                fontFamily: 'var(--brz-font-serif)',
                fontStyle: 'italic',
                fontWeight: 500,
              }}
            >
              quietly
            </em>{' '}
            powerful.
          </h1>
          <p
            style={{
              fontFamily: 'var(--brz-font-serif)',
              fontStyle: 'italic',
              fontSize: 22,
              lineHeight: 1.45,
              color: 'var(--brz-fg-2)',
              maxWidth: 720,
              margin: '0 auto',
            }}
          >
            We started Brizion because skincare had gotten too loud. Too many promises. Too many
            trends. We wanted something that works — quietly, consistently, honestly.
          </p>
        </div>
      </section>
      <section style={{ padding: '120px 0' }}>
        <div className="brz-wrap" style={{ maxWidth: 880 }}>
          <h2
            style={{
              fontFamily: 'var(--brz-font-display)',
              fontWeight: 600,
              fontSize: 'clamp(32px, 3.8vw, 48px)',
              letterSpacing: '-0.02em',
              marginBottom: 24,
            }}
          >
            Made with dermatologists. Made for real skin.
          </h2>
          <p style={{ color: 'var(--brz-fg-2)', lineHeight: 1.7, fontSize: 17 }}>
            Every Brizion formula is third-party clinically tested and reviewed by a board of
            dermatologists before it ships. We start from the ingredient — peptides, niacinamide,
            hyaluronic acid — and build the smallest possible formula around it. Fragrance-free,
            paraben-free, vegan, never tested on animals.
          </p>
        </div>
      </section>
    </>
  );
}
