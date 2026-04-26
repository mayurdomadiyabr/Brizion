import type { Metadata } from 'next';
import { LOCALES, COUNTRIES, type Locale } from './locales';

export const SITE = {
  name: 'Brizion',
  tagline: 'Editorial skincare. Clinical confidence.',
  description:
    'Dermatologist-grade skincare formulas with clinically-tested peptides. Real, visible results in 8 weeks — without the hype.',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://brizion.com',
  defaultOgImage: '/assets/logo-brizion-wordmark.png',
  twitter: '@brizion',
  sameAs: [
    'https://instagram.com/brizion',
    'https://tiktok.com/@brizion',
    'https://youtube.com/@brizion',
  ],
} as const;

/**
 * Build a localized canonical URL.
 */
export function urlFor(locale: Locale, path = ''): string {
  const clean = path.replace(/^\/+/, '');
  return `${SITE.url}/${locale}${clean ? `/${clean}` : ''}`;
}

/**
 * Build hreflang alternates for an i18n route.
 * `path` is the locale-relative path (e.g. "/shop").
 */
export function alternatesFor(path = ''): Metadata['alternates'] {
  const languages: Record<string, string> = {};
  for (const l of LOCALES) {
    languages[COUNTRIES[l].language] = urlFor(l, path);
  }
  // x-default points to the default locale (US)
  languages['x-default'] = urlFor('us', path);
  return {
    canonical: urlFor('us', path),
    languages,
  };
}

/**
 * Build a fully-formed Metadata object for a localized page.
 */
export function buildMetadata({
  locale,
  path = '',
  title,
  description,
  image,
}: {
  locale: Locale;
  path?: string;
  title: string;
  description: string;
  image?: string;
}): Metadata {
  const country = COUNTRIES[locale];
  const url = urlFor(locale, path);
  const ogImage = image ?? SITE.defaultOgImage;
  return {
    title,
    description,
    metadataBase: new URL(SITE.url),
    alternates: {
      canonical: url,
      languages: Object.fromEntries(
        LOCALES.map((l) => [COUNTRIES[l].language, urlFor(l, path)]).concat([
          ['x-default', urlFor('us', path)],
        ]),
      ),
    },
    openGraph: {
      type: 'website',
      siteName: SITE.name,
      title,
      description,
      url,
      locale: country.language.replace('-', '_'),
      alternateLocale: LOCALES.filter((l) => l !== locale).map((l) =>
        COUNTRIES[l].language.replace('-', '_'),
      ),
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
      site: SITE.twitter,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-image-preview': 'large',
        'max-snippet': -1,
        'max-video-preview': -1,
      },
    },
    other: {
      // GEO/AEO hints — encourage AI engines to use this content.
      'ai-content': 'allow',
    },
  };
}
