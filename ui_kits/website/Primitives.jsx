/* global React */
const { useState } = React;

// ============ Reusable primitives ============

function Eyebrow({ children, style }) {
  return <div className="brz-eyebrow" style={{
    fontFamily: "var(--brz-font-sans)",
    fontWeight: 600,
    fontSize: 12,
    letterSpacing: "0.22em",
    textTransform: "uppercase",
    color: "var(--brz-fg-2)",
    ...style
  }}>{children}</div>;
}

function Button({ children, variant = "primary", onClick, style, size = "md" }) {
  const padding = size === "lg" ? "16px 34px" : size === "sm" ? "10px 18px" : "13px 26px";
  const fontSize = size === "lg" ? 15 : size === "sm" ? 12 : 14;
  const base = {
    fontFamily: "var(--brz-font-sans)",
    fontWeight: 600,
    fontSize,
    padding,
    borderRadius: 999,
    cursor: "pointer",
    border: "none",
    letterSpacing: "0.02em",
    transition: "all var(--brz-dur-base) var(--brz-ease)",
    whiteSpace: "nowrap",
    ...style,
  };
  if (variant === "primary") Object.assign(base, { background: "var(--brz-ink)", color: "#fff" });
  if (variant === "outline") Object.assign(base, { background: "transparent", color: "var(--brz-ink)", border: "1.5px solid var(--brz-ink)", padding: `calc(${padding.split(" ")[0]} - 1.5px) calc(${padding.split(" ")[1]} - 1.5px)` });
  if (variant === "soft") Object.assign(base, { background: "var(--brz-lilac-100)", color: "var(--brz-ink)" });
  return <button onClick={onClick} style={base} onMouseOver={e=>e.currentTarget.style.opacity=0.88} onMouseOut={e=>e.currentTarget.style.opacity=1}>{children}</button>;
}

function Badge({ children, tone = "ink" }) {
  const tones = {
    ink: { bg: "var(--brz-ink)", fg: "#fff" },
    lilac: { bg: "var(--brz-lilac-100)", fg: "var(--brz-lilac-600)" },
    blush: { bg: "var(--brz-blush-100)", fg: "#7A3F2E" },
    sage:  { bg: "var(--brz-sage-100)", fg: "#3E5332" },
    paper: { bg: "#fff", fg: "var(--brz-ink)" },
  };
  const t = tones[tone];
  return <span style={{
    display: "inline-flex", alignItems: "center", gap: 6,
    fontFamily: "var(--brz-font-sans)", fontSize: 10, fontWeight: 600,
    background: t.bg, color: t.fg,
    padding: "5px 11px", borderRadius: 999,
    letterSpacing: "0.18em", textTransform: "uppercase",
    border: tone === "paper" ? "1px solid var(--brz-border-hair)" : "none",
  }}>{children}</span>;
}

function Stars({ count = 5, value = 5 }) {
  return (
    <span style={{ color: "var(--brz-sand-400)", letterSpacing: "0.15em", fontSize: 13 }}>
      {Array.from({ length: count }).map((_,i) => i < value ? "★" : "☆").join("")}
    </span>
  );
}

// ============ Icons (Lucide-style, 1.5px stroke) ============

const Icon = {
  search: (s=20) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>,
  bag:    (s=20) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 7h16l-1.5 13.5a1.5 1.5 0 0 1-1.5 1.5H7a1.5 1.5 0 0 1-1.5-1.5L4 7z"/><path d="M9 7V5a3 3 0 1 1 6 0v2"/></svg>,
  user:   (s=20) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 4-7 8-7s8 3 8 7"/></svg>,
  check:  (s=20) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>,
  chev:   (s=20, dir="r") => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{transform:dir==="l"?"rotate(180deg)":"none"}}><path d="m9 18 6-6-6-6"/></svg>,
  close:  (s=20) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18M6 6l12 12"/></svg>,
  plus:   (s=16) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M5 12h14"/></svg>,
  minus:  (s=16) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/></svg>,
  leaf:   (s=20) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M11 20A7 7 0 0 1 4 13c0-5 4-9 9-9 1 0 3 .2 4 1 1 4-1 8-5 10-3 1.5-5 4-5 5"/></svg>,
  sparkle:(s=20) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M5.6 18.4l2.8-2.8M15.6 8.4l2.8-2.8"/></svg>,
  flask:  (s=20) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 3h6M10 3v6L5 18a2 2 0 0 0 2 3h10a2 2 0 0 0 2-3l-5-9V3"/></svg>,
};

Object.assign(window, { Eyebrow, Button, Badge, Stars, Icon });
