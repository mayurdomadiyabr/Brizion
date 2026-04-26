'use client';

import { createContext, useContext, useEffect, useMemo, useReducer, useState } from 'react';
import type { Product } from '@/lib/products';

const STORAGE_KEY = 'brz-cart-v1';

export type CartLine = {
  productId: string;
  slug: string;
  name: string;
  img: string;
  priceUsd: number;
  qty: number;
};

type State = { lines: CartLine[] };

type Action =
  | { type: 'ADD'; product: Product; qty?: number }
  | { type: 'UPDATE'; productId: string; qty: number }
  | { type: 'REMOVE'; productId: string }
  | { type: 'CLEAR' }
  | { type: 'HYDRATE'; lines: CartLine[] };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'ADD': {
      const qty = action.qty ?? 1;
      const existing = state.lines.find((l) => l.productId === action.product.id);
      if (existing) {
        return {
          lines: state.lines.map((l) =>
            l.productId === action.product.id ? { ...l, qty: l.qty + qty } : l,
          ),
        };
      }
      return {
        lines: [
          ...state.lines,
          {
            productId: action.product.id,
            slug: action.product.slug,
            name: action.product.name,
            img: action.product.img,
            priceUsd: action.product.priceUsd,
            qty,
          },
        ],
      };
    }
    case 'UPDATE':
      return {
        lines: state.lines
          .map((l) => (l.productId === action.productId ? { ...l, qty: action.qty } : l))
          .filter((l) => l.qty > 0),
      };
    case 'REMOVE':
      return { lines: state.lines.filter((l) => l.productId !== action.productId) };
    case 'CLEAR':
      return { lines: [] };
    case 'HYDRATE':
      return { lines: action.lines };
    default:
      return state;
  }
}

type CartContextType = {
  lines: CartLine[];
  count: number;
  subtotalUsd: number;
  add: (product: Product, qty?: number) => void;
  update: (productId: string, qty: number) => void;
  remove: (productId: string) => void;
  clear: () => void;
  hydrated: boolean;
};

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(reducer, { lines: [] });
  const [hydrated, setHydrated] = useState(false);

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as CartLine[];
        if (Array.isArray(parsed)) dispatch({ type: 'HYDRATE', lines: parsed });
      }
    } catch {
      /* ignore parse errors */
    }
    setHydrated(true);
  }, []);

  // Persist on change (only after hydration to avoid clobbering)
  useEffect(() => {
    if (!hydrated) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state.lines));
    } catch {
      /* quota / disabled storage */
    }
  }, [state.lines, hydrated]);

  const value = useMemo<CartContextType>(() => {
    const count = state.lines.reduce((s, l) => s + l.qty, 0);
    const subtotalUsd = state.lines.reduce((s, l) => s + l.priceUsd * l.qty, 0);
    return {
      lines: state.lines,
      count,
      subtotalUsd,
      add: (product, qty) => dispatch({ type: 'ADD', product, qty }),
      update: (productId, qty) => dispatch({ type: 'UPDATE', productId, qty }),
      remove: (productId) => dispatch({ type: 'REMOVE', productId }),
      clear: () => dispatch({ type: 'CLEAR' }),
      hydrated,
    };
  }, [state.lines, hydrated]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart(): CartContextType {
  const ctx = useContext(CartContext);
  if (!ctx) {
    throw new Error('useCart must be used inside <CartProvider>');
  }
  return ctx;
}
