import Stripe from 'stripe';

let _stripe: Stripe | null = null;

/**
 * Lazy-initialised Stripe client. Throws a clear error at request time if the
 * STRIPE_SECRET_KEY env var is missing, rather than crashing at build time.
 */
export function getStripe(): Stripe {
  if (_stripe) return _stripe;
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) {
    throw new Error(
      'STRIPE_SECRET_KEY is not set. Add it to .env.local or your deploy environment.',
    );
  }
  _stripe = new Stripe(key, {
    apiVersion: '2026-04-22.dahlia',
    appInfo: { name: 'Brizion', version: '0.1.0' },
  });
  return _stripe;
}

/**
 * Stripe expects amounts in the smallest currency unit (cents for USD/CAD,
 * paise for INR). Zero-decimal currencies use the whole unit directly.
 */
const ZERO_DECIMAL = new Set(['JPY', 'KRW', 'VND']);

export function toMinorUnits(amount: number, currency: string): number {
  const upper = currency.toUpperCase();
  if (ZERO_DECIMAL.has(upper)) return Math.round(amount);
  return Math.round(amount * 100);
}
