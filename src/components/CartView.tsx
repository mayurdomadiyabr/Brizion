'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { useCart } from './CartProvider';
import { formatPrice, type Locale, type CountryConfig } from '@/lib/locales';

export function CartView({ locale, country }: { locale: Locale; country: CountryConfig }) {
  const cart = useCart();
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const subtotalUsd = cart.subtotalUsd;
  const taxRate = country.currency === 'INR' ? 0 : 0.08;
  const taxUsd = subtotalUsd * taxRate;
  const totalUsd = subtotalUsd + taxUsd;

  const onCheckout = async () => {
    setBusy(true);
    setError(null);
    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          locale,
          lines: cart.lines.map((l) => ({ productId: l.productId, qty: l.qty })),
        }),
      });
      const data = await res.json();
      if (!res.ok || !data.url) {
        setError(data.error ?? 'Checkout failed');
        setBusy(false);
        return;
      }
      window.location.href = data.url as string;
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Checkout failed');
      setBusy(false);
    }
  };

  if (!cart.hydrated) {
    return (
      <section style={{ padding: '120px 0' }}>
        <div className="wrap" style={{ color: 'var(--brz-fg-2)' }}>
          Loading your bag…
        </div>
      </section>
    );
  }

  if (cart.lines.length === 0) {
    return (
      <section style={{ padding: '120px 0' }}>
        <div className="wrap" style={{ maxWidth: 720 }}>
          <div className="eyebrow" style={{ marginBottom: 12 }}>
            Your bag
          </div>
          <h1
            style={{
              fontFamily: 'var(--brz-font-display)',
              fontWeight: 600,
              fontSize: 'clamp(40px, 5vw, 64px)',
              letterSpacing: '-0.02em',
              margin: '0 0 16px',
            }}
          >
            Empty for now.
          </h1>
          <p
            style={{
              fontFamily: 'var(--brz-font-serif)',
              fontStyle: 'italic',
              fontSize: 19,
              color: 'var(--brz-fg-2)',
              marginBottom: 32,
            }}
          >
            Browse the collection — add what looks right.
          </p>
          <Link href={`/${locale}/shop`} style={{ textDecoration: 'none' }}>
            <button className="btn-primary">Shop the collection</button>
          </Link>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="page-head">
        <div className="wrap">
          <div className="crumb">
            Your bag · <span>{cart.count} item{cart.count === 1 ? '' : 's'}</span>
          </div>
          <h1 style={{ fontSize: 'clamp(44px, 5vw, 68px)' }}>Your bag.</h1>
        </div>
      </section>

      <section style={{ padding: '64px 0 120px' }}>
        <div className="wrap" style={{ display: 'grid', gridTemplateColumns: '1.6fr 1fr', gap: 56 }}>
          <div>
            {cart.lines.map((l) => (
              <div
                key={l.productId}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '120px 1fr auto',
                  gap: 24,
                  padding: '28px 0',
                  borderBottom: '1px solid var(--brz-border-soft)',
                  alignItems: 'center',
                }}
              >
                <div style={{ background: '#F2F2F2', padding: 14 }}>
                  <Image
                    src={l.img}
                    alt={l.name}
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
                    <Link
                      href={`/${locale}/products/${l.slug}`}
                      style={{ color: 'inherit', textDecoration: 'none' }}
                    >
                      {l.name}
                    </Link>
                  </h3>
                  <div style={{ fontSize: 12, color: 'var(--brz-fg-2)', marginBottom: 14 }}>
                    {formatPrice(l.priceUsd, locale)} each
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
                      <button
                        aria-label="Decrease quantity"
                        onClick={() => cart.update(l.productId, l.qty - 1)}
                        style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 6 }}
                      >
                        −
                      </button>
                      <span style={{ padding: '0 12px', fontWeight: 700 }}>{l.qty}</span>
                      <button
                        aria-label="Increase quantity"
                        onClick={() => cart.update(l.productId, l.qty + 1)}
                        style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 6 }}
                      >
                        +
                      </button>
                    </div>
                    <button
                      onClick={() => cart.remove(l.productId)}
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
            <Row label="Subtotal" value={formatPrice(subtotalUsd, locale)} />
            <Row label="Shipping" value="Free" />
            <Row label="Estimated tax" value={formatPrice(taxUsd, locale)} />
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
              <span>{formatPrice(totalUsd, locale)}</span>
            </div>
            <button
              onClick={onCheckout}
              disabled={busy}
              className="btn-primary"
              style={{ width: '100%', marginTop: 16, opacity: busy ? 0.6 : 1 }}
            >
              {busy ? 'Redirecting…' : `Checkout — ${formatPrice(totalUsd, locale)}`}
            </button>
            {error && (
              <div role="alert" style={{ marginTop: 12, color: 'var(--brz-danger)', fontSize: 12 }}>
                {error}
              </div>
            )}
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
              ✓ Secure checkout · 256-bit SSL · Powered by Stripe
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', fontSize: 14 }}>
      <span>{label}</span>
      <span>{value}</span>
    </div>
  );
}
