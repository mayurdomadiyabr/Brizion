import Link from 'next/link';
import Image from 'next/image';
import { formatPrice, type Locale } from '@/lib/locales';
import type { Product } from '@/lib/products';

export function ProductCard({
  product,
  locale,
}: {
  product: Product;
  locale: Locale;
}) {
  return (
    <article
      itemScope
      itemType="https://schema.org/Product"
      style={{
        background: '#fff',
        border: '1px solid var(--brz-n-200)',
        display: 'flex',
        flexDirection: 'column',
        transition: 'transform 240ms var(--brz-ease)',
      }}
    >
      <Link
        href={`/${locale}/products/${product.slug}`}
        style={{ textDecoration: 'none', color: 'inherit' }}
      >
        <div
          style={{
            aspectRatio: '3/4',
            background: product.bg,
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {product.tag && (
            <span
              style={{
                position: 'absolute',
                top: 14,
                left: 14,
                background: 'var(--brz-ink)',
                color: '#fff',
                fontSize: 9,
                fontWeight: 700,
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                padding: '5px 10px',
              }}
            >
              {product.tag}
            </span>
          )}
          <Image
            src={product.img}
            alt={`${product.name} — ${product.sub}`}
            width={400}
            height={520}
            itemProp="image"
            style={{ width: 'auto', maxHeight: '74%', objectFit: 'contain' }}
          />
        </div>
        <div
          style={{
            padding: '20px 18px',
            borderTop: '1px solid var(--brz-n-200)',
          }}
        >
          <div
            style={{
              fontSize: 10,
              fontWeight: 700,
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: 'var(--brz-fg-2)',
              marginBottom: 8,
            }}
          >
            {product.kind}
          </div>
          <h3
            itemProp="name"
            style={{
              fontFamily: 'var(--brz-font-display)',
              fontWeight: 600,
              fontSize: 20,
              color: 'var(--brz-ink)',
              lineHeight: 1.15,
              letterSpacing: '-0.01em',
              margin: '0 0 8px',
            }}
          >
            {product.name}
          </h3>
          <p
            itemProp="description"
            style={{
              fontFamily: 'var(--brz-font-serif)',
              fontStyle: 'italic',
              fontSize: 13,
              color: 'var(--brz-fg-2)',
              margin: '0 0 14px',
              lineHeight: 1.35,
            }}
          >
            {product.sub}
          </p>
          <div
            style={{
              display: 'flex',
              alignItems: 'baseline',
              justifyContent: 'space-between',
              paddingTop: 14,
              borderTop: '1px solid var(--brz-n-100)',
            }}
          >
            <span
              itemProp="offers"
              itemScope
              itemType="https://schema.org/Offer"
              style={{ fontWeight: 700, fontSize: 15, letterSpacing: '0.02em' }}
            >
              <span itemProp="price">{formatPrice(product.priceUsd, locale)}</span>
            </span>
            <span style={{ fontSize: 11 }}>
              <span style={{ letterSpacing: '0.1em' }}>★★★★★</span>{' '}
              <span style={{ color: 'var(--brz-fg-3)', fontSize: 10 }}>
                {product.reviews.toLocaleString()}
              </span>
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
}
