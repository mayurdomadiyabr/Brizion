export default function Loading() {
  return (
    <div
      role="status"
      aria-busy="true"
      style={{
        minHeight: '60vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'var(--brz-font-sans)',
        fontSize: 11,
        letterSpacing: '0.28em',
        textTransform: 'uppercase',
        color: 'var(--brz-fg-2)',
      }}
    >
      Loading…
    </div>
  );
}
