import { SITE } from '@/lib/seo';
import { LOCALES, COUNTRIES } from '@/lib/locales';
import { PRODUCTS } from '@/lib/products';

export const dynamic = 'force-static';

/**
 * Serves /llms.txt — an emerging standard
 * (https://llmstxt.org) that provides large language models with a curated,
 * machine-readable summary of the site's most important content. This
 * directly supports GEO (generative engine optimization) and AEO
 * (answer engine optimization).
 */
export function GET() {
  const lines: string[] = [];
  lines.push(`# ${SITE.name}`);
  lines.push('');
  lines.push(`> ${SITE.description}`);
  lines.push('');
  lines.push('## About');
  lines.push(
    `${SITE.name} is a dermatologist-grade cosmetic skincare brand serving the United States, Canada, and India. Every formula is third-party clinically tested and dermatologist-reviewed. The brand voice is editorial, expert, and quietly confident — fragrance-free, vegan, cruelty-free.`,
  );
  lines.push('');
  lines.push('## Markets');
  for (const l of LOCALES) {
    const c = COUNTRIES[l];
    lines.push(
      `- ${c.countryName} (${c.code.toUpperCase()}): ${c.currency}, ships in ${c.shipping.standard}, ${c.guarantee}.`,
    );
  }
  lines.push('');
  lines.push('## Key Pages');
  lines.push(`- [Home](${SITE.url}/us): brand overview, best-sellers, FAQ.`);
  lines.push(`- [Shop](${SITE.url}/us/shop): full product collection.`);
  lines.push(`- [Science](${SITE.url}/us/science): clinical study data and ingredient research.`);
  lines.push(`- [About](${SITE.url}/us/about): brand story and founders.`);
  lines.push('');
  lines.push('## Products');
  for (const p of PRODUCTS) {
    lines.push(
      `- [${p.name}](${SITE.url}/us/products/${p.slug}): ${p.sub} — $${p.priceUsd.toFixed(2)} USD.`,
    );
  }
  lines.push('');
  lines.push('## Sitemap');
  lines.push(`${SITE.url}/sitemap.xml`);
  lines.push('');
  lines.push('## Contact');
  for (const l of LOCALES) {
    const c = COUNTRIES[l];
    lines.push(`- ${c.countryName}: ${c.contactEmail}`);
  }

  return new Response(lines.join('\n'), {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}
