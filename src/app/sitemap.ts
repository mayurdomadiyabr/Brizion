import type { MetadataRoute } from 'next';
import { LOCALES, COUNTRIES } from '@/lib/locales';
import { SITE, urlFor } from '@/lib/seo';
import { PRODUCTS } from '@/lib/products';

const ROUTES = ['', '/shop', '/about', '/science', '/reviews', '/contact'];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const items: MetadataRoute.Sitemap = [];

  for (const route of ROUTES) {
    for (const locale of LOCALES) {
      items.push({
        url: urlFor(locale, route),
        lastModified: now,
        changeFrequency: route === '' ? 'daily' : 'weekly',
        priority: route === '' ? 1 : 0.7,
        alternates: {
          languages: Object.fromEntries(
            LOCALES.map((l) => [COUNTRIES[l].language, urlFor(l, route)]),
          ),
        },
      });
    }
  }

  for (const product of PRODUCTS) {
    for (const locale of LOCALES) {
      items.push({
        url: urlFor(locale, `/products/${product.slug}`),
        lastModified: now,
        changeFrequency: 'weekly',
        priority: 0.8,
        alternates: {
          languages: Object.fromEntries(
            LOCALES.map((l) => [
              COUNTRIES[l].language,
              urlFor(l, `/products/${product.slug}`),
            ]),
          ),
        },
      });
    }
  }

  // Cross-reference site URL so it isn't unused.
  if (!SITE.url) throw new Error('SITE.url missing');

  return items;
}
