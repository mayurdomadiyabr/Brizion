import Link from 'next/link';
import type { Locale, CountryConfig } from '@/lib/locales';

export function Footer({
  locale,
  country,
}: {
  locale: Locale;
  country: CountryConfig;
}) {
  const base = `/${locale}`;
  const col = (title: string, items: { href: string; label: string }[]) => (
    <div>
      <div
        style={{
          fontFamily: 'var(--brz-font-sans)',
          fontSize: 11,
          fontWeight: 600,
          letterSpacing: '0.22em',
          textTransform: 'uppercase',
          color: 'rgba(255,255,255,0.5)',
          marginBottom: 18,
        }}
      >
        {title}
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        {items.map((it) => (
          <Link
            key={it.label}
            href={it.href}
            style={{
              color: '#fff',
              textDecoration: 'none',
              fontFamily: 'var(--brz-font-sans)',
              fontSize: 14,
              opacity: 0.85,
            }}
          >
            {it.label}
          </Link>
        ))}
      </div>
    </div>
  );

  return (
    <footer
      style={{
        background: 'var(--brz-ink)',
        color: '#fff',
        padding: '96px 48px 48px',
      }}
    >
      <div style={{ maxWidth: 1320, margin: '0 auto' }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            paddingBottom: 64,
            borderBottom: '1px solid rgba(255,255,255,0.14)',
            flexWrap: 'wrap',
            gap: 32,
          }}
        >
          <div style={{ maxWidth: 420 }}>
            <div
              style={{
                fontFamily: 'var(--brz-font-display)',
                fontSize: 42,
                letterSpacing: '0.2em',
                fontWeight: 600,
              }}
            >
              BRIZION
            </div>
            <p
              style={{
                fontFamily: 'var(--brz-font-serif)',
                fontSize: 20,
                fontStyle: 'italic',
                color: 'rgba(255,255,255,0.78)',
                marginTop: 16,
                lineHeight: 1.4,
              }}
            >
              Skincare that meets you where you are — clinically proven, dermatologist tested,
              quietly confident.
            </p>
            <p
              style={{
                fontFamily: 'var(--brz-font-sans)',
                fontSize: 12,
                color: 'rgba(255,255,255,0.55)',
                marginTop: 16,
                letterSpacing: '0.08em',
              }}
            >
              Shipping to {country.countryName} · Pricing in {country.currency} ·{' '}
              {country.taxLabel}
            </p>
          </div>
          <form style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
            <input
              placeholder="Enter your email"
              type="email"
              aria-label="Email address for newsletter"
              style={{
                background: 'transparent',
                border: '1px solid rgba(255,255,255,0.3)',
                color: '#fff',
                padding: '14px 18px',
                borderRadius: 999,
                fontFamily: 'var(--brz-font-sans)',
                fontSize: 14,
                width: 260,
                outline: 'none',
              }}
            />
            <button
              type="submit"
              style={{
                background: '#fff',
                color: 'var(--brz-ink)',
                border: 'none',
                padding: '14px 24px',
                borderRadius: 999,
                fontFamily: 'var(--brz-font-sans)',
                fontWeight: 600,
                fontSize: 13,
                cursor: 'pointer',
              }}
            >
              Subscribe
            </button>
          </form>
        </div>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
            gap: 48,
            paddingTop: 56,
            paddingBottom: 56,
          }}
        >
          {col('Shop', [
            { href: `${base}/shop`, label: 'Shop All' },
            { href: `${base}/shop`, label: 'Best Sellers' },
            { href: `${base}/shop`, label: 'Face' },
            { href: `${base}/shop`, label: 'Body' },
          ])}
          {col('Discover', [
            { href: `${base}/about`, label: 'About' },
            { href: `${base}/science`, label: 'Science' },
            { href: `${base}/reviews`, label: 'Reviews' },
            { href: `${base}/journal`, label: 'Journal' },
          ])}
          {col('Support', [
            { href: `${base}/contact`, label: 'Contact' },
            { href: `${base}/help`, label: 'Help Center' },
            { href: `${base}/shipping`, label: 'Shipping' },
            { href: `${base}/returns`, label: 'Returns' },
          ])}
          {col('Follow', [
            { href: 'https://instagram.com/brizion', label: 'Instagram' },
            { href: 'https://tiktok.com/@brizion', label: 'TikTok' },
            { href: 'https://youtube.com/@brizion', label: 'YouTube' },
          ])}
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            fontFamily: 'var(--brz-font-sans)',
            fontSize: 12,
            color: 'rgba(255,255,255,0.5)',
            paddingTop: 32,
            borderTop: '1px solid rgba(255,255,255,0.14)',
            flexWrap: 'wrap',
            gap: 12,
          }}
        >
          <div>© {new Date().getFullYear()} BRIZION · {country.countryName}</div>
          <div style={{ display: 'flex', gap: 24 }}>
            <Link href={`${base}/privacy`}>Privacy</Link>
            <Link href={`${base}/terms`}>Terms</Link>
            <Link href={`${base}/accessibility`}>Accessibility</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
