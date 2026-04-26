/* global React, Eyebrow, Button, Badge, Stars, Icon, PRODUCTS */
const { useState: useStateH } = React;

function Hero({ onCTA }) {
  return (
    <section style={{ background: "var(--brz-lilac-100)", padding: "96px 48px", position: "relative", overflow: "hidden" }}>
      <div style={{ maxWidth: 1320, margin: "0 auto", display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: 64, alignItems: "center" }}>
        <div>
          <Eyebrow style={{ color: "var(--brz-lilac-600)" }}>The new firming serum</Eyebrow>
          <h1 style={{ margin: "20px 0 24px", fontFamily: "var(--brz-font-display)", fontWeight: 500, fontSize: 84, lineHeight: 1, letterSpacing: "-0.02em", color: "var(--brz-ink)", textWrap: "balance" }}>
            Skincare that meets you <em style={{ fontWeight: 400 }}>where you are.</em>
          </h1>
          <p style={{ fontFamily: "var(--brz-font-serif)", fontSize: 22, fontStyle: "italic", lineHeight: 1.4, color: "var(--brz-fg-1)", maxWidth: 480, marginBottom: 36 }}>
            Clinically proven formulas, dermatologist tested, made for the skin you have — not the skin someone else is selling.
          </p>
          <div style={{ display: "flex", gap: 14, alignItems: "center" }}>
            <Button variant="primary" size="lg" onClick={onCTA}>Shop best sellers</Button>
            <Button variant="outline" size="lg">Our story →</Button>
          </div>
        </div>
        <div style={{ position: "relative", aspectRatio: "1 / 1.05", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <img src="../../assets/product-1-lilac-serum.png" style={{ maxHeight: "100%", maxWidth: "100%", width: "auto", height: "auto", objectFit: "contain" }}/>
        </div>
      </div>
    </section>
  );
}

function PillarBar() {
  const items = [
    { icon: Icon.flask(18),   label: "CLINICALLY PROVEN" },
    { icon: Icon.leaf(18),    label: "CLEAN & SAFE" },
    { icon: Icon.sparkle(18), label: "DERM RECOMMENDED" },
    { icon: Icon.check(18),   label: "60-DAY GUARANTEE" },
  ];
  return (
    <div style={{ background: "var(--brz-cream)", padding: "22px 48px", borderBottom: "1px solid var(--brz-border-hair)" }}>
      <div style={{ maxWidth: 1320, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24 }}>
        {items.map(it => (
          <div key={it.label} style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 10, fontFamily: "var(--brz-font-sans)", fontSize: 11, fontWeight: 600, letterSpacing: "0.22em", color: "var(--brz-fg-1)" }}>
            {it.icon} {it.label}
          </div>
        ))}
      </div>
    </div>
  );
}

function BestSellersSection({ onOpen, onAdd }) {
  return (
    <section style={{ padding: "120px 48px", background: "var(--brz-shell)" }}>
      <div style={{ maxWidth: 1320, margin: "0 auto" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 56 }}>
          <div>
            <Eyebrow>Best sellers</Eyebrow>
            <h2 style={{ margin: "12px 0 0", fontFamily: "var(--brz-font-display)", fontWeight: 500, fontSize: 56, letterSpacing: "-0.02em" }}>
              <em style={{ fontWeight: 400 }}>new here?</em> Meet the essentials.
            </h2>
          </div>
          <a style={{ fontFamily: "var(--brz-font-sans)", fontSize: 13, fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", cursor: "pointer" }}>Shop all →</a>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 40 }}>
          {PRODUCTS.slice(0, 3).map(p => <ProductCard key={p.id} product={p} onOpen={onOpen} onAdd={onAdd} />)}
        </div>
      </div>
    </section>
  );
}

function StoryBlock() {
  return (
    <section style={{ padding: "120px 48px", background: "var(--brz-cream)" }}>
      <div style={{ maxWidth: 980, margin: "0 auto", textAlign: "center" }}>
        <Eyebrow>We believe that</Eyebrow>
        <h2 style={{ margin: "24px 0 28px", fontFamily: "var(--brz-font-display)", fontWeight: 500, fontSize: 64, lineHeight: 1.05, letterSpacing: "-0.02em" }}>
          Feeling beautiful & confident should be <em style={{ fontWeight: 400 }}>within reach</em> for everyone.
        </h2>
        <p style={{ fontFamily: "var(--brz-font-serif)", fontSize: 19, fontStyle: "italic", color: "var(--brz-fg-2)", marginBottom: 32 }}>
          — Co-founders, Brizion
        </p>
        <Button variant="outline">Read our story</Button>
      </div>
    </section>
  );
}

function TestimonialSection() {
  const [idx, setIdx] = useStateH(0);
  const quotes = [
    { q: "I've been using it consistently and my skin feels way smoother and more hydrated. I can tell it's firming things up little by little.", name: "Re'gan", tag: "Firm & Lift Serum" },
    { q: "My absolute holy grail product. This gave me back my confidence as a 57 year old. My neck literally looks a decade younger!", name: "Eileen", tag: "Overnight Renewal Cream" },
    { q: "I looked at my before and after, and my skin looked smoother, firmer — in a way I did not expect.", name: "Faith", tag: "Golden Hour Oil" },
  ];
  const q = quotes[idx];
  return (
    <section style={{ padding: "120px 48px", background: "var(--brz-blush-50)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", textAlign: "center" }}>
        <Eyebrow>Real women, real results</Eyebrow>
        <h2 style={{ margin: "18px 0 48px", fontFamily: "var(--brz-font-display)", fontWeight: 500, fontSize: 52, letterSpacing: "-0.02em" }}>
          Customers <em style={{ fontWeight: 400 }}>can't get enough</em>
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32, marginBottom: 48, alignItems: "stretch" }}>
          <div style={{ background: "var(--brz-blush-100)", borderRadius: 20, aspectRatio: "1/1", position: "relative", overflow: "hidden" }}>
            <span style={{ position: "absolute", top: 16, right: 16, background: "rgba(255,255,255,0.9)", padding: "4px 10px", borderRadius: 999, fontFamily: "var(--brz-font-sans)", fontSize: 11, fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase" }}>Before</span>
          </div>
          <div style={{ background: "var(--brz-lilac-100)", borderRadius: 20, aspectRatio: "1/1", position: "relative", overflow: "hidden" }}>
            <span style={{ position: "absolute", top: 16, right: 16, background: "var(--brz-ink)", color: "#fff", padding: "4px 10px", borderRadius: 999, fontFamily: "var(--brz-font-sans)", fontSize: 11, fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase" }}>After 8 weeks</span>
          </div>
        </div>
        <div style={{ fontFamily: "var(--brz-font-sans)", fontSize: 11, color: "var(--brz-fg-3)", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 24 }}>Consumer results, may vary</div>
        <blockquote style={{ fontFamily: "var(--brz-font-display)", fontSize: 32, lineHeight: 1.25, fontStyle: "italic", fontWeight: 400, color: "var(--brz-ink)", maxWidth: 820, margin: "0 auto 24px", textWrap: "balance" }}>
          "{q.q}"
        </blockquote>
        <div style={{ fontFamily: "var(--brz-font-sans)", fontSize: 13, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--brz-fg-2)", fontWeight: 600 }}>
          — {q.name} · {q.tag}
        </div>
        <div style={{ display: "flex", justifyContent: "center", gap: 14, marginTop: 36 }}>
          {quotes.map((_, i) => (
            <button key={i} onClick={() => setIdx(i)} style={{ width: i === idx ? 32 : 10, height: 10, borderRadius: 999, background: i === idx ? "var(--brz-ink)" : "rgba(14,14,14,0.2)", border: "none", cursor: "pointer", transition: "all var(--brz-dur-base)" }}/>
          ))}
        </div>
      </div>
    </section>
  );
}

function CategoryStrip({ onNavigate }) {
  const cats = [
    { label: "Serums",      bg: "var(--brz-lilac-100)", img: "../../assets/product-1-lilac-serum.png" },
    { label: "Moisturizers", bg: "var(--brz-blush-100)", img: "../../assets/product-2-blush-jar.png" },
    { label: "Oils",         bg: "var(--brz-sand-50)",   img: "../../assets/product-3-sand-bottle.png" },
    { label: "Cleansers",    bg: "var(--brz-sage-100)",  img: "../../assets/product-4-sage-bottle.png" },
  ];
  return (
    <section style={{ padding: "96px 48px", background: "var(--brz-shell)" }}>
      <div style={{ maxWidth: 1320, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <Eyebrow>Shop by category</Eyebrow>
          <h2 style={{ margin: "14px 0 0", fontFamily: "var(--brz-font-display)", fontWeight: 500, fontSize: 44, letterSpacing: "-0.02em" }}>
            Find your <em style={{ fontWeight: 400 }}>perfect</em> routine
          </h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20 }}>
          {cats.map(c => (
            <div key={c.label} onClick={() => onNavigate("plp")} style={{
              background: c.bg, borderRadius: 20, aspectRatio: "1/1.1",
              position: "relative", cursor: "pointer", overflow: "hidden",
              display: "flex", alignItems: "center", justifyContent: "center",
              padding: 24, transition: "transform var(--brz-dur-base)",
            }}
            onMouseOver={e => e.currentTarget.style.transform = "translateY(-4px)"}
            onMouseOut={e => e.currentTarget.style.transform = "translateY(0)"}>
              <img src={c.img} style={{ maxHeight: "85%", maxWidth: "85%", width: "auto", height: "auto", objectFit: "contain" }}/>
              <div style={{ position: "absolute", bottom: 20, left: 20, right: 20, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontFamily: "var(--brz-font-display)", fontSize: 22, color: "var(--brz-ink)", fontWeight: 500 }}>{c.label}</span>
                <span style={{ fontFamily: "var(--brz-font-display)", fontSize: 20, color: "var(--brz-ink)" }}>→</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Hero, PillarBar, BestSellersSection, StoryBlock, TestimonialSection, CategoryStrip });
