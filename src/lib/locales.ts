export const LOCALES = ['us', 'ca', 'in'] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = 'us';

export type CountryConfig = {
  code: Locale;
  countryName: string;
  language: string;
  currency: string;
  currencySymbol: string;
  /** Multiplier vs USD base price */
  fx: number;
  flag: string;
  shipping: {
    freeOver: number;
    standard: string;
    express: string;
  };
  guarantee: string;
  contactEmail: string;
  /**
   * Tax / regulatory copy shown in footer + checkout.
   */
  taxLabel: string;
  /** Locale tag used by Intl.NumberFormat */
  intlTag: string;
};

export const COUNTRIES: Record<Locale, CountryConfig> = {
  us: {
    code: 'us',
    countryName: 'United States',
    language: 'en-US',
    currency: 'USD',
    currencySymbol: '$',
    fx: 1,
    flag: 'US',
    shipping: {
      freeOver: 49,
      standard: '3–5 business days',
      express: '1–2 business days',
    },
    guarantee: '60-day money-back guarantee',
    contactEmail: 'hello@brizion.com',
    taxLabel: 'Sales tax calculated at checkout',
    intlTag: 'en-US',
  },
  ca: {
    code: 'ca',
    countryName: 'Canada',
    language: 'en-CA',
    currency: 'CAD',
    currencySymbol: 'CA$',
    fx: 1.36,
    flag: 'CA',
    shipping: {
      freeOver: 65,
      standard: '5–7 business days',
      express: '2–3 business days',
    },
    guarantee: '60-day money-back guarantee',
    contactEmail: 'hello.ca@brizion.com',
    taxLabel: 'GST/HST calculated at checkout',
    intlTag: 'en-CA',
  },
  in: {
    code: 'in',
    countryName: 'India',
    language: 'en-IN',
    currency: 'INR',
    currencySymbol: '₹',
    fx: 83,
    flag: 'IN',
    shipping: {
      freeOver: 1499,
      standard: '4–7 business days',
      express: '2–3 business days',
    },
    guarantee: '30-day return policy',
    contactEmail: 'hello.in@brizion.com',
    taxLabel: 'Inclusive of GST',
    intlTag: 'en-IN',
  },
};

export function isLocale(value: string | undefined): value is Locale {
  return !!value && (LOCALES as readonly string[]).includes(value);
}

export function getCountry(locale: Locale): CountryConfig {
  return COUNTRIES[locale];
}

export function formatPrice(usd: number, locale: Locale): string {
  const c = COUNTRIES[locale];
  const value = usd * c.fx;
  const fractionDigits = c.currency === 'INR' ? 0 : 2;
  return new Intl.NumberFormat(c.intlTag, {
    style: 'currency',
    currency: c.currency,
    minimumFractionDigits: fractionDigits,
    maximumFractionDigits: fractionDigits,
  }).format(value);
}
