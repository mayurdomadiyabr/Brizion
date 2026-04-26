/* global React, Eyebrow, Button, Badge, Stars, Icon */
const { useState: useStateP } = React;

// ============ Product data ============
const PRODUCTS = [
  { id:"firm-lift",      name:"Firm & Lift Serum",          img:"../../assets/product-1-lilac-serum.png", bg:"var(--brz-lilac-100)", price:39.99, tag:"Best Seller", tagTone:"lilac", sub:"Visibly firms the look of skin.", rating:5, reviews:1240 },
  { id:"renewal",        name:"Overnight Renewal Cream",    img:"../../assets/product-2-blush-jar.png",   bg:"var(--brz-blush-100)", price:44.99, tag:"Award Winner", tagTone:"blush", sub:"Plumps & hydrates while you sleep.", rating:5, reviews:812 },
  { id:"golden-hour",    name:"Golden Hour Facial Oil",     img:"../../assets/product-3-sand-bottle.png", bg:"var(--brz-sand-50)",   price:54.99, tag:"New", tagTone:"ink", sub:"Illuminates for a dewy, lit-from-within glow.", rating:4, reviews:201 },
  { id:"cleanser",       name:"Daily Gentle Cleanser",      img:"../../assets/product-4-sage-bottle.png", bg:"var(--brz-sage-100)",  price:28.00, sub:"Clarifies without stripping.", rating:5, reviews:2104 },
  { id:"mask",           name:"Overnight Recovery Mask",    img:"../../assets/product-5-lilac-jar.png",   bg:"var(--brz-lilac-50)",  price:48.00, tag:"New", tagTone:"ink", sub:"Soothes & resets overnight.", rating:5, reviews:64 },
  { id:"lip",            name:"Plumping Lip Treatment",     img:"../../assets/product-6-blush-small.png", bg:"var(--brz-blush-50)",  price:22.00, sub:"Softens & smooths fine lines.", rating:5, reviews:520 },
];

function ProductCard({ product, onOpen, onAdd }) {
  const [hover, setHover] = useStateP(false);
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={() => onOpen(product)}
      style={{ cursor: "pointer", display: "flex", flexDirection: "column", gap: 18 }}
    >
      <div style={{
        background: product.bg, borderRadius: 20, aspectRatio: "1 / 1.1",
        display: "flex", alignItems: "center", justifyContent: "center",
        position: "relative", overflow: "hidden",
        transition: "transform var(--brz-dur-base) var(--brz-ease)",
        transform: hover ? "translateY(-4px)" : "translateY(0)",
      }}>
        {product.tag && (
          <div style={{ position:"absolute", top:16, left:16 }}>
            <Badge tone={product.tagTone}>{product.tag}</Badge>
          </div>
        )}
        <img src={product.img} style={{
          maxHeight: "100%", maxWidth: "100%",
          width: "auto", height: "auto", objectFit: "contain",
          transition: "transform var(--brz-dur-slow) var(--brz-ease)",
          transform: hover ? "scale(1.04)" : "scale(1)",
        }}/>
        <button
          onClick={(e) => { e.stopPropagation(); onAdd(product); }}
          style={{
            position: "absolute", bottom: 16, right: 16,
            width: 44, height: 44, borderRadius: 999,
            background: "var(--brz-ink)", color: "#fff", border: "none",
            cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center",
            opacity: hover ? 1 : 0,
            transform: hover ? "translateY(0)" : "translateY(8px)",
            transition: "all var(--brz-dur-base) var(--brz-ease)",
          }}>
          {Icon.plus(18)}
        </button>
      </div>
      <div>
        <div style={{ display:"flex", justifyContent:"space-between", alignItems:"baseline", gap:12, marginBottom: 4 }}>
          <h4 style={{ margin: 0, fontFamily: "var(--brz-font-display)", fontWeight: 500, fontSize: 20, letterSpacing: "-0.01em", color: "var(--brz-ink)" }}>
            {product.name}
          </h4>
          <span style={{ fontFamily: "var(--brz-font-sans)", fontSize: 15, fontWeight: 600, color: "var(--brz-ink)" }}>
            ${product.price.toFixed(2)}
          </span>
        </div>
        <div style={{ fontFamily: "var(--brz-font-serif)", fontStyle: "italic", fontSize: 15, color: "var(--brz-fg-2)", marginBottom: 8 }}>
          {product.sub}
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <Stars value={product.rating} />
          <span style={{ fontFamily: "var(--brz-font-sans)", fontSize: 12, color: "var(--brz-fg-3)" }}>({product.reviews.toLocaleString()})</span>
        </div>
      </div>
    </div>
  );
}

function ProductGrid({ products, onOpen, onAdd }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 32 }}>
      {products.map(p => <ProductCard key={p.id} product={p} onOpen={onOpen} onAdd={onAdd} />)}
    </div>
  );
}

Object.assign(window, { PRODUCTS, ProductCard, ProductGrid });
