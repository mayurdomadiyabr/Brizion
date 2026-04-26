'use client';

import { useEffect } from 'react';
import { useCart } from './CartProvider';

export function ClearCartOnMount() {
  const { clear, hydrated } = useCart();
  useEffect(() => {
    if (hydrated) clear();
  }, [hydrated, clear]);
  return null;
}
