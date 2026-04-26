'use client';

import { useState } from 'react';
import { useCart } from './CartProvider';
import type { Product } from '@/lib/products';

export function AddToCart({ product }: { product: Product }) {
  const cart = useCart();
  const [added, setAdded] = useState(false);

  const onAdd = () => {
    cart.add(product, 1);
    setAdded(true);
    window.setTimeout(() => setAdded(false), 1600);
  };

  return (
    <button
      onClick={onAdd}
      aria-label={`Add ${product.name} to cart`}
      className="btn-primary"
      style={{
        background: added ? 'var(--brz-success)' : 'var(--brz-ink)',
        borderRadius: 999,
      }}
    >
      {added ? 'Added ✓' : 'Add to cart'}
    </button>
  );
}
