import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { isLocale, type Locale, getCountry } from '@/lib/locales';
import { buildMetadata } from '@/lib/seo';

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
      path: '/account',
      title: 'Your account',
      description: 'Manage your subscriptions, orders, and address.',
    }),
    robots: { index: false, follow: false },
  };
}

export default async function AccountPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();
  const locale = rawLocale as Locale;
  const country = getCountry(locale);

  return (
    <section className="page-head" style={{ paddingBottom: 120 }}>
      <div className="wrap">
        <div className="crumb">Welcome back</div>
        <h1>Your account.</h1>
        <p className="lead" style={{ marginTop: 14, marginBottom: 56 }}>
          Manage your subscriptions, addresses, and order history. Region: {country.countryName} ·
          Currency: {country.currency}.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0,1fr))', gap: 24 }}>
          {[
            {
              title: 'Subscriptions',
              body: 'Pause, skip, or change your delivery cadence anytime.',
            },
            {
              title: 'Orders',
              body: 'Track shipments, download invoices, and start a return.',
            },
            {
              title: 'Addresses',
              body: 'Update your shipping and billing addresses.',
            },
            {
              title: 'Saved cards',
              body: 'Manage your payment methods. PCI-compliant storage.',
            },
            {
              title: 'Profile',
              body: 'Email, password, and communication preferences.',
            },
            {
              title: 'Routine',
              body: 'Your personalised routine from the skin quiz.',
            },
          ].map((c) => (
            <article
              key={c.title}
              style={{
                border: '1px solid var(--brz-border-soft)',
                padding: 28,
                display: 'flex',
                flexDirection: 'column',
                gap: 8,
                minHeight: 160,
              }}
            >
              <h2
                style={{
                  fontFamily: 'var(--brz-font-display)',
                  fontWeight: 600,
                  fontSize: 22,
                  margin: 0,
                  letterSpacing: '-0.01em',
                }}
              >
                {c.title}
              </h2>
              <p style={{ margin: 0, color: 'var(--brz-fg-2)', lineHeight: 1.55, fontSize: 14 }}>
                {c.body}
              </p>
              <a
                href={`/${locale}/account`}
                style={{
                  marginTop: 'auto',
                  fontSize: 11,
                  letterSpacing: '0.22em',
                  textTransform: 'uppercase',
                  fontWeight: 600,
                  borderBottom: '1px solid var(--brz-ink)',
                  alignSelf: 'flex-start',
                  paddingBottom: 2,
                  textDecoration: 'none',
                }}
              >
                Manage →
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
