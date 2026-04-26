/* global React, Icon, Button */
const { useState } = React;

function AnnouncementBar() {
  return (
    <div style={{
      background: "var(--brz-ink)", color: "#fff",
      textAlign: "center", padding: "10px 16px",
      fontFamily: "var(--brz-font-sans)", fontSize: 12, letterSpacing: "0.18em",
      textTransform: "uppercase", fontWeight: 500,
    }}>
      Free shipping on orders $49+ &nbsp;·&nbsp; 60-day money-back guarantee
    </div>
  );
}

function Nav({ cartCount, onCartOpen, onNavigate, route }) {
  const link = (key, label) => (
    <a onClick={() => onNavigate(key)} style={{
      fontFamily: "var(--brz-font-sans)", fontSize: 13,
      color: "var(--brz-fg-1)", textDecoration: "none",
      cursor: "pointer", fontWeight: 500,
      borderBottom: route === key ? "1.5px solid var(--brz-ink)" : "1.5px solid transparent",
      paddingBottom: 2,
    }}>{label}</a>
  );
  return (
    <>
      <AnnouncementBar />
      <nav style={{
        position: "sticky", top: 0, zIndex: 40,
        background: "rgba(253,250,246,0.9)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        borderBottom: "1px solid var(--brz-border-hair)",
        padding: "18px 48px",
        display: "grid", gridTemplateColumns: "1fr auto 1fr",
        alignItems: "center", gap: 32,
      }}>
        <div style={{ display: "flex", gap: 28 }}>
          {link("home", "Best Sellers")}
          {link("pdp", "Face")}
          {link("plp", "Body")}
          {link("home", "Bundles")}
          {link("about", "About")}
        </div>
        <a onClick={() => onNavigate("home")} style={{
          fontFamily: "var(--brz-font-display)", fontWeight: 500,
          letterSpacing: "0.28em", fontSize: 26, color: "var(--brz-ink)",
          textDecoration: "none", cursor: "pointer",
        }}>BRIZION</a>
        <div style={{ display: "flex", gap: 22, justifyContent: "flex-end", alignItems: "center" }}>
          <span style={{ cursor: "pointer", display: "flex", alignItems: "center", gap: 6, fontFamily: "var(--brz-font-sans)", fontSize: 13 }}>{Icon.search(18)} Search</span>
          <span style={{ cursor: "pointer", display: "flex", alignItems: "center", gap: 6, fontFamily: "var(--brz-font-sans)", fontSize: 13 }}>{Icon.user(18)}</span>
          <span onClick={onCartOpen} style={{ cursor: "pointer", display: "flex", alignItems: "center", gap: 6, fontFamily: "var(--brz-font-sans)", fontSize: 13 }}>
            {Icon.bag(18)} <span>Cart · {cartCount}</span>
          </span>
        </div>
      </nav>
    </>
  );
}

function Footer() {
  const col = (title, items) => (
    <div>
      <div style={{
        fontFamily: "var(--brz-font-sans)", fontSize: 11, fontWeight: 600,
        letterSpacing: "0.22em", textTransform: "uppercase",
        color: "rgba(255,255,255,0.5)", marginBottom: 18,
      }}>{title}</div>
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        {items.map(it => (
          <a key={it} style={{
            color: "#fff", textDecoration: "none", fontFamily: "var(--brz-font-sans)",
            fontSize: 14, opacity: 0.85, cursor: "pointer",
          }}>{it}</a>
        ))}
      </div>
    </div>
  );
  return (
    <footer style={{ background: "var(--brz-ink)", color: "#fff", padding: "96px 48px 48px" }}>
      <div style={{ maxWidth: 1320, margin: "0 auto" }}>
        <div style={{
          display: "flex", justifyContent: "space-between", alignItems: "flex-start",
          paddingBottom: 64, borderBottom: "1px solid rgba(255,255,255,0.14)",
        }}>
          <div style={{ maxWidth: 420 }}>
            <div style={{ fontFamily: "var(--brz-font-display)", fontSize: 42, letterSpacing: "0.2em", fontWeight: 500 }}>BRIZION</div>
            <p style={{ fontFamily: "var(--brz-font-serif)", fontSize: 20, fontStyle: "italic", color: "rgba(255,255,255,0.78)", marginTop: 16, lineHeight: 1.4 }}>
              Skincare that meets you where you are — clinically proven, dermatologist tested, quietly confident.
            </p>
          </div>
          <form style={{ display: "flex", gap: 10, alignItems: "center" }} onSubmit={e => e.preventDefault()}>
            <input placeholder="Enter your email" style={{
              background: "transparent", border: "1px solid rgba(255,255,255,0.3)", color: "#fff",
              padding: "14px 18px", borderRadius: 999, fontFamily: "var(--brz-font-sans)", fontSize: 14,
              width: 260, outline: "none",
            }} />
            <button style={{
              background: "#fff", color: "var(--brz-ink)", border: "none",
              padding: "14px 24px", borderRadius: 999, fontFamily: "var(--brz-font-sans)",
              fontWeight: 600, fontSize: 13, cursor: "pointer", letterSpacing: "0.02em",
            }}>Subscribe</button>
          </form>
        </div>
        <div style={{
          display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 48,
          paddingTop: 56, paddingBottom: 56,
        }}>
          {col("Shop",    ["Shop All", "Best Sellers", "Face", "Body", "Bundles"])}
          {col("Discover",["About", "Press", "Reviews", "Blog"])}
          {col("Support", ["Contact", "Help Center", "Shipping", "Returns"])}
          {col("Follow",  ["Instagram", "TikTok", "YouTube", "Facebook"])}
        </div>
        <div style={{
          display: "flex", justifyContent: "space-between",
          fontFamily: "var(--brz-font-sans)", fontSize: 12,
          color: "rgba(255,255,255,0.5)", paddingTop: 32,
          borderTop: "1px solid rgba(255,255,255,0.14)",
        }}>
          <div>© 2026 BRIZION</div>
          <div style={{ display: "flex", gap: 24 }}>
            <span>Privacy</span><span>Terms</span><span>Do Not Sell My Info</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { Nav, Footer, AnnouncementBar });
