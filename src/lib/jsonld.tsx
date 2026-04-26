import { COUNTRIES, type Locale } from './locales';
import { SITE, urlFor } from './seo';
import type { Product } from './products';

/**
 * Organization schema — high-priority for AEO/GEO so AI engines can attribute
 * the brand correctly when summarizing content.
 */
export function organizationLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE.name,
    url: SITE.url,
    logo: `${SITE.url}/assets/logo-brizion-wordmark.png`,
    description: SITE.description,
    sameAs: SITE.sameAs,
    contactPoint: Object.values(COUNTRIES).map((c) => ({
      '@type': 'ContactPoint',
      contactType: 'customer support',
      areaServed: c.code.toUpperCase(),
      availableLanguage: c.language,
      email: c.contactEmail,
    })),
  };
}

export function websiteLd(locale: Locale) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE.name,
    url: urlFor(locale),
    inLanguage: COUNTRIES[locale].language,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${urlFor(locale)}/search?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  };
}

export function breadcrumbsLd(
  locale: Locale,
  items: { name: string; path?: string }[],
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: it.path ? urlFor(locale, it.path) : undefined,
    })),
  };
}

export function productLd(locale: Locale, p: Product) {
  const c = COUNTRIES[locale];
  const price = (p.priceUsd * c.fx).toFixed(c.currency === 'INR' ? 0 : 2);
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: p.name,
    description: p.sub,
    image: `${SITE.url}${p.img}`,
    sku: p.id,
    brand: { '@type': 'Brand', name: SITE.name },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: p.rating,
      reviewCount: p.reviews,
    },
    offers: {
      '@type': 'Offer',
      url: urlFor(locale, `/products/${p.slug}`),
      priceCurrency: c.currency,
      price,
      availability: 'https://schema.org/InStock',
      areaServed: c.code.toUpperCase(),
    },
  };
}

export function faqLd(items: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((q) => ({
      '@type': 'Question',
      name: q.question,
      acceptedAnswer: { '@type': 'Answer', text: q.answer },
    })),
  };
}

/**
 * Renders a JSON-LD <script> tag. Use in any RSC.
 */
export function JsonLd({ data }: { data: unknown }) {
  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
