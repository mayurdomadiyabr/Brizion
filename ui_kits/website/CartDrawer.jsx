/* global React, Icon, Button, Eyebrow */
const { useState: useStateC } = React;

function CartDrawer({ open, items, onClose, onQty, onRemove }) {
  const subtotal = items.reduce((s, i) => s + i.price * i.qty, 0);
  const freeShipRemain = Math.max(0, 49 - subtotal);
  const pct = Math.min(100, (subtotal / 49) * 100);

  return (
    <>
      <div onClick={onClose} style={{
        position: "fixed", inset: 0,
        background: open ? "rgba(14,14,14,0.4)" : "rgba(14,14,14,0)",
        pointerEvents: open ? "auto" : "none",
        transition: "background var(--brz-dur-slow) var(--brz-ease)",
        zIndex: 80,
      }}/>
      <aside style={{
        position: "fixed", top: 0, right: 0, bottom: 0,
        width: 440, maxWidth: "100vw",
        background: "var(--brz-shell)",
        transform: open ? "translateX(0)" : "translateX(100%)",
        transition: "transform var(--brz-dur-slow) var(--brz-ease)",
        zIndex: 90, display: "flex", flexDirection: "column",
        boxShadow: "-20px 0 60px rgba(14,14,14,0.15)",
      }}>
        <div style={{
          padding: "22px 28px", borderBottom: "1px solid var(--brz-border-hair)",
          display: "flex", justifyContent: "space-between", alignItems: "center",
        }}>
          <div style={{ fontFamily: "var(--brz-font-display)", fontSize: 22, fontWeight: 500, letterSpacing: "-0.01em" }}>
            Your cart <span style={{ color: "var(--brz-fg-3)", fontSize: 18 }}>({items.length})</span>
          </div>
          <button onClick={onClose} style={{ background: "none", border: "none", cursor: "pointer", padding: 6 }}>{Icon.close(20)}</button>
        </div>

        <div style={{ padding: "20px 28px", background: "var(--brz-lilac-50)", borderBottom: "1px solid var(--brz-border-hair)" }}>
          {freeShipRemain > 0 ? (
            <div style={{ fontFamily: "var(--brz-font-serif)", fontSize: 15, fontStyle: "italic", color: "var(--brz-ink)" }}>
              Spend <b style={{ fontStyle: "normal" }}>${freeShipRemain.toFixed(2)}</b> more to unlock free shipping.
            </div>
          ) : (
            <div style={{ fontFamily: "var(--brz-font-serif)", fontSize: 15, fontStyle: "italic", color: "var(--brz-ink)" }}>
              You've unlocked <b style={{ fontStyle: "normal" }}>free shipping</b>.
            </div>
          )}
          <div style={{ height: 4, background: "rgba(14,14,14,0.1)", borderRadius: 999, marginTop: 12, overflow: "hidden" }}>
            <div style={{ height: "100%", background: "var(--brz-ink)", width: `${pct}%`, transition: "width var(--brz-dur-slow)" }}/>
          </div>
        </div>

        <div style={{ flex: 1, overflow: "auto", padding: "20px 28px" }}>
          {items.length === 0 ? (
            <div style={{ textAlign: "center", padding: "80px 0", color: "var(--brz-fg-3)" }}>
              <div style={{ fontFamily: "var(--brz-font-display)", fontStyle: "italic", fontSize: 26, color: "var(--brz-ink)", marginBottom: 10 }}>Your cart is empty</div>
              <div style={{ fontFamily: "var(--brz-font-serif)", fontSize: 16 }}>Check out some of our bestsellers.</div>
            </div>
          ) : items.map(it => (
            <div key={it.id} style={{ display: "flex", gap: 16, paddingBottom: 18, marginBottom: 18, borderBottom: "1px solid var(--brz-border-hair)" }}>
              <div style={{ width: 96, height: 96, background: it.bg, borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <img src={it.img} style={{ maxHeight: "85%" }}/>
              </div>
              <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                <div>
                  <div style={{ fontFamily: "var(--brz-font-display)", fontSize: 17, fontWeight: 500 }}>{it.name}</div>
                  <div style={{ fontFamily: "var(--brz-font-sans)", fontSize: 12, color: "var(--brz-fg-3)", marginTop: 2 }}>30ml · one-time</div>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div style={{ display: "flex", alignItems: "center", border: "1px solid var(--brz-n-200)", borderRadius: 999, padding: "2px 6px" }}>
                    <button onClick={() => onQty(it.id, Math.max(0, it.qty-1))} style={{ background: "none", border: "none", cursor: "pointer", padding: 4 }}>{Icon.minus(12)}</button>
                    <span style={{ fontFamily: "var(--brz-font-sans)", fontSize: 13, minWidth: 18, textAlign: "center" }}>{it.qty}</span>
                    <button onClick={() => onQty(it.id, it.qty+1)} style={{ background: "none", border: "none", cursor: "pointer", padding: 4 }}>{Icon.plus(12)}</button>
                  </div>
                  <div style={{ fontFamily: "var(--brz-font-sans)", fontSize: 15, fontWeight: 600 }}>${(it.price * it.qty).toFixed(2)}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {items.length > 0 && (
          <div style={{ padding: "24px 28px", borderTop: "1px solid var(--brz-border-hair)", background: "#fff" }}>
            <div style={{ display: "flex", justifyContent: "space-between", fontFamily: "var(--brz-font-sans)", fontSize: 14, color: "var(--brz-fg-2)", marginBottom: 8 }}>
              <span>Subtotal</span><span>${subtotal.toFixed(2)}</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", fontFamily: "var(--brz-font-display)", fontSize: 22, fontWeight: 500, marginBottom: 20 }}>
              <span>Total</span><span>${subtotal.toFixed(2)}</span>
            </div>
            <Button variant="primary" size="lg" style={{ width: "100%" }}>Checkout →</Button>
            <div style={{ textAlign: "center", marginTop: 12, fontFamily: "var(--brz-font-sans)", fontSize: 11, color: "var(--brz-fg-3)", letterSpacing: "0.12em", textTransform: "uppercase" }}>
              60-day money-back guarantee
            </div>
          </div>
        )}
      </aside>
    </>
  );
}

Object.assign(window, { CartDrawer });
