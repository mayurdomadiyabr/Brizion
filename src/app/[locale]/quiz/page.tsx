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
    path: '/quiz',
    title: 'The Brizion skin consultation',
    description:
      'Five quick questions. A personalised, dermatologist-built routine in under two minutes. No email required to see results.',
  });
}

const OPTIONS = [
  {
    code: 'A',
    label: 'Tight & flaky',
    sub: 'Feels dry after cleansing, sometimes peels on cheeks or forehead',
  },
  {
    code: 'B',
    label: 'Dull & uneven',
    sub: 'Looks tired, tone is patchy, texture isn’t as smooth as it used to be',
    selected: true,
  },
  {
    code: 'C',
    label: 'Congested & shiny',
    sub: 'Oily by midday, occasional breakouts, visible pores on T-zone',
  },
  {
    code: 'D',
    label: 'Reactive & red',
    sub: 'Stings with new products, flushes easily, visible redness on cheeks',
  },
  {
    code: 'E',
    label: 'Fine lines appearing',
    sub: 'Starting to see lines around eyes, forehead, mouth — skin feels less firm',
  },
];

export default async function QuizPage({
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
          { name: 'Quiz', path: '/quiz' },
        ])}
      />
      <section
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          minHeight: 'calc(100vh - 100px)',
        }}
      >
        <aside
          style={{
            background: '#0A0A0A',
            color: '#fff',
            padding: '72px 64px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <div>
            <div
              style={{
                fontSize: 11,
                letterSpacing: '0.24em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.5)',
                fontWeight: 600,
                marginBottom: 16,
              }}
            >
              Step 2 of 5
            </div>
            <div
              style={{
                height: 2,
                background: 'rgba(255,255,255,0.15)',
                marginBottom: 56,
                position: 'relative',
              }}
            >
              <span
                style={{
                  position: 'absolute',
                  inset: '0 60% 0 0',
                  background: '#fff',
                }}
              />
            </div>
            <h1
              style={{
                fontFamily: 'var(--brz-font-display)',
                fontWeight: 600,
                fontSize: 64,
                lineHeight: 0.98,
                letterSpacing: '-0.03em',
                margin: '0 0 24px',
              }}
            >
              Let&apos;s build a routine around{' '}
              <em style={{ fontFamily: 'var(--brz-font-serif)', fontStyle: 'italic' }}>
                your skin
              </em>
              .
            </h1>
            <p
              style={{
                fontFamily: 'var(--brz-font-serif)',
                fontStyle: 'italic',
                fontSize: 20,
                color: 'rgba(255,255,255,0.7)',
                lineHeight: 1.5,
                maxWidth: 440,
              }}
            >
              Five quick questions. No email required to see your results. Your answers stay
              private.
            </p>
          </div>
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.15)', paddingTop: 24 }}>
            <div
              style={{
                fontSize: 10,
                letterSpacing: '0.24em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.5)',
                fontWeight: 700,
                marginBottom: 10,
              }}
            >
              Why we ask
            </div>
            <p
              style={{
                fontFamily: 'var(--brz-font-serif)',
                fontStyle: 'italic',
                fontSize: 14,
                color: 'rgba(255,255,255,0.65)',
                margin: 0,
                lineHeight: 1.5,
                maxWidth: 360,
              }}
            >
              Your routine is a function of your skin&apos;s starting point, your concern, and how
              much time you actually have. We want to get all three right.
            </p>
          </div>
        </aside>

        <div style={{ padding: '72px' }}>
          <div
            style={{
              fontSize: 11,
              letterSpacing: '0.24em',
              textTransform: 'uppercase',
              color: 'var(--brz-fg-2)',
              fontWeight: 700,
              marginBottom: 32,
            }}
          >
            Question <b style={{ color: 'var(--brz-ink)' }}>02 / 05</b>
          </div>
          <h2
            style={{
              fontFamily: 'var(--brz-font-display)',
              fontWeight: 600,
              fontSize: 44,
              letterSpacing: '-0.02em',
              lineHeight: 1.08,
              margin: '0 0 14px',
              maxWidth: 580,
            }}
          >
            What&apos;s your skin{' '}
            <em style={{ fontFamily: 'var(--brz-font-serif)', fontStyle: 'italic' }}>
              currently
            </em>{' '}
            doing?
          </h2>
          <p
            style={{
              fontFamily: 'var(--brz-font-serif)',
              fontStyle: 'italic',
              fontSize: 16,
              color: 'var(--brz-fg-2)',
              margin: '0 0 44px',
              maxWidth: 480,
              lineHeight: 1.5,
            }}
          >
            Pick the one that best describes how your skin feels most days. If you&apos;re between
            two, pick the more common one.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 48 }}>
            {OPTIONS.map((o) => (
              <div
                key={o.code}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '22px 24px',
                  border: o.selected
                    ? '1.5px solid var(--brz-ink)'
                    : '1px solid var(--brz-border-soft)',
                  background: o.selected ? 'var(--brz-n-50)' : '#fff',
                }}
              >
                <div style={{ display: 'flex', gap: 18, alignItems: 'center' }}>
                  <span
                    style={{
                      width: 22,
                      height: 22,
                      borderRadius: '50%',
                      border: o.selected
                        ? '1.5px solid var(--brz-ink)'
                        : '1.5px solid #C8C8C8',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {o.selected && (
                      <span
                        style={{
                          width: 10,
                          height: 10,
                          background: 'var(--brz-ink)',
                          borderRadius: '50%',
                        }}
                      />
                    )}
                  </span>
                  <div style={{ fontSize: 16, fontWeight: 600 }}>
                    {o.label}
                    <small
                      style={{
                        display: 'block',
                        fontFamily: 'var(--brz-font-serif)',
                        fontStyle: 'italic',
                        fontWeight: 400,
                        fontSize: 13,
                        color: 'var(--brz-fg-2)',
                        marginTop: 3,
                      }}
                    >
                      {o.sub}
                    </small>
                  </div>
                </div>
                <span
                  style={{
                    fontFamily: 'ui-monospace, Menlo, monospace',
                    fontSize: 11,
                    color: 'var(--brz-fg-3)',
                  }}
                >
                  {o.code}
                </span>
              </div>
            ))}
          </div>

          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingTop: 28,
              borderTop: '1px solid var(--brz-border-soft)',
            }}
          >
            <span
              style={{
                fontSize: 11,
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: 'var(--brz-fg-2)',
                fontWeight: 600,
                cursor: 'pointer',
              }}
            >
              ← Back
            </span>
            <button className="btn-primary">Continue →</button>
          </div>
        </div>
      </section>
    </>
  );
}
