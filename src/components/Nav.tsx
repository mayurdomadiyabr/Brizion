import Link from 'next/link';
import { Search, User, ShoppingBag } from 'lucide-react';
import type { Locale } from '@/lib/locales';
import { CountrySelector } from './CountrySelector';

export function Nav({ locale }: { locale: Locale }) {
  const base = `/${locale}`;
  const link = (href: string, label: string) => (
    <Link
      href={`${base}${href}`}
      style={{
        fontFamily: 'var(--brz-font-sans)',
        fontSize: 13,
        color: 'var(--brz-fg-1)',
        textDecoration: 'none',
        fontWeight: 500,
      }}
    >
      {label}
    </Link>
  );

  return (
    <nav
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 40,
        background: 'rgba(255,255,255,0.92)',
        backdropFilter: 'blur(14px)',
        WebkitBackdropFilter: 'blur(14px)',
        borderBottom: '1px solid var(--brz-border-hair)',
        padding: '18px 48px',
        display: 'grid',
        gridTemplateColumns: '1fr auto 1fr',
        alignItems: 'center',
        gap: 32,
      }}
    >
      <div style={{ display: 'flex', gap: 28, flexWrap: 'wrap' }}>
        {link('/shop', 'Shop')}
        {link('/science', 'Science')}
        {link('/reviews', 'Reviews')}
        {link('/about', 'About')}
      </div>
      <Link
        href={base}
        style={{
          fontFamily: 'var(--brz-font-display)',
          fontWeight: 600,
          letterSpacing: '0.28em',
          fontSize: 26,
          color: 'var(--brz-ink)',
          textDecoration: 'none',
        }}
      >
        BRIZION
      </Link>
      <div
        style={{
          display: 'flex',
          gap: 18,
          justifyContent: 'flex-end',
          alignItems: 'center',
        }}
      >
        <CountrySelector locale={locale} />
        <button aria-label="Search" style={iconBtn}>
          <Search size={18} strokeWidth={1.5} />
        </button>
        <Link href={`${base}/account`} aria-label="Account" style={iconBtn}>
          <User size={18} strokeWidth={1.5} />
        </Link>
        <Link
          href={`${base}/cart`}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 6,
            fontSize: 13,
            color: 'var(--brz-ink)',
            textDecoration: 'none',
          }}
        >
          <ShoppingBag size={18} strokeWidth={1.5} />
          <span>Cart · 0</span>
        </Link>
      </div>
    </nav>
  );
}

const iconBtn: React.CSSProperties = {
  background: 'transparent',
  border: 'none',
  padding: 0,
  cursor: 'pointer',
  color: 'var(--brz-ink)',
  display: 'flex',
  alignItems: 'center',
};
