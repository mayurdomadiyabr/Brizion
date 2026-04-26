import Link from 'next/link';

export default function NotFound() {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        padding: 48,
        fontFamily: 'var(--brz-font-sans)',
        textAlign: 'center',
        flexDirection: 'column',
        gap: 16,
      }}
    >
        <div
          style={{
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: '0.28em',
            textTransform: 'uppercase',
          }}
        >
          404
        </div>
        <h1
          style={{
            fontFamily: 'var(--brz-font-display)',
            fontSize: 48,
            margin: 0,
          }}
        >
          Page not found.
        </h1>
        <p style={{ maxWidth: 420, color: 'var(--brz-fg-2)' }}>
          The page you were looking for has moved or doesn&apos;t exist.
        </p>
        <Link
          href="/us"
          style={{
            background: 'var(--brz-ink)',
            color: '#fff',
            padding: '14px 24px',
            fontSize: 12,
            fontWeight: 700,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            textDecoration: 'none',
            borderRadius: 999,
          }}
        >
        Back to home
      </Link>
    </div>
  );
}
