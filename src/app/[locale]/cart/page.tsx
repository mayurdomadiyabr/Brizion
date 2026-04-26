import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { isLocale, type Locale, formatPrice, getCountry } from '@/lib/locales';
import { buildMetadata } from '@/lib/seo';
import { PRODUCTS } from '@/lib/products';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return {
    ...buildMetadata({
      locale,
      path: '/cart',
      title: 'Your bag',
      description: 'Review your bag and continue to checkout.',
    }),
    robots: { index: false, follow: false },
  };
}

export default async function CartPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();
  const locale = rawLocale as Locale;
  const country = getCountry(locale);

  // Sample bag — in a real app this comes from session/state.
  const lineItems = [
    { product: PRODUCTS[0], qty: 1, plan: 'Subscribe & save 15%', size: '30 ml', priceUsd: PRODUCTS[0].priceUsd * 0.85 },
    { product: PRODUCTS[1], qty: 1, plan: 'One-time purchase', size: '50 ml', priceUsd: PRODUCTS[1].priceUsd },
  ];
  const subtotal = lineItems.reduce((s, l) => s + l.priceUsd * l.qty, 0);
  const taxRate = country.currency === 'INR' ? 0 : 0.08;
  const tax = subtotal * taxRate;
  const total = subtotal + tax;

  return (
    <>
      <section className="page-head">
        <div className="wrap">
          <div className="crumb">
            Your bag · <span>{lineItems.length} items</span>
          </div>
          <h1 style={{ fontSize: 'clamp(44px, 5vw, 68px)' }}>Your bag.</h1>
        </div>
      </section>

      <section style={{ padding: '64px 0 120px' }}>
        <div className="wrap" style={{ display: 'grid', gridTemplateColumns: '1.6fr 1fr', gap: 56 }}>
          <div>
            {lineItems.map((l) => (
              <div
                key={l.product.id}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '120px 1fr auto',
                  gap: 24,
                  padding: '28px 0',
                  borderBottom: '1px solid var(--brz-border-soft)',
                  alignItems: 'center',
                }}
              >
                <div style={{ background: l.product.bg, padding: 14 }}>
                  <Image
                    src={l.product.img}
                    alt={l.product.name}
                    width={120}
                    height={120}
                    style={{ width: '100%', height: 'auto', objectFit: 'contain' }}
                  />
                </div>
                <div>
                  <h3
                    style={{
                      fontFamily: 'var(--brz-font-display)',
                      fontSize: 22,
                      fontWeight: 600,
                      margin: '0 0 6px',
                    }}
                  >
                    {l.product.name}
                  </h3>
                  <div style={{ fontSize: 12, color: 'var(--brz-fg-2)', marginBottom: 14 }}>
                    {l.size} · {l.plan}
                  </div>
                  <div style={{ display: 'flex', gap: 18, alignItems: 'center' }}>
                    <div
                      style={{
                        display: 'inline-flex',
                        border: '1px solid var(--brz-border-soft)',
                        borderRadius: 999,
                        padding: '4px 8px',
                        alignItems: 'center',
                      }}
                    >
                      <button style={{ background: 'none', border: 'none', cursor: 'pointer' }}>−</button>
                      <span style={{ padding: '0 12px', fontWeight: 700 }}>{l.qty}</span>
                      <button style={{ background: 'none', border: 'none', cursor: 'pointer' }}>+</button>
                    </div>
                    <button
                      style={{
                        background: 'none',
                        border: 'none',
                        fontSize: 11,
                        letterSpacing: '0.22em',
                        textTransform: 'uppercase',
                        cursor: 'pointer',
                        color: 'var(--brz-fg-2)',
                      }}
                    >
                      Remove
                    </button>
                  </div>
                </div>
                <div style={{ fontSize: 16, fontWeight: 700 }}>
                  {formatPrice(l.priceUsd * l.qty, locale)}
                </div>
              </div>
            ))}
          </div>

          <aside
            style={{
              border: '1px solid var(--brz-border-soft)',
              padding: 32,
              alignSelf: 'start',
            }}
          >
            <h3 style={{ margin: '0 0 24px', fontSize: 14, letterSpacing: '0.22em', textTransform: 'uppercase' }}>
              Order Summary
            </h3>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', fontSize: 14 }}>
              <span>Subtotal</span>
              <span>{formatPrice(subtotal, locale)}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', fontSize: 14 }}>
              <span>Shipping</span>
              <span>Free</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', fontSize: 14 }}>
              <span>Estimated tax</span>
              <span>{formatPrice(tax, locale)}</span>
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                padding: '14px 0',
                borderTop: '1px solid var(--brz-border-soft)',
                marginTop: 8,
                fontSize: 18,
                fontWeight: 700,
              }}
            >
              <span>Total</span>
              <span>{formatPrice(total, locale)}</span>
            </div>
            <Link href={`/${locale}/checkout`} style={{ textDecoration: 'none' }}>
              <button className="btn-primary" style={{ width: '100%', marginTop: 16 }}>
                Checkout — {formatPrice(total, locale)}
              </button>
            </Link>
            <div
              style={{
                marginTop: 22,
                paddingTop: 18,
                borderTop: '1px solid var(--brz-border-soft)',
                fontSize: 11,
                color: 'var(--brz-fg-2)',
                lineHeight: 1.7,
              }}
            >
              ✓ Free shipping over {country.currencySymbol}
              {country.shipping.freeOver}
              <br />
              ✓ {country.guarantee}
              <br />
              ✓ Derm-approved &amp; clinically tested
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
