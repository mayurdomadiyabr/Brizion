'use client';

import { useState, useRef, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { COUNTRIES, LOCALES, type Locale } from '@/lib/locales';

export function CountrySelector({ locale }: { locale: Locale }) {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  const change = (next: Locale) => {
    document.cookie = `brz-locale=${next}; path=/; max-age=${60 * 60 * 24 * 365}`;
    const segments = pathname.split('/').filter(Boolean);
    if ((LOCALES as readonly string[]).includes(segments[0])) {
      segments[0] = next;
    } else {
      segments.unshift(next);
    }
    router.push('/' + segments.join('/'));
    setOpen(false);
  };

  const current = COUNTRIES[locale];

  return (
    <div ref={ref} style={{ position: 'relative' }}>
      <button
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="listbox"
        aria-expanded={open}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          background: 'transparent',
          border: '1px solid var(--brz-border-soft)',
          borderRadius: 999,
          padding: '6px 14px',
          cursor: 'pointer',
          fontFamily: 'var(--brz-font-sans)',
          fontSize: 12,
          letterSpacing: '0.08em',
          color: 'var(--brz-ink)',
        }}
      >
        <span style={{ fontWeight: 700 }}>{current.flag}</span>
        <span>{current.currency}</span>
        <span style={{ opacity: 0.5 }}>▾</span>
      </button>
      {open && (
        <ul
          role="listbox"
          style={{
            position: 'absolute',
            right: 0,
            top: 'calc(100% + 8px)',
            background: '#fff',
            border: '1px solid var(--brz-border-soft)',
            borderRadius: 8,
            boxShadow: 'var(--brz-shadow-md)',
            listStyle: 'none',
            padding: 4,
            margin: 0,
            minWidth: 220,
            zIndex: 50,
          }}
        >
          {LOCALES.map((l) => {
            const c = COUNTRIES[l];
            const active = l === locale;
            return (
              <li key={l}>
                <button
                  onClick={() => change(l)}
                  style={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    background: active ? 'var(--brz-n-50)' : 'transparent',
                    border: 'none',
                    padding: '10px 14px',
                    cursor: 'pointer',
                    fontFamily: 'var(--brz-font-sans)',
                    fontSize: 13,
                    color: 'var(--brz-ink)',
                    textAlign: 'left',
                    borderRadius: 6,
                  }}
                >
                  <span style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
                    <span style={{ fontWeight: 700, letterSpacing: '0.1em' }}>{c.flag}</span>
                    <span>{c.countryName}</span>
                  </span>
                  <span style={{ fontSize: 11, color: 'var(--brz-fg-3)', letterSpacing: '0.08em' }}>
                    {c.currency}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
