import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { isLocale, type Locale } from '@/lib/locales';
import { buildMetadata } from '@/lib/seo';
import { getStripe } from '@/lib/stripe';
import { ClearCartOnMount } from '@/components/ClearCartOnMount';

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
      path: '/success',
      title: 'Thank you',
      description: 'Order confirmed.',
    }),
    robots: { index: false, follow: false },
  };
}

export default async function SuccessPage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ session_id?: string }>;
}) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();
  const locale = rawLocale as Locale;
  const sp = await searchParams;
  const sessionId = sp.session_id;

  let email: string | null = null;
  let amountTotal: number | null = null;
  let currency: string | null = null;

  if (sessionId) {
    try {
      const stripe = getStripe();
      const session = await stripe.checkout.sessions.retrieve(sessionId);
      email = session.customer_details?.email ?? null;
      amountTotal = session.amount_total ?? null;
      currency = session.currency ?? null;
    } catch {
      /* keep defaults; show generic confirmation */
    }
  }

  return (
    <>
      <ClearCartOnMount />
      <section style={{ padding: '120px 0' }}>
        <div className="wrap" style={{ maxWidth: 720, textAlign: 'center' }}>
          <div className="eyebrow" style={{ marginBottom: 16 }}>
            Order confirmed
          </div>
          <h1
            style={{
              fontFamily: 'var(--brz-font-display)',
              fontWeight: 600,
              fontSize: 'clamp(48px, 6vw, 76px)',
              lineHeight: 1.02,
              letterSpacing: '-0.02em',
              margin: '0 0 24px',
            }}
          >
            Thank you.
          </h1>
          <p
            style={{
              fontFamily: 'var(--brz-font-serif)',
              fontStyle: 'italic',
              fontSize: 22,
              color: 'var(--brz-fg-2)',
              lineHeight: 1.45,
              marginBottom: 32,
            }}
          >
            Your order is on its way. {email && `A confirmation has been sent to ${email}.`}
          </p>
          {amountTotal !== null && currency && (
            <p style={{ fontSize: 14, color: 'var(--brz-fg-2)', marginBottom: 40 }}>
              Total charged: {(amountTotal / 100).toFixed(2)} {currency.toUpperCase()}
            </p>
          )}
          <Link href={`/${locale}/shop`} style={{ textDecoration: 'none' }}>
            <button className="btn-outline">Continue shopping</button>
          </Link>
        </div>
      </section>
    </>
  );
}
