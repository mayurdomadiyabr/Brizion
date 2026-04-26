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
    path: '/science',
    title: 'The science behind Brizion',
    description:
      'Clinically tested. Dermatologist reviewed. The peptide blends, ingredient research, and study data behind every Brizion formula.',
  });
}

const STUDIES = [
  {
    h: '4% Peptide Blend',
    p: 'In an 8-week clinical study, 92% of participants reported visibly firmer skin. Independent third-party testing.',
  },
  {
    h: '2% Hyaluronic Acid',
    p: 'Multi-weight HA delivers hydration to multiple layers of the skin barrier. Tested for 24-hour moisture retention.',
  },
  {
    h: 'Niacinamide (5%)',
    p: 'Brightens the look of uneven tone and reduces the appearance of pores in 12 weeks of daily use.',
  },
  {
    h: 'Vitamin E',
    p: 'A protective antioxidant that supports the skin barrier and complements peptide actives.',
  },
];

export default async function SciencePage({
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
          { name: 'Science', path: '/science' },
        ])}
      />
      <section style={{ padding: '120px 0', background: 'var(--brz-ink)', color: '#fff' }}>
        <div className="brz-wrap" style={{ maxWidth: 920, textAlign: 'center' }}>
          <div
            style={{
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: '0.28em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.6)',
            }}
          >
            The science
          </div>
          <h1
            style={{
              fontFamily: 'var(--brz-font-display)',
              fontWeight: 600,
              fontSize: 'clamp(48px, 6vw, 76px)',
              lineHeight: 1.02,
              letterSpacing: '-0.02em',
              margin: '20px 0 32px',
            }}
          >
            Backed by clinical data.{' '}
            <em
              style={{
                fontFamily: 'var(--brz-font-serif)',
                fontStyle: 'italic',
                fontWeight: 500,
              }}
            >
              Not hype.
            </em>
          </h1>
          <p
            style={{
              fontFamily: 'var(--brz-font-serif)',
              fontStyle: 'italic',
              fontSize: 20,
              color: 'rgba(255,255,255,0.78)',
              lineHeight: 1.5,
            }}
          >
            Every Brizion formula is third-party clinically tested and reviewed by a board of
            dermatologists.
          </p>
        </div>
      </section>
      <section style={{ padding: '120px 0' }}>
        <div className="brz-wrap">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
              gap: 32,
            }}
          >
            {STUDIES.map((s, i) => (
              <article
                key={s.h}
                style={{
                  border: '1px solid var(--brz-border-soft)',
                  padding: 32,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 12,
                }}
              >
                <div
                  style={{
                    fontFamily: 'ui-monospace, Menlo, monospace',
                    fontSize: 11,
                    color: 'var(--brz-fg-3)',
                  }}
                >
                  STUDY · {String(i + 1).padStart(2, '0')}
                </div>
                <h2
                  style={{
                    fontFamily: 'var(--brz-font-display)',
                    fontWeight: 600,
                    fontSize: 28,
                    margin: 0,
                    letterSpacing: '-0.01em',
                  }}
                >
                  {s.h}
                </h2>
                <p style={{ margin: 0, color: 'var(--brz-fg-2)', lineHeight: 1.6 }}>{s.p}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
