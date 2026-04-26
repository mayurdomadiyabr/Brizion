import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { isLocale, type Locale, getCountry } from '@/lib/locales';
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
    path: '/contact',
    title: 'Help & Contact',
    description:
      'Most answers are below. If you don\u2019t find yours, write to us — we respond within 24 hours, seven days a week.',
  });
}

const CATEGORIES = [
  { code: '01', h: 'Orders & Shipping', p: 'Tracking, delivery windows, customs', n: '14 articles' },
  { code: '02', h: 'Returns & Refunds', p: '30-day returns, refund timelines', n: '08 articles' },
  { code: '03', h: 'Subscriptions', p: 'Pause, swap, skip, cancel', n: '11 articles' },
  { code: '04', h: 'Product & Skin', p: 'Concerns, ingredient questions', n: '22 articles' },
];

const FAQ_GROUPS = [
  {
    label: 'Orders & Shipping',
    qs: [
      { q: 'When will my order ship?', a: 'Orders placed before 2 PM ET Monday–Friday ship the same business day from our Brooklyn warehouse. Weekend orders ship Monday morning. You\u2019ll get a tracking number by email within 2 hours of shipment.', open: true },
      { q: 'Do you ship internationally?', a: 'Yes — to 14 countries. Shipping takes 5–10 business days and customs/duties are calculated at checkout. We don\u2019t currently ship retinoids to countries where they require prescription (check a full list on our shipping page).' },
      { q: 'My package says delivered but I can\u2019t find it.', a: 'First, check with neighbors and building mailrooms. If it\u2019s been 48 hours with no sign, email us with your order number and we\u2019ll file a carrier claim and reship at no charge.' },
    ],
    table: [
      ['Standard · Domestic', '3–5 business days', 'Free over $50'],
      ['Expedited · Domestic', '2 business days', '$8.00'],
      ['Overnight · Domestic', '1 business day', '$22.00'],
      ['International', '5–10 business days', 'From $18.00'],
    ],
  },
  {
    label: 'Returns & Refunds',
    qs: [
      { q: 'What\u2019s your return policy?', a: '30 days from delivery on any product — opened or unopened. We cover the return shipping. Refunds land on your original payment method within 5 business days of our warehouse receiving the return.' },
      { q: 'I had a reaction. What now?', a: 'Stop using immediately and email us with a photo if possible. We\u2019ll refund in full, talk you through what might have caused it, and — if you want — recommend a gentler alternative from the line.' },
      { q: 'Can I return a subscription order?', a: 'Yes, same 30-day policy. You can also pause or cancel the subscription itself from your account at any time, no questions asked.' },
    ],
  },
  {
    label: 'Subscriptions',
    qs: [
      { q: 'How do I pause or cancel?', a: 'Open your account, tap Subscriptions, and use the Pause or Cancel button on any active subscription. No phone call, no retention script, no friction.' },
      { q: 'Can I change the delivery frequency?', a: 'Yes. Every subscription lets you choose between 30, 45, 60, or 90-day cycles. You can change it as often as you like from your account.' },
      { q: 'What\u2019s the subscription discount?', a: '15% off every delivery, forever. First-time subscribers also get free shipping and a travel-size sample with their first box.' },
    ],
  },
  {
    label: 'Product & Skin',
    qs: [
      { q: 'Can I use the serum while pregnant?', a: 'The Firm & Lift Serum contains retinal, which is not recommended during pregnancy or breastfeeding. Our Bakuchiol Concentrate is a pregnancy-safe alternative with similar benefits. Always check with your OBGYN first.' },
      { q: 'In what order should I apply your products?', a: 'Thinnest to thickest: cleanser → serum → oil (optional) → moisturizer. In the AM, finish with SPF. In the PM, the Overnight Renewal Cream is the last step.' },
    ],
  },
];

const PROMISES = [
  { h: '30-day returns', p: 'On everything. Even opened product. Even subscriptions.' },
  { h: 'Free reship', p: 'If the carrier loses it, we ship another one. No claim required from you.' },
  { h: 'Reaction refund', p: 'If your skin reacts to anything, we refund in full and help you find a better fit.' },
  { h: 'Honest comms', p: 'No hidden retention scripts, no auto-charges you can\u2019t escape. Ever.' },
];

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();
  const locale = rawLocale as Locale;
  const country = getCountry(locale);

  return (
    <>
      <JsonLd
        data={breadcrumbsLd(locale, [
          { name: 'Home', path: '' },
          { name: 'Contact', path: '/contact' },
        ])}
      />

      {/* Hero with search */}
      <section style={{ padding: '90px 0 64px', borderBottom: '1px solid var(--brz-border-soft)' }}>
        <div className="wrap">
          <div className="eyebrow">Help &amp; Contact</div>
          <h1 style={{ fontFamily: 'var(--brz-font-display)', fontWeight: 600, fontSize: 'clamp(56px, 7vw, 96px)', lineHeight: 1, letterSpacing: '-0.03em', margin: '18px 0 24px' }}>
            How can we <em style={{ fontFamily: 'var(--brz-font-serif)', fontStyle: 'italic' }}>help</em>?
          </h1>
          <p style={{ fontFamily: 'var(--brz-font-serif)', fontStyle: 'italic', fontSize: 20, color: 'var(--brz-n-600)', maxWidth: 560, margin: 0 }}>
            Most answers are below. If you don&apos;t find yours, write to us on the right — we respond within 24 hours, seven days a week.
          </p>
          <div style={{ maxWidth: 640, marginTop: 32, position: 'relative' }}>
            <input
              placeholder="Search — e.g. 'when will my order ship'"
              aria-label="Search the help center"
              style={{ width: '100%', padding: '20px 22px', border: '1px solid var(--brz-ink)', fontFamily: 'inherit', fontSize: 15, background: '#fff' }}
            />
            <button style={{ position: 'absolute', right: 8, top: '50%', transform: 'translateY(-50%)', background: 'var(--brz-ink)', color: '#fff', border: 'none', padding: '12px 20px', fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 700, cursor: 'pointer' }}>
              Search
            </button>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section style={{ padding: '56px 0', borderBottom: '1px solid var(--brz-border-soft)' }}>
        <div className="wrap" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, minmax(0,1fr))', gap: 20 }}>
          {CATEGORIES.map((c) => (
            <div key={c.code} style={{ border: '1px solid var(--brz-border-soft)', padding: '28px 24px', cursor: 'pointer' }}>
              <div style={{ fontFamily: 'ui-monospace, Menlo, monospace', fontSize: 11, color: 'var(--brz-fg-3)', marginBottom: 22 }}>{c.code}</div>
              <h3 style={{ fontFamily: 'var(--brz-font-display)', fontWeight: 600, fontSize: 20, margin: '0 0 6px', letterSpacing: '-0.01em' }}>{c.h}</h3>
              <p style={{ fontSize: 12, color: 'var(--brz-fg-2)', margin: '0 0 20px', lineHeight: 1.5 }}>{c.p}</p>
              <div style={{ fontSize: 11, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--brz-ink)', fontWeight: 700 }}>{c.n} →</div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ + sidebar */}
      <section style={{ padding: '96px 0 80px' }}>
        <div className="wrap" style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: 80 }}>
          <div>
            <h2 style={{ fontFamily: 'var(--brz-font-display)', fontWeight: 600, fontSize: 36, letterSpacing: '-0.02em', margin: '0 0 10px' }}>
              Frequently <em style={{ fontFamily: 'var(--brz-font-serif)', fontStyle: 'italic' }}>asked</em>.
            </h2>
            <p style={{ fontFamily: 'var(--brz-font-serif)', fontStyle: 'italic', fontSize: 15, color: 'var(--brz-fg-2)', margin: '0 0 32px' }}>
              The top 20 questions from our customers, with real answers.
            </p>
            {FAQ_GROUPS.map((g) => (
              <div key={g.label} style={{ marginBottom: 40 }}>
                <div style={{ fontSize: 11, letterSpacing: '0.24em', textTransform: 'uppercase', color: 'var(--brz-fg-2)', fontWeight: 700, marginBottom: 14, paddingBottom: 8, borderBottom: '1px solid var(--brz-ink)' }}>
                  {g.label}
                </div>
                {g.qs.map((q) => (
                  <details key={q.q} open={(q as { open?: boolean }).open} style={{ borderBottom: '1px solid var(--brz-border-soft)' }}>
                    <summary style={{ padding: '20px 0', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: 15, fontWeight: 600 }}>
                      {q.q}
                      <span style={{ fontSize: 22, color: 'var(--brz-fg-2)' }}>+</span>
                    </summary>
                    <p style={{ fontFamily: 'var(--brz-font-serif)', fontSize: 15, lineHeight: 1.6, color: 'var(--brz-n-600)', margin: '0 0 22px', maxWidth: 560 }}>
                      {q.a}
                    </p>
                  </details>
                ))}
                {g.table && (
                  <div style={{ padding: '32px 0', borderTop: '1px solid var(--brz-border-soft)', borderBottom: '1px solid var(--brz-border-soft)' }}>
                    {g.table.map((row) => (
                      <div key={row[0]} style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr auto', gap: 20, padding: '14px 0', borderBottom: '1px solid var(--brz-n-100)', fontSize: 13, alignItems: 'center' }}>
                        <b style={{ fontWeight: 700 }}>{row[0]}</b>
                        <span style={{ color: 'var(--brz-fg-2)' }}>{row[1]}</span>
                        <span style={{ fontFamily: 'ui-monospace, Menlo, monospace', fontSize: 12, fontWeight: 700 }}>{row[2]}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Sidebar */}
          <aside style={{ position: 'sticky', top: 100, alignSelf: 'start', display: 'flex', flexDirection: 'column', gap: 16 }}>
            <div style={{ border: '1px solid var(--brz-ink)', padding: 28 }}>
              <h3 style={{ fontFamily: 'var(--brz-font-display)', fontWeight: 600, fontSize: 22, margin: '0 0 6px', letterSpacing: '-0.01em' }}>
                Write to <em style={{ fontFamily: 'var(--brz-font-serif)', fontStyle: 'italic' }}>us</em>.
              </h3>
              <p style={{ fontFamily: 'var(--brz-font-serif)', fontStyle: 'italic', fontSize: 13.5, color: 'var(--brz-fg-2)', margin: '0 0 20px', lineHeight: 1.5 }}>
                Real humans, responding within 24 hours. Seven days a week.
              </p>
              {[
                { label: 'Your email', placeholder: 'you@email.com', tag: 'input' as const },
                { label: 'Topic', placeholder: 'Question about my subscription', tag: 'input' as const },
                { label: 'How can we help?', placeholder: 'Tell us a bit about what you need.', tag: 'textarea' as const },
              ].map((f) => (
                <div key={f.label} style={{ marginBottom: 12 }}>
                  <label style={{ display: 'block', fontSize: 10, fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--brz-fg-2)', marginBottom: 5 }}>
                    {f.label}
                  </label>
                  {f.tag === 'input' ? (
                    <input placeholder={f.placeholder} style={{ width: '100%', padding: 12, border: '1px solid var(--brz-border-soft)', background: '#fff', fontFamily: 'inherit', fontSize: 13, outline: 'none' }} />
                  ) : (
                    <textarea placeholder={f.placeholder} style={{ width: '100%', padding: 12, border: '1px solid var(--brz-border-soft)', background: '#fff', fontFamily: 'inherit', fontSize: 13, outline: 'none', minHeight: 100, resize: 'vertical' }} />
                  )}
                </div>
              ))}
              <button className="btn-primary" style={{ width: '100%', marginTop: 10, padding: 14 }}>Send message</button>
              <p style={{ marginTop: 14, fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--brz-fg-3)' }}>
                Avg. response · 3h 12m
              </p>
            </div>

            <div style={{ background: 'var(--brz-n-50)', padding: 22 }}>
              <div style={{ fontSize: 10, letterSpacing: '0.22em', textTransform: 'uppercase', fontWeight: 700, color: 'var(--brz-fg-2)', marginBottom: 10 }}>
                Other ways to reach us
              </div>
              {[
                ['Email', country.contactEmail],
                ['Phone (M–F 9–5 ET)', '1-800-BRIZION'],
                ['Text', '+1 (718) 555-0114'],
                ['Instagram DM', '@brizion'],
              ].map(([label, val]) => (
                <div key={label} style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0', borderBottom: '1px solid var(--brz-border-soft)', fontSize: 13, alignItems: 'baseline' }}>
                  <b style={{ fontWeight: 700 }}>{label}</b>
                  <span style={{ fontFamily: 'ui-monospace, Menlo, monospace', fontSize: 11, color: 'var(--brz-fg-2)' }}>{val}</span>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>

      {/* Promise */}
      <section style={{ background: '#0A0A0A', color: '#fff', padding: '60px 0' }}>
        <div className="wrap" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0,1fr))', gap: 48, alignItems: 'center' }}>
          <h2 style={{ fontFamily: 'var(--brz-font-display)', fontWeight: 600, fontSize: 40, letterSpacing: '-0.02em', margin: 0 }}>
            Our <em style={{ fontFamily: 'var(--brz-font-serif)', fontStyle: 'italic' }}>promise</em> to you.
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0,1fr))', gap: 28 }}>
            {PROMISES.map((p) => (
              <div key={p.h}>
                <b style={{ fontFamily: 'var(--brz-font-display)', fontWeight: 600, fontSize: 28, display: 'block', marginBottom: 6, letterSpacing: '-0.01em' }}>{p.h}</b>
                <p style={{ fontFamily: 'var(--brz-font-serif)', fontStyle: 'italic', fontSize: 13, color: 'rgba(255,255,255,0.65)', margin: 0, lineHeight: 1.5 }}>{p.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
