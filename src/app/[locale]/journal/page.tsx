import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { isLocale, type Locale } from '@/lib/locales';
import { buildMetadata } from '@/lib/seo';
import { JsonLd, breadcrumbsLd } from '@/lib/jsonld';
import { ARTICLES } from '@/lib/journal';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return buildMetadata({
    locale,
    path: '/journal',
    title: 'The Brizion Journal',
    description:
      'Essays, ingredient research, and clinical studies from the Brizion lab — written by the people who formulate the products.',
  });
}

export default async function JournalPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();
  const locale = rawLocale as Locale;
  const [feature, ...rest] = ARTICLES;

  return (
    <>
      <JsonLd
        data={breadcrumbsLd(locale, [
          { name: 'Home', path: '' },
          { name: 'Journal', path: '/journal' },
        ])}
      />
      <section className="page-head">
        <div className="wrap">
          <div className="eyebrow" style={{ marginBottom: 18 }}>The Brizion Journal</div>
          <h1>
            Skincare, in <em>plain language</em>.
          </h1>
          <p className="lead" style={{ marginTop: 16 }}>
            Essays, studies, and how-tos from our lab. Written by the people who formulate the products.
          </p>
        </div>
      </section>

      <section style={{ padding: '80px 0', borderBottom: '1px solid var(--brz-border-soft)' }}>
        <div className="wrap" style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 56, alignItems: 'center' }}>
          <div
            style={{
              aspectRatio: '4/3',
              background: 'linear-gradient(180deg, #2A2A2A 0%, #0A0A0A 100%)',
              display: 'flex',
              alignItems: 'flex-end',
              padding: 28,
              color: 'rgba(255,255,255,0.3)',
              fontSize: 11,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              fontWeight: 600,
            }}
          >
            Editorial · 01
          </div>
          <div>
            <div
              style={{
                fontSize: 11,
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: 'var(--brz-fg-2)',
                fontWeight: 600,
                marginBottom: 18,
              }}
            >
              Feature · <span style={{ color: 'var(--brz-ink)' }}>{feature.category}</span> · {feature.readMin} min read
            </div>
            <h2
              style={{
                fontFamily: 'var(--brz-font-display)',
                fontWeight: 600,
                fontSize: 48,
                lineHeight: 1.05,
                letterSpacing: '-0.02em',
                margin: '0 0 22px',
              }}
            >
              {feature.title}
              {feature.emTitle && (
                <em style={{ fontFamily: 'var(--brz-font-serif)', fontStyle: 'italic' }}>
                  {feature.emTitle}
                </em>
              )}
            </h2>
            <p
              style={{
                fontFamily: 'var(--brz-font-serif)',
                fontStyle: 'italic',
                fontSize: 18,
                color: 'var(--brz-fg-2)',
                margin: '0 0 28px',
                lineHeight: 1.5,
                maxWidth: 460,
              }}
            >
              {feature.dek}
            </p>
            <Link href={`/${locale}/journal/${feature.slug}`}>
              <button className="btn-outline">Read the essay</button>
            </Link>
            <div style={{ marginTop: 22, fontSize: 12, color: 'var(--brz-fg-2)' }}>
              By {feature.author} · {new Date(feature.date).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: '100px 0' }}>
        <div className="wrap">
          <h3
            style={{
              fontFamily: 'var(--brz-font-display)',
              fontWeight: 600,
              fontSize: 32,
              letterSpacing: '-0.015em',
              margin: '0 0 40px',
            }}
          >
            More from the Journal
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0,1fr))', gap: 32 }}>
            {rest.map((a) => (
              <Link key={a.slug} href={`/${locale}/journal/${a.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <div
                  style={{
                    aspectRatio: '4/5',
                    background: 'linear-gradient(160deg, #2A2A2A 0%, #5A5A5A 100%)',
                    marginBottom: 18,
                    position: 'relative',
                    display: 'flex',
                    alignItems: 'flex-end',
                    padding: 20,
                  }}
                >
                  <span
                    style={{
                      background: '#fff',
                      color: 'var(--brz-ink)',
                      fontSize: 10,
                      letterSpacing: '0.22em',
                      textTransform: 'uppercase',
                      fontWeight: 700,
                      padding: '6px 10px',
                    }}
                  >
                    {a.category}
                  </span>
                </div>
                <div
                  style={{
                    fontSize: 10,
                    letterSpacing: '0.24em',
                    textTransform: 'uppercase',
                    fontWeight: 700,
                    color: 'var(--brz-fg-2)',
                    marginBottom: 8,
                  }}
                >
                  {a.category} · {a.readMin} min
                </div>
                <h4
                  style={{
                    fontFamily: 'var(--brz-font-display)',
                    fontWeight: 600,
                    fontSize: 22,
                    lineHeight: 1.2,
                    letterSpacing: '-0.01em',
                    margin: '0 0 10px',
                  }}
                >
                  {a.title}
                  {a.emTitle && (
                    <em style={{ fontFamily: 'var(--brz-font-serif)', fontStyle: 'italic' }}>{a.emTitle}</em>
                  )}
                </h4>
                <div style={{ fontSize: 11, color: 'var(--brz-fg-3)' }}>By {a.author}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
