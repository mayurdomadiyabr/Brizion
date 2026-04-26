/* global React, Eyebrow, Button, Badge, Stars, Icon, PRODUCTS, ProductGrid */
const { useState: useStatePDP } = React;

function PDP({ product, onAdd, onNavigate }) {
  const [size, setSize] = useStatePDP("30ml");
  const [qty, setQty] = useStatePDP(1);
  const [freq, setFreq] = useStatePDP("one-time");

  const tabs = [
    { key: "benefits", title: "Benefits", body: "Visibly firms and plumps. Reduces the look of fine lines & wrinkles. Hydrates for 24 hours. Suitable for all skin types." },
    { key: "how",      title: "How to use", body: "Apply 2-3 drops to clean, dry skin morning and evening. Follow with moisturizer. For best results, use consistently for 8 weeks." },
    { key: "ingredients", title: "Key ingredients", body: "4% Peptide Complex. 2% Hyaluronic Acid. Niacinamide. Vitamin E. Fragrance-free, paraben-free, vegan, cruelty-free." },
  ];
  const [tab, setTab] = useStatePDP("benefits");

  return (
    <main style={{ background: "var(--brz-shell)" }}>
      <section style={{ padding: "64px 48px 96px" }}>
        <div style={{ maxWidth: 1320, margin: "0 auto" }}>
          <div style={{ fontFamily: "var(--brz-font-sans)", fontSize: 12, color: "var(--brz-fg-3)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 24 }}>
            <a onClick={() => onNavigate("home")} style={{ cursor: "pointer" }}>Home</a> &nbsp;/&nbsp;
            <a onClick={() => onNavigate("plp")} style={{ cursor: "pointer" }}>Serums</a> &nbsp;/&nbsp;
            <span style={{ color: "var(--brz-ink)" }}>{product.name}</span>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: 72, alignItems: "start" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <div style={{ background: product.bg, borderRadius: 24, aspectRatio: "1/1", display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
                {product.tag && <div style={{position:"absolute",top:24,left:24}}><Badge tone={product.tagTone}>{product.tag}</Badge></div>}
                <img src={product.img} style={{ maxHeight: "100%", maxWidth: "100%", width: "auto", height: "auto", objectFit: "contain" }}/>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12 }}>
                {PRODUCTS.slice(0, 4).map((p, i) => (
                  <div key={p.id} style={{
                    background: p.bg, borderRadius: 14, aspectRatio: "1/1",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    border: i === 0 ? "2px solid var(--brz-ink)" : "2px solid transparent",
                    cursor: "pointer",
                  }}>
                    <img src={p.img} style={{ maxHeight: "72%" }}/>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ paddingTop: 12 }}>
              <Eyebrow>{product.tag || "Brizion"}</Eyebrow>
              <h1 style={{ margin: "16px 0 14px", fontFamily: "var(--brz-font-display)", fontWeight: 500, fontSize: 52, lineHeight: 1.05, letterSpacing: "-0.02em" }}>
                {product.name}
              </h1>
              <p style={{ fontFamily: "var(--brz-font-serif)", fontStyle: "italic", fontSize: 22, color: "var(--brz-fg-1)", marginBottom: 20, lineHeight: 1.4 }}>
                {product.sub}
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 28 }}>
                <Stars value={product.rating}/>
                <span style={{ fontFamily: "var(--brz-font-sans)", fontSize: 13, color: "var(--brz-fg-2)" }}>
                  {product.rating}.0 · {product.reviews.toLocaleString()} reviews
                </span>
              </div>

              <div style={{ marginBottom: 28 }}>
                <div style={{ fontFamily: "var(--brz-font-sans)", fontSize: 11, color: "var(--brz-fg-3)", letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: 10 }}>Size</div>
                <div style={{ display: "flex", gap: 10 }}>
                  {["30ml", "50ml"].map(s => (
                    <button key={s} onClick={() => setSize(s)} style={{
                      padding: "12px 20px", borderRadius: 10, cursor: "pointer",
                      border: size === s ? "1.5px solid var(--brz-ink)" : "1px solid var(--brz-n-200)",
                      background: size === s ? "var(--brz-ink)" : "transparent",
                      color: size === s ? "#fff" : "var(--brz-ink)",
                      fontFamily: "var(--brz-font-sans)", fontSize: 13, fontWeight: 600,
                    }}>{s}</button>
                  ))}
                </div>
              </div>

              <div style={{ marginBottom: 28 }}>
                <div style={{ fontFamily: "var(--brz-font-sans)", fontSize: 11, color: "var(--brz-fg-3)", letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: 10 }}>Purchase</div>
                {[{k:"one-time", t:"One-time purchase", p:product.price},
                  {k:"subscribe", t:"Subscribe & save 15%", p:product.price*0.85}].map(o => (
                  <label key={o.k} style={{
                    display: "flex", alignItems: "center", justifyContent: "space-between",
                    padding: "14px 18px", border: freq === o.k ? "1.5px solid var(--brz-ink)" : "1px solid var(--brz-n-200)",
                    borderRadius: 10, marginBottom: 10, cursor: "pointer", background: freq === o.k ? "var(--brz-lilac-50)" : "#fff",
                  }}>
                    <span style={{ display: "flex", alignItems: "center", gap: 12 }}>
                      <span style={{ width: 16, height: 16, borderRadius: 999, border: "1.5px solid var(--brz-ink)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        {freq === o.k && <span style={{ width: 8, height: 8, borderRadius: 999, background: "var(--brz-ink)" }}/>}
                      </span>
                      <input type="radio" checked={freq === o.k} onChange={() => setFreq(o.k)} style={{ display: "none" }}/>
                      <span style={{ fontFamily: "var(--brz-font-sans)", fontSize: 14, fontWeight: 500 }}>{o.t}</span>
                    </span>
                    <span style={{ fontFamily: "var(--brz-font-sans)", fontSize: 15, fontWeight: 600 }}>${o.p.toFixed(2)}</span>
                  </label>
                ))}
              </div>

              <div style={{ display: "flex", gap: 12, marginBottom: 28 }}>
                <div style={{ display: "flex", alignItems: "center", border: "1.5px solid var(--brz-ink)", borderRadius: 999, padding: "4px 8px" }}>
                  <button onClick={() => setQty(Math.max(1, qty-1))} style={{ background: "none", border: "none", cursor: "pointer", padding: 8 }}>{Icon.minus(14)}</button>
                  <span style={{ fontFamily: "var(--brz-font-sans)", fontSize: 14, fontWeight: 600, minWidth: 20, textAlign: "center" }}>{qty}</span>
                  <button onClick={() => setQty(qty+1)} style={{ background: "none", border: "none", cursor: "pointer", padding: 8 }}>{Icon.plus(14)}</button>
                </div>
                <Button variant="primary" size="lg" style={{ flex: 1 }} onClick={() => onAdd({...product, qty})}>
                  Add to cart — ${((freq === "subscribe" ? product.price*0.85 : product.price)*qty).toFixed(2)}
                </Button>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16, padding: "24px 0", borderTop: "1px solid var(--brz-border-hair)", borderBottom: "1px solid var(--brz-border-hair)" }}>
                {[[Icon.leaf,"Clean & safe"],[Icon.flask,"Clinically proven"],[Icon.sparkle,"Derm recommended"]].map(([I,l]) => (
                  <div key={l} style={{ display: "flex", alignItems: "center", gap: 8, fontFamily: "var(--brz-font-sans)", fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", fontWeight: 600 }}>
                    {I(18)} {l}
                  </div>
                ))}
              </div>

              <div style={{ marginTop: 32 }}>
                <div style={{ display: "flex", gap: 24, borderBottom: "1px solid var(--brz-border-hair)", marginBottom: 20 }}>
                  {tabs.map(t => (
                    <button key={t.key} onClick={() => setTab(t.key)} style={{
                      background: "none", border: "none", cursor: "pointer", padding: "12px 0",
                      fontFamily: "var(--brz-font-sans)", fontSize: 13, fontWeight: 600,
                      letterSpacing: "0.18em", textTransform: "uppercase",
                      color: tab === t.key ? "var(--brz-ink)" : "var(--brz-fg-3)",
                      borderBottom: tab === t.key ? "1.5px solid var(--brz-ink)" : "1.5px solid transparent",
                      marginBottom: -1,
                    }}>{t.title}</button>
                  ))}
                </div>
                <p style={{ fontFamily: "var(--brz-font-serif)", fontSize: 17, lineHeight: 1.55, color: "var(--brz-fg-1)" }}>
                  {tabs.find(t => t.key === tab).body}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function PLP({ onOpen, onAdd }) {
  return (
    <>
      <section style={{ background: "var(--brz-cream)", padding: "64px 48px 48px", borderBottom: "1px solid var(--brz-border-hair)" }}>
        <div style={{ maxWidth: 1320, margin: "0 auto", textAlign: "center" }}>
          <Eyebrow>Shop all</Eyebrow>
          <h1 style={{ margin: "16px 0 12px", fontFamily: "var(--brz-font-display)", fontWeight: 500, fontSize: 64, letterSpacing: "-0.02em" }}>
            The <em style={{ fontWeight: 400 }}>complete</em> collection
          </h1>
          <p style={{ fontFamily: "var(--brz-font-serif)", fontSize: 19, fontStyle: "italic", color: "var(--brz-fg-2)" }}>
            Clinically proven. Dermatologist tested. Quietly powerful.
          </p>
        </div>
      </section>
      <section style={{ padding: "48px 48px 120px", background: "var(--brz-shell)" }}>
        <div style={{ maxWidth: 1320, margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 40, padding: "20px 0", borderBottom: "1px solid var(--brz-border-hair)" }}>
            <div style={{ display: "flex", gap: 12 }}>
              {["All", "Face", "Body", "Bundles", "New"].map((f, i) => (
                <button key={f} style={{
                  padding: "8px 18px", borderRadius: 999,
                  border: i === 0 ? "none" : "1px solid var(--brz-n-200)",
                  background: i === 0 ? "var(--brz-ink)" : "transparent",
                  color: i === 0 ? "#fff" : "var(--brz-ink)",
                  fontFamily: "var(--brz-font-sans)", fontSize: 13, fontWeight: 500, cursor: "pointer",
                }}>{f}</button>
              ))}
            </div>
            <div style={{ fontFamily: "var(--brz-font-sans)", fontSize: 13, color: "var(--brz-fg-2)" }}>
              {PRODUCTS.length} products · <a style={{ cursor: "pointer" }}>Sort by: Best Selling →</a>
            </div>
          </div>
          <ProductGrid products={PRODUCTS} onOpen={onOpen} onAdd={onAdd}/>
        </div>
      </section>
    </>
  );
}

function AboutPage() {
  return (
    <>
      <section style={{ background: "var(--brz-cream)", padding: "120px 48px", textAlign: "center" }}>
        <div style={{ maxWidth: 980, margin: "0 auto" }}>
          <Eyebrow>Our story</Eyebrow>
          <h1 style={{ margin: "20px 0 32px", fontFamily: "var(--brz-font-display)", fontWeight: 500, fontSize: 76, lineHeight: 1.02, letterSpacing: "-0.02em" }}>
            Beauty that's <em style={{ fontWeight: 400 }}>quietly</em> powerful.
          </h1>
          <p style={{ fontFamily: "var(--brz-font-serif)", fontSize: 22, fontStyle: "italic", lineHeight: 1.45, color: "var(--brz-fg-2)", maxWidth: 720, margin: "0 auto" }}>
            We started Brizion because skincare had gotten too loud. Too many promises. Too many trends. Too many products chasing the next 24-hour news cycle. We wanted something different — something that works, quietly, consistently, honestly.
          </p>
        </div>
      </section>
      <section style={{ padding: "120px 48px", background: "var(--brz-shell)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>
          <div style={{ background: "url('../../assets/model-placeholder.jpg') center/cover", borderRadius: 24, aspectRatio: "4/5" }}/>
          <div>
            <Eyebrow>The founders</Eyebrow>
            <h2 style={{ margin: "16px 0 20px", fontFamily: "var(--brz-font-display)", fontWeight: 500, fontSize: 44, letterSpacing: "-0.02em" }}>
              Made with dermatologists. Made for real skin.
            </h2>
            <p style={{ fontFamily: "var(--brz-font-serif)", fontSize: 18, lineHeight: 1.5, color: "var(--brz-fg-2)", marginBottom: 24 }}>
              Every Brizion formula is developed in partnership with board-certified dermatologists, tested against real skin concerns over 8-week clinical studies, and refined until the results speak for themselves.
            </p>
            <Button variant="outline">Meet our team →</Button>
          </div>
        </div>
      </section>
    </>
  );
}

Object.assign(window, { PDP, PLP, AboutPage });
