import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { isLocale, type Locale } from '@/lib/locales';
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
    path: '/about',
    title: 'Our Story · Est. 2021',
    description:
      'Brizion was founded on a simple idea — that great skincare should be backed by clinical proof, not marketing. No hype, no hidden fillers, just results.',
  });
}

const PILLARS = [
  {
    n: '01',
    h: 'Clinical proof.',
    p: 'Every hero product goes through independent 8-week consumer studies with at least 80 participants before launch. Results get published on the PDP — even the ones we\u2019d rather bury.',
  },
  {
    n: '02',
    h: 'Honest labels.',
    p: 'What\u2019s on the front of the bottle is what\u2019s inside. Concentrations are disclosed. The INCI list is posted on every PDP. If an ingredient is trace, we say so.',
  },
  {
    n: '03',
    h: 'Ritual over routine.',
    p: 'Fewer products, used longer. We formulate multitaskers so you can do less — and we\u2019d rather sell you one bottle that works than twelve that don\u2019t.',
  },
];

const TEAM = [
  {
    role: 'Founder · Chief Formulator',
    name: 'Dr. Mira Chen, Ph.D.',
    desc: 'Cosmetic chemist, 14 years at Estée Lauder R&D. Patents in peptide delivery.',
  },
  {
    role: 'Head of Clinical',
    name: 'Dr. Sam Okafor, M.D.',
    desc: 'Board-certified dermatologist. Designs every study protocol we run.',
  },
  {
    role: 'Creative Director',
    name: 'Julien Marché',
    desc: 'Art direction, packaging, voice. Previously at Aesop & Byredo.',
  },
];

const TIMELINE = [
  { year: '2021', h: 'Founded', p: 'Dr. Chen launches Brizion from a Brooklyn lab with one product: the Firm & Lift Serum.' },
  { year: '2022', h: 'First Study', p: 'First published 8-week consumer trial. 96% efficacy on firmness. We print the numbers on the box.' },
  { year: '2024', h: 'Ten SKUs', p: 'The line grows to ten products. All go through the same clinical standard. None are rushed.' },
  { year: '2026', h: 'Today', p: '120,000+ customers. Sold in 14 countries. Still formulating everything in-house.' },
];

export default async function AboutPage({
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
          { name: 'About', path: '/about' },
        ])}
      />

      {/* Hero */}
      <section style={{ padding: '120px 0 100px', borderBottom: '1px solid var(--brz-border-soft)' }}>
        <div className="wrap" style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 72, alignItems: 'center' }}>
          <div>
            <div className="eyebrow">Our Story · Est. 2021</div>
            <h1 style={{ fontFamily: 'var(--brz-font-display)', fontWeight: 600, fontSize: 'clamp(64px, 8vw, 112px)', lineHeight: 0.98, letterSpacing: '-0.03em', margin: '20px 0 32px' }}>
              Skincare, but{' '}
              <em style={{ fontFamily: 'var(--brz-font-serif)', fontStyle: 'italic' }}>honest</em>.
            </h1>
            <p style={{ fontFamily: 'var(--brz-font-serif)', fontStyle: 'italic', fontSize: 22, lineHeight: 1.45, color: 'var(--brz-n-700)', maxWidth: 520 }}>
              Brizion was founded on a simple idea — that great skincare should be backed by clinical proof, not marketing. No hype. No hidden fillers. Just results you can see in the mirror.
            </p>
          </div>
          <div style={{ aspectRatio: '4/5', background: 'linear-gradient(180deg, #2A2A2A 0%, #0A0A0A 100%)', display: 'flex', alignItems: 'flex-end', padding: 40, color: '#fff' }}>
            <p style={{ fontFamily: 'var(--brz-font-serif)', fontStyle: 'italic', fontSize: 15, maxWidth: 280, lineHeight: 1.5, margin: 0 }}>
              &ldquo;We formulate at concentrations that actually perform. Everything else is noise.&rdquo;
              <b style={{ display: 'block', marginTop: 14, fontFamily: 'var(--brz-font-sans)', fontStyle: 'normal', fontWeight: 700, fontSize: 11, letterSpacing: '0.22em', textTransform: 'uppercase' }}>
                — Dr. Mira Chen, Founder
              </b>
            </p>
          </div>
        </div>
      </section>

      {/* Manifesto */}
      <section style={{ padding: '120px 0' }}>
        <div className="wrap" style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 80 }}>
          <h2 style={{ fontFamily: 'var(--brz-font-display)', fontWeight: 600, fontSize: 14, letterSpacing: '0.24em', textTransform: 'uppercase', margin: 0 }}>
            The Manifesto
          </h2>
          <div>
            {[
              <>We believe in <em style={{ fontFamily: 'var(--brz-font-serif)', fontStyle: 'italic', fontWeight: 500 }}>results over rhetoric</em>. In dermatologist-formulated actives at concentrations that actually do the work.</>,
              <>We believe your skin should feel like it did <em style={{ fontFamily: 'var(--brz-font-serif)', fontStyle: 'italic', fontWeight: 500 }}>yesterday</em>, only better. That&apos;s the benchmark we test every formula against.</>,
              <>We don&apos;t do trend-chasing. We don&apos;t do fear-selling. We do real chemistry, real studies, and real honesty about what a bottle can and can&apos;t do.</>,
            ].map((p, i) => (
              <p
                key={i}
                style={{
                  fontFamily: 'var(--brz-font-display)',
                  fontWeight: 600,
                  fontSize: 'clamp(32px, 3.2vw, 48px)',
                  lineHeight: 1.15,
                  letterSpacing: '-0.015em',
                  margin: '0 0 40px',
                  color: i === 2 ? 'var(--brz-fg-2)' : undefined,
                }}
              >
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section style={{ background: '#0A0A0A', color: '#fff', padding: '120px 0' }}>
        <div className="wrap">
          <h2 style={{ fontFamily: 'var(--brz-font-display)', fontWeight: 600, fontSize: 56, letterSpacing: '-0.02em', margin: '0 0 72px', maxWidth: 720 }}>
            Three things we don&apos;t{' '}
            <em style={{ fontFamily: 'var(--brz-font-serif)', fontStyle: 'italic' }}>compromise</em>{' '}
            on.
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0,1fr))', gap: 40 }}>
            {PILLARS.map((p) => (
              <div key={p.n} style={{ borderTop: '1px solid rgba(255,255,255,0.2)', paddingTop: 32 }}>
                <div style={{ fontFamily: 'var(--brz-font-display)', fontWeight: 600, fontSize: 32, color: 'rgba(255,255,255,0.5)', marginBottom: 40 }}>
                  {p.n}
                </div>
                <h3 style={{ fontFamily: 'var(--brz-font-display)', fontWeight: 600, fontSize: 28, margin: '0 0 14px', letterSpacing: '-0.01em' }}>
                  {p.h}
                </h3>
                <p style={{ fontSize: 14, lineHeight: 1.6, color: 'rgba(255,255,255,0.65)', margin: 0, maxWidth: 320 }}>{p.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section style={{ padding: '120px 0', borderTop: '1px solid var(--brz-border-soft)' }}>
        <div className="wrap">
          <h2 style={{ fontFamily: 'var(--brz-font-display)', fontWeight: 600, fontSize: 56, letterSpacing: '-0.02em', margin: '0 0 60px', maxWidth: 720 }}>
            The people making{' '}
            <em style={{ fontFamily: 'var(--brz-font-serif)', fontStyle: 'italic' }}>the formulas</em>.
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0,1fr))', gap: 32 }}>
            {TEAM.map((t, i) => (
              <article key={t.name} style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ aspectRatio: '4/5', background: 'var(--brz-n-200)', marginBottom: 18, display: 'flex', alignItems: 'flex-end', padding: 24, color: 'var(--brz-fg-3)', fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 600 }}>
                  Portrait · 1.{i + 1}
                </div>
                <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--brz-fg-2)', marginBottom: 6 }}>{t.role}</div>
                <h3 style={{ fontFamily: 'var(--brz-font-display)', fontWeight: 600, fontSize: 22, margin: '0 0 6px', letterSpacing: '-0.01em' }}>{t.name}</h3>
                <p style={{ fontFamily: 'var(--brz-font-serif)', fontStyle: 'italic', fontSize: 14, color: 'var(--brz-n-600)', margin: 0, lineHeight: 1.5 }}>{t.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section style={{ padding: '120px 0', borderTop: '1px solid var(--brz-border-soft)', background: 'var(--brz-n-50)' }}>
        <div className="wrap">
          <h2 style={{ fontFamily: 'var(--brz-font-display)', fontWeight: 600, fontSize: 48, letterSpacing: '-0.02em', margin: '0 0 72px' }}>
            A short history.
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, minmax(0,1fr))', borderTop: '1px solid var(--brz-ink)' }}>
            {TIMELINE.map((t, i) => (
              <div key={t.year} style={{ padding: '32px 24px 40px', borderRight: i === TIMELINE.length - 1 ? 'none' : '1px solid var(--brz-border-soft)' }}>
                <div style={{ fontFamily: 'var(--brz-font-display)', fontSize: 36, fontWeight: 600, letterSpacing: '-0.02em', marginBottom: 20 }}>{t.year}</div>
                <h4 style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', margin: '0 0 8px' }}>{t.h}</h4>
                <p style={{ fontSize: 13, color: 'var(--brz-n-600)', lineHeight: 1.5, margin: 0 }}>{t.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Press */}
      <section style={{ padding: '100px 0', borderTop: '1px solid var(--brz-border-soft)' }}>
        <div className="wrap">
          <div style={{ textAlign: 'center', fontSize: 11, letterSpacing: '0.24em', textTransform: 'uppercase', color: 'var(--brz-fg-2)', fontWeight: 600, marginBottom: 48 }}>
            Featured In
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, minmax(0,1fr))', gap: 40, alignItems: 'center' }}>
            {['Vogue', 'Allure', 'The NYT', "Harper's Bazaar", 'Cultured'].map((p) => (
              <div key={p} style={{ fontFamily: 'var(--brz-font-serif)', fontStyle: 'italic', fontSize: 24, textAlign: 'center', color: 'var(--brz-fg-2)', letterSpacing: '-0.01em' }}>
                {p}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
