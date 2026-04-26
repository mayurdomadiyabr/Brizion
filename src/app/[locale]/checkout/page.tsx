import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { isLocale, type Locale, getCountry, formatPrice } from '@/lib/locales';
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
      path: '/checkout',
      title: 'Checkout',
      description: 'Secure checkout · 256-bit SSL.',
    }),
    robots: { index: false, follow: false },
  };
}

const FIELD: React.CSSProperties = {
  padding: '14px 16px',
  border: '1px solid var(--brz-border-soft)',
  borderRadius: 8,
  fontSize: 14,
  fontFamily: 'var(--brz-font-sans)',
  width: '100%',
};

export default async function CheckoutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();
  const locale = rawLocale as Locale;
  const country = getCountry(locale);
  const subtotal = PRODUCTS[0].priceUsd * 0.85 + PRODUCTS[1].priceUsd;
  const tax = country.currency === 'INR' ? 0 : subtotal * 0.08;
  const total = subtotal + tax;

  return (
    <section style={{ padding: '64px 0 120px' }}>
      <div className="wrap" style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 64 }}>
        <div>
          <div className="eyebrow" style={{ marginBottom: 14 }}>
            Checkout
          </div>
          <h1
            style={{
              fontFamily: 'var(--brz-font-display)',
              fontWeight: 600,
              fontSize: 'clamp(36px, 4vw, 52px)',
              letterSpacing: '-0.02em',
              margin: '0 0 32px',
            }}
          >
            Almost there.
          </h1>

          <h2 style={{ fontSize: 14, letterSpacing: '0.22em', textTransform: 'uppercase', marginBottom: 16 }}>
            Contact
          </h2>
          <input type="email" placeholder="Email address" style={{ ...FIELD, marginBottom: 32 }} />

          <h2 style={{ fontSize: 14, letterSpacing: '0.22em', textTransform: 'uppercase', marginBottom: 16 }}>
            Shipping address
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
            <input placeholder="First name" style={FIELD} />
            <input placeholder="Last name" style={FIELD} />
          </div>
          <input
            placeholder="Street address"
            style={{ ...FIELD, marginTop: 12 }}
          />
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: 12, marginTop: 12 }}>
            <input placeholder="City" style={FIELD} />
            <input placeholder={country.code === 'us' ? 'State' : country.code === 'ca' ? 'Province' : 'State'} style={FIELD} />
            <input placeholder={country.code === 'us' ? 'ZIP' : country.code === 'ca' ? 'Postal code' : 'PIN'} style={FIELD} />
          </div>
          <input
            value={country.countryName}
            readOnly
            style={{ ...FIELD, marginTop: 12, background: 'var(--brz-n-50)' }}
          />

          <h2
            style={{
              fontSize: 14,
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              marginTop: 40,
              marginBottom: 16,
            }}
          >
            Payment
          </h2>
          <input placeholder="Card number" style={FIELD} />
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginTop: 12 }}>
            <input placeholder="MM / YY" style={FIELD} />
            <input placeholder="CVC" style={FIELD} />
          </div>

          <button className="btn-primary" style={{ width: '100%', marginTop: 32, padding: '20px' }}>
            Pay {formatPrice(total, locale)}
          </button>
          <div style={{ marginTop: 14, fontSize: 11, color: 'var(--brz-fg-2)' }}>
            Secure checkout · 256-bit SSL · {country.taxLabel}
          </div>
        </div>

        <aside
          style={{
            background: 'var(--brz-n-50)',
            padding: 32,
            alignSelf: 'start',
          }}
        >
          <h3 style={{ margin: '0 0 16px', fontSize: 14, letterSpacing: '0.22em', textTransform: 'uppercase' }}>
            Your order
          </h3>
          <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', fontSize: 14 }}>
            <span>2 items</span>
            <span>{formatPrice(subtotal, locale)}</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', fontSize: 14 }}>
            <span>Shipping</span>
            <span>Free</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', fontSize: 14 }}>
            <span>Tax</span>
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
        </aside>
      </div>
    </section>
  );
}
