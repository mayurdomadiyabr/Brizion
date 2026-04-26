import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { isLocale, type Locale, formatPrice, getCountry, LOCALES } from '@/lib/locales';
import { buildMetadata } from '@/lib/seo';
import { JsonLd, breadcrumbsLd, productLd } from '@/lib/jsonld';
import { PRODUCTS, getProduct } from '@/lib/products';

export function generateStaticParams() {
  const out: { locale: string; slug: string }[] = [];
  for (const locale of LOCALES) {
    for (const p of PRODUCTS) out.push({ locale, slug: p.slug });
  }
  return out;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale)) return {};
  const product = getProduct(slug);
  if (!product) return {};
  return buildMetadata({
    locale,
    path: `/products/${slug}`,
    title: `${product.name} — ${product.sub}`,
    description: `${product.name}: ${product.sub} Clinically tested, dermatologist reviewed. ${formatPrice(product.priceUsd, locale)}.`,
    image: product.img,
  });
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale: rawLocale, slug } = await params;
  if (!isLocale(rawLocale)) notFound();
  const locale = rawLocale as Locale;
  const product = getProduct(slug);
  if (!product) notFound();
  const country = getCountry(locale);

  return (
    <>
      <JsonLd data={productLd(locale, product)} />
      <JsonLd
        data={breadcrumbsLd(locale, [
          { name: 'Home', path: '' },
          { name: 'Shop', path: '/shop' },
          { name: product.name, path: `/products/${product.slug}` },
        ])}
      />
      <section style={{ padding: '64px 0 96px', background: 'var(--brz-n-0)' }}>
        <div
          className="brz-wrap"
          style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 72 }}
        >
          <div
            style={{
              background: product.bg,
              borderRadius: 14,
              aspectRatio: '1/1',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: 48,
            }}
          >
            <Image
              src={product.img}
              alt={`${product.name} — ${product.sub}`}
              width={680}
              height={680}
              priority
              style={{ width: 'auto', maxHeight: '100%', objectFit: 'contain' }}
            />
          </div>
          <div>
            <div
              style={{
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: 'var(--brz-fg-2)',
              }}
            >
              {product.kind}
            </div>
            <h1
              style={{
                margin: '16px 0 14px',
                fontFamily: 'var(--brz-font-display)',
                fontWeight: 600,
                fontSize: 52,
                lineHeight: 1.05,
                letterSpacing: '-0.02em',
              }}
            >
              {product.name}
            </h1>
            <p
              style={{
                fontFamily: 'var(--brz-font-serif)',
                fontStyle: 'italic',
                fontSize: 22,
                color: 'var(--brz-fg-1)',
                marginBottom: 20,
                lineHeight: 1.4,
              }}
            >
              {product.sub}
            </p>
            <div
              style={{
                fontFamily: 'var(--brz-font-sans)',
                fontSize: 18,
                fontWeight: 700,
                marginBottom: 20,
              }}
            >
              {formatPrice(product.priceUsd, locale)}{' '}
              <span
                style={{
                  fontWeight: 400,
                  fontSize: 13,
                  color: 'var(--brz-fg-2)',
                  marginLeft: 8,
                }}
              >
                · {country.taxLabel}
              </span>
            </div>
            <button
              style={{
                background: 'var(--brz-ink)',
                color: '#fff',
                padding: '16px 28px',
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                border: 'none',
                cursor: 'pointer',
                borderRadius: 999,
              }}
            >
              Add to cart
            </button>
            <div
              style={{
                marginTop: 32,
                paddingTop: 24,
                borderTop: '1px solid var(--brz-border-hair)',
                fontSize: 13,
                color: 'var(--brz-fg-2)',
                lineHeight: 1.6,
              }}
            >
              Ships to {country.countryName} · {country.shipping.standard} standard ·{' '}
              {country.guarantee}.
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
