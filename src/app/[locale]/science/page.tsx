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
    path: '/science',
    title: 'Science & Ingredients',
    description:
      'Proven actives, honest concentrations, zero fillers. The full ingredient list, in plain language, with concentrations printed.',
  });
}

const ACTIVES = [
  { code: '01 · Retinoid', name: 'Retinal', em: '(the stable one)', claim: 'Accelerates cell turnover ~10× faster than retinol with less irritation. Our hero anti-aging active.', concen: '0.3%' },
  { code: '02 · Peptide', name: 'Copper Tripeptide-1', em: '(GHK-Cu)', claim: 'Stimulates collagen synthesis. Clinically proven to firm skin over 8 weeks of daily use.', concen: '2.0%' },
  { code: '03 · Vitamin B3', name: 'Niacinamide', em: '(not trace)', claim: 'Evens tone, reduces pore appearance, strengthens the barrier. We use it at efficacy levels.', concen: '5.0%' },
  { code: '04 · Plant retinoid', name: 'Bakuchiol', em: '(retinoid alt.)', claim: 'Gentle retinoid-like effects for sensitive or pregnant skin. Stacks well with retinal.', concen: '1.0%' },
  { code: '05 · Humectant', name: 'Hyaluronic Acid', em: '(3 MW)', claim: 'Three molecular weights for hydration at three skin depths. Plumps without sitting on top.', concen: '2.0%' },
  { code: '06 · Antioxidant', name: 'Vitamin E', em: '(Tocopherol)', claim: 'Neutralizes free radicals, stabilizes the formula, supports the barrier. In every product.', concen: '0.5%' },
];

const NEVERS = [
  { h: 'Synthetic fragrance', p: 'Nothing added for smell. Anywhere. Ever.' },
  { h: 'Parabens', p: 'We use phenoxyethanol within regulated limits instead.' },
  { h: 'Drying alcohols', p: 'No denat. No SD-40. Nothing that strips the barrier.' },
  { h: 'Sulfates', p: 'Not in cleansers, not in anything.' },
  { h: 'PEGs', p: 'Skipped entirely. There are better emulsifiers.' },
  { h: 'Mineral oil', p: 'Too occlusive. Doesn\u2019t earn its place.' },
  { h: 'Silicones (over 1%)', p: 'Light slip only. Never as a filler.' },
  { h: 'Animal testing', p: 'Leaping Bunny certified. No exceptions.' },
];

const PROCESS = [
  { n: '01', h: 'Research & formulation', p: 'Our team of cosmetic chemists works from clinical literature outward. Every active has to justify its concentration with peer-reviewed studies before it enters a formulation.', dur: '~ 6 months' },
  { n: '02', h: 'Lab prototyping', p: '40–60 iterations of each product in our Brooklyn lab. We test stability, pH, viscosity, and sensorial across humidity and temperature ranges.', dur: '~ 8 months' },
  { n: '03', h: 'Independent clinical', p: 'Third-party consumer studies with minimum 80 participants, run for 8 weeks. Dermatologist-graded and self-assessed. Results published in full.', dur: '~ 8 weeks' },
  { n: '04', h: 'Derm & safety review', p: 'Dr. Sam Okafor and two external dermatologists sign off on the clinical data, safety file, and label before production.', dur: '~ 3 weeks' },
  { n: '05', h: 'Small-batch production', p: 'Manufactured in FDA-registered facilities in the US. 6-week expiration dated, refrigerated shipping on actives.', dur: 'Ongoing' },
];

const STUDIES = [
  { eye: 'Study 01 · Firm & Lift Serum', h: '8-week firming & fine-line reduction', p: 'Independent consumer study with dermatologist grading. Participants applied nightly for 8 weeks with no additional active in their routine.', stats: [['84', 'participants'], ['28–64', 'age range'], ['96%', 'firmer skin'], ['89%', 'fewer lines']] },
  { eye: 'Study 02 · Overnight Cream', h: 'Barrier & hydration restoration', p: 'Trans-epidermal water loss (TEWL) measurements taken at week 0, 4, and 8. Applied as the final step of an evening routine.', stats: [['64', 'participants'], ['32–58', 'age range'], ['−42%', 'TEWL'], ['+61%', 'hydration']] },
  { eye: 'Study 03 · Facial Oil', h: 'Radiance & skin luminosity', p: 'Visual luminosity index (VLI) measured via standardized photography. Self-reported glow rated on a 1–10 scale.', stats: [['72', 'participants'], ['25–50', 'age range'], ['+38%', 'luminosity'], ['9.1/10', 'glow score']] },
  { eye: 'Study 04 · Gentle Cleanser', h: 'Cleansing without stripping', p: 'Skin pH measured before and 20 minutes after cleansing. Compared against 3 leading competitor cleansers.', stats: [['50', 'participants'], ['All', 'skin types'], ['±0.3', 'pH shift'], ['100%', 'no tightness']] },
];

export default async function SciencePage({
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
          { name: 'Science', path: '/science' },
        ])}
      />

      {/* Hero */}
      <section style={{ padding: '100px 0 80px', borderBottom: '1px solid var(--brz-border-soft)' }}>
        <div className="wrap">
          <div className="eyebrow">Science &amp; Ingredients</div>
          <h1 style={{ fontFamily: 'var(--brz-font-display)', fontWeight: 600, fontSize: 'clamp(64px, 8vw, 112px)', lineHeight: 0.98, letterSpacing: '-0.03em', margin: '20px 0 32px', maxWidth: 1100 }}>
            Proven <em style={{ fontFamily: 'var(--brz-font-serif)', fontStyle: 'italic' }}>actives</em>. Honest{' '}
            <em style={{ fontFamily: 'var(--brz-font-serif)', fontStyle: 'italic' }}>concentrations</em>. Zero fillers.
          </h1>
          <p style={{ fontFamily: 'var(--brz-font-serif)', fontStyle: 'italic', fontSize: 22, lineHeight: 1.45, color: 'var(--brz-n-700)', maxWidth: 680 }}>
            Everything we put in a bottle is there because the clinical data says so. Here&apos;s the full list, in plain language, with concentrations printed.
          </p>
        </div>
      </section>

      {/* Hero actives */}
      <section style={{ padding: '100px 0', borderBottom: '1px solid var(--brz-border-soft)' }}>
        <div className="wrap">
          <h2 style={{ fontFamily: 'var(--brz-font-display)', fontWeight: 600, fontSize: 48, letterSpacing: '-0.02em', margin: '0 0 16px' }}>
            Our <em style={{ fontFamily: 'var(--brz-font-serif)', fontStyle: 'italic' }}>hero</em> actives.
          </h2>
          <p style={{ fontFamily: 'var(--brz-font-serif)', fontStyle: 'italic', color: 'var(--brz-fg-2)', fontSize: 17, marginBottom: 48, maxWidth: 560 }}>
            Six ingredients do most of the work across the Brizion line. Here&apos;s what each does, and how much is in the bottle.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0,1fr))', borderTop: '1px solid var(--brz-ink)' }}>
            {ACTIVES.map((a, i) => (
              <div
                key={a.code}
                style={{
                  padding: '32px 28px 40px',
                  borderRight: i % 3 === 2 ? 'none' : '1px solid var(--brz-border-soft)',
                  borderBottom: i >= 3 ? '1px solid var(--brz-ink)' : '1px solid var(--brz-border-soft)',
                  minHeight: 260,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--brz-fg-3)' }}>
                  {a.code}
                </div>
                <div>
                  <h3 style={{ fontFamily: 'var(--brz-font-display)', fontWeight: 600, fontSize: 28, margin: '14px 0 8px', letterSpacing: '-0.01em' }}>
                    {a.name}{' '}
                    <em style={{ fontFamily: 'var(--brz-font-serif)', fontStyle: 'italic', color: 'var(--brz-fg-2)', fontSize: 18, fontWeight: 400, display: 'block', marginTop: 2 }}>
                      {a.em}
                    </em>
                  </h3>
                  <p style={{ fontSize: 13, color: 'var(--brz-n-600)', lineHeight: 1.55, margin: '0 0 18px' }}>
                    {a.claim}
                  </p>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: 14, borderTop: '1px solid var(--brz-border-soft)', fontSize: 11, letterSpacing: '0.1em', color: 'var(--brz-fg-2)' }}>
                  <span>Concentration</span>
                  <b style={{ color: 'var(--brz-ink)', fontFamily: 'ui-monospace, Menlo, monospace', letterSpacing: 0 }}>{a.concen}</b>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Never */}
      <section style={{ padding: '100px 0', background: '#0A0A0A', color: '#fff' }}>
        <div className="wrap">
          <h2 style={{ fontFamily: 'var(--brz-font-display)', fontWeight: 600, fontSize: 56, letterSpacing: '-0.02em', margin: '0 0 48px', maxWidth: 720 }}>
            What you&apos;ll <em style={{ fontFamily: 'var(--brz-font-serif)', fontStyle: 'italic' }}>never</em> find in a Brizion bottle.
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, minmax(0,1fr))', gap: 1, background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.15)' }}>
            {NEVERS.map((n) => (
              <div key={n.h} style={{ background: '#0A0A0A', padding: '28px 22px' }}>
                <div style={{ fontSize: 32, color: 'rgba(255,255,255,0.35)', marginBottom: 14, fontWeight: 300, lineHeight: 1 }}>×</div>
                <h4 style={{ fontFamily: 'var(--brz-font-display)', fontWeight: 600, fontSize: 18, margin: '0 0 6px', letterSpacing: '-0.01em' }}>{n.h}</h4>
                <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.55)', margin: 0, lineHeight: 1.5 }}>{n.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section style={{ padding: '120px 0', borderBottom: '1px solid var(--brz-border-soft)' }}>
        <div className="wrap">
          <h2 style={{ fontFamily: 'var(--brz-font-display)', fontWeight: 600, fontSize: 56, letterSpacing: '-0.02em', margin: '0 0 72px' }}>
            How every product gets <em style={{ fontFamily: 'var(--brz-font-serif)', fontStyle: 'italic' }}>made</em>.
          </h2>
          <div style={{ borderTop: '1px solid var(--brz-ink)' }}>
            {PROCESS.map((p, i) => (
              <div
                key={p.n}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '60px 220px 1fr 200px',
                  gap: 32,
                  padding: '32px 0',
                  borderBottom: i === PROCESS.length - 1 ? '1px solid var(--brz-ink)' : '1px solid var(--brz-border-soft)',
                  alignItems: 'start',
                }}
              >
                <div style={{ fontFamily: 'ui-monospace, Menlo, monospace', fontSize: 12, color: 'var(--brz-fg-3)' }}>{p.n}</div>
                <h3 style={{ fontFamily: 'var(--brz-font-display)', fontWeight: 600, fontSize: 24, margin: 0, letterSpacing: '-0.01em' }}>{p.h}</h3>
                <p style={{ fontSize: 14, lineHeight: 1.6, color: 'var(--brz-n-600)', margin: 0, maxWidth: 480 }}>{p.p}</p>
                <div style={{ fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--brz-fg-2)', textAlign: 'right', fontWeight: 600 }}>{p.dur}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Studies */}
      <section style={{ padding: '120px 0', background: 'var(--brz-n-50)' }}>
        <div className="wrap">
          <h2 style={{ fontFamily: 'var(--brz-font-display)', fontWeight: 600, fontSize: 48, letterSpacing: '-0.02em', margin: '0 0 60px' }}>
            Our published studies.
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0,1fr))', gap: 24 }}>
            {STUDIES.map((s) => (
              <article key={s.eye} style={{ background: '#fff', border: '1px solid var(--brz-border-soft)', padding: 32 }}>
                <div style={{ fontSize: 10, letterSpacing: '0.22em', textTransform: 'uppercase', fontWeight: 700, color: 'var(--brz-fg-2)', marginBottom: 16 }}>
                  {s.eye}
                </div>
                <h3 style={{ fontFamily: 'var(--brz-font-display)', fontWeight: 600, fontSize: 24, margin: '0 0 14px', letterSpacing: '-0.01em' }}>{s.h}</h3>
                <p style={{ fontSize: 13, color: 'var(--brz-n-600)', margin: '0 0 24px', lineHeight: 1.55 }}>{s.p}</p>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, minmax(0,1fr))', gap: 14, borderTop: '1px solid var(--brz-border-soft)', paddingTop: 18 }}>
                  {s.stats.map(([num, label]) => (
                    <div key={label} style={{ fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--brz-fg-2)', fontWeight: 600 }}>
                      <b style={{ display: 'block', fontFamily: 'var(--brz-font-display)', fontWeight: 600, fontSize: 22, letterSpacing: '-0.01em', color: 'var(--brz-ink)', marginBottom: 4 }}>
                        {num}
                      </b>
                      {label}
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
