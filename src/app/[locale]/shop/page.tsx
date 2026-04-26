import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { isLocale, type Locale, getCountry } from '@/lib/locales';
import { buildMetadata } from '@/lib/seo';
import { JsonLd, breadcrumbsLd } from '@/lib/jsonld';
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
    path: '/shop',
    title: 'Shop the complete collection',
    description: `Brizion's complete skincare collection — serums, creams, cleansers and bundles. Pricing in ${c.currency}, shipping to ${c.countryName} in ${c.shipping.standard}.`,
  });
}

export default async function ShopPage({
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
          { name: 'Shop', path: '/shop' },
        ])}
      />
      <section
        style={{
          background: 'var(--brz-n-50)',
          padding: '64px 0 48px',
          borderBottom: '1px solid var(--brz-border-hair)',
        }}
      >
        <div className="brz-wrap" style={{ textAlign: 'center' }}>
          <div
            style={{
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: '0.28em',
              textTransform: 'uppercase',
              color: 'var(--brz-fg-2)',
            }}
          >
            Shop all
          </div>
          <h1
            style={{
              fontFamily: 'var(--brz-font-display)',
              fontWeight: 600,
              fontSize: 64,
              letterSpacing: '-0.02em',
              margin: '16px 0 12px',
            }}
          >
            The{' '}
            <em
              style={{
                fontFamily: 'var(--brz-font-serif)',
                fontStyle: 'italic',
                fontWeight: 500,
              }}
            >
              complete
            </em>{' '}
            collection
          </h1>
          <p
            style={{
              fontFamily: 'var(--brz-font-serif)',
              fontStyle: 'italic',
              fontSize: 19,
              color: 'var(--brz-fg-2)',
            }}
          >
            Clinically proven. Dermatologist tested. Quietly powerful.
          </p>
        </div>
      </section>
      <section style={{ padding: '48px 0 120px' }}>
        <div className="brz-wrap">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
              gap: 24,
            }}
          >
            {PRODUCTS.map((p) => (
              <ProductCard key={p.id} product={p} locale={locale} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
