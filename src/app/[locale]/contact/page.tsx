import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { isLocale, type Locale, getCountry, COUNTRIES, LOCALES } from '@/lib/locales';
import { buildMetadata } from '@/lib/seo';
import { JsonLd, breadcrumbsLd } from '@/lib/jsonld';

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
    path: '/contact',
    title: 'Contact Brizion',
    description: `Get in touch with Brizion ${c.countryName} support — ${c.contactEmail}.`,
  });
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();
  const locale = rawLocale as Locale;
  const c = getCountry(locale);

  return (
    <>
      <JsonLd
        data={breadcrumbsLd(locale, [
          { name: 'Home', path: '' },
          { name: 'Contact', path: '/contact' },
        ])}
      />
      <section style={{ padding: '120px 0', borderBottom: '1px solid var(--brz-border-hair)' }}>
        <div className="brz-wrap" style={{ maxWidth: 720 }}>
          <div
            style={{
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: '0.28em',
              textTransform: 'uppercase',
              color: 'var(--brz-fg-2)',
            }}
          >
            Contact
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
            We&apos;re here.{' '}
            <em
              style={{
                fontFamily: 'var(--brz-font-serif)',
                fontStyle: 'italic',
                fontWeight: 500,
              }}
            >
              Quietly.
            </em>
          </h1>
          <p
            style={{
              fontFamily: 'var(--brz-font-serif)',
              fontStyle: 'italic',
              fontSize: 19,
              color: 'var(--brz-fg-2)',
              marginBottom: 40,
            }}
          >
            We reply to every email, usually within one business day.
          </p>
          <dl
            style={{
              display: 'grid',
              gridTemplateColumns: '160px 1fr',
              rowGap: 20,
              columnGap: 24,
              fontFamily: 'var(--brz-font-sans)',
              fontSize: 15,
            }}
          >
            <dt style={{ color: 'var(--brz-fg-3)' }}>Email</dt>
            <dd style={{ margin: 0, fontWeight: 600 }}>
              <a href={`mailto:${c.contactEmail}`}>{c.contactEmail}</a>
            </dd>
            <dt style={{ color: 'var(--brz-fg-3)' }}>Region</dt>
            <dd style={{ margin: 0 }}>{c.countryName}</dd>
            <dt style={{ color: 'var(--brz-fg-3)' }}>Shipping</dt>
            <dd style={{ margin: 0 }}>
              Standard {c.shipping.standard} · Express {c.shipping.express}
            </dd>
            <dt style={{ color: 'var(--brz-fg-3)' }}>Returns</dt>
            <dd style={{ margin: 0 }}>{c.guarantee}</dd>
          </dl>
        </div>
      </section>
      <section style={{ padding: '80px 0' }}>
        <div className="brz-wrap" style={{ maxWidth: 720 }}>
          <h2
            style={{
              fontFamily: 'var(--brz-font-display)',
              fontWeight: 600,
              fontSize: 28,
              marginBottom: 18,
            }}
          >
            Other regions
          </h2>
          <ul style={{ padding: 0, margin: 0, listStyle: 'none' }}>
            {LOCALES.filter((l) => l !== locale).map((l) => {
              const o = COUNTRIES[l];
              return (
                <li
                  key={l}
                  style={{
                    padding: '14px 0',
                    borderTop: '1px solid var(--brz-border-hair)',
                    display: 'flex',
                    justifyContent: 'space-between',
                  }}
                >
                  <span>{o.countryName}</span>
                  <a href={`mailto:${o.contactEmail}`}>{o.contactEmail}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </>
  );
}
