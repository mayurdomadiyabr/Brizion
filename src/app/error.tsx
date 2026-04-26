'use client';

import { useEffect } from 'react';

export default function GlobalError({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => {
    // eslint-disable-next-line no-console
    console.error('App error:', error);
  }, [error]);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '60vh',
        padding: 48,
        gap: 16,
        textAlign: 'center',
      }}
    >
      <div
        style={{
          fontSize: 11,
          fontWeight: 700,
          letterSpacing: '0.28em',
          textTransform: 'uppercase',
          color: 'var(--brz-fg-2)',
        }}
      >
        Something went wrong
      </div>
      <h1
        style={{
          fontFamily: 'var(--brz-font-display)',
          fontWeight: 600,
          fontSize: 48,
          letterSpacing: '-0.02em',
          margin: 0,
        }}
      >
        We hit a snag.
      </h1>
      <p style={{ maxWidth: 480, color: 'var(--brz-fg-2)' }}>
        The page couldn&apos;t finish loading. Try again, or head back home.
      </p>
      <div style={{ display: 'flex', gap: 12 }}>
        <button onClick={reset} className="btn-primary">
          Try again
        </button>
        <a href="/" style={{ textDecoration: 'none' }}>
          <button className="btn-outline">Home</button>
        </a>
      </div>
    </div>
  );
}
