import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { isLocale, type Locale, LOCALES } from '@/lib/locales';
import { buildMetadata, SITE } from '@/lib/seo';
import { JsonLd, breadcrumbsLd } from '@/lib/jsonld';
import { ARTICLES, getArticle } from '@/lib/journal';

export function generateStaticParams() {
  const out: { locale: string; slug: string }[] = [];
  for (const locale of LOCALES) {
    for (const a of ARTICLES) out.push({ locale, slug: a.slug });
  }
  return out;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale)) return {};
  const a = getArticle(slug);
  if (!a) return {};
  return buildMetadata({
    locale,
    path: `/journal/${slug}`,
    title: `${a.title}${a.emTitle ?? ''}`.trim(),
    description: a.dek,
  });
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale: rawLocale, slug } = await params;
  if (!isLocale(rawLocale)) notFound();
  const locale = rawLocale as Locale;
  const a = getArticle(slug);
  if (!a) notFound();

  const articleLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: `${a.title}${a.emTitle ?? ''}`.trim(),
    datePublished: a.date,
    author: { '@type': 'Person', name: a.author },
    publisher: { '@type': 'Organization', name: SITE.name, url: SITE.url },
    description: a.dek,
    articleSection: a.category,
  };

  return (
    <>
      <JsonLd data={articleLd} />
      <JsonLd
        data={breadcrumbsLd(locale, [
          { name: 'Home', path: '' },
          { name: 'Journal', path: '/journal' },
          { name: `${a.title}${a.emTitle ?? ''}`, path: `/journal/${a.slug}` },
        ])}
      />
      <article style={{ padding: '96px 0', maxWidth: 760, margin: '0 auto' }}>
        <div className="wrap">
          <div
            style={{
              fontSize: 11,
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: 'var(--brz-fg-2)',
              fontWeight: 600,
              marginBottom: 18,
            }}
          >
            {a.category} · {a.readMin} min read
          </div>
          <h1
            style={{
              fontFamily: 'var(--brz-font-display)',
              fontWeight: 600,
              fontSize: 'clamp(40px, 5vw, 64px)',
              lineHeight: 1.04,
              letterSpacing: '-0.02em',
              margin: '0 0 24px',
            }}
          >
            {a.title}
            {a.emTitle && (
              <em style={{ fontFamily: 'var(--brz-font-serif)', fontStyle: 'italic' }}>
                {a.emTitle}
              </em>
            )}
          </h1>
          <p
            style={{
              fontFamily: 'var(--brz-font-serif)',
              fontStyle: 'italic',
              fontSize: 22,
              color: 'var(--brz-fg-2)',
              lineHeight: 1.45,
              marginBottom: 32,
            }}
          >
            {a.dek}
          </p>
          <div style={{ fontSize: 12, color: 'var(--brz-fg-2)', marginBottom: 48 }}>
            By {a.author} · {new Date(a.date).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}
          </div>
          <div
            style={{
              aspectRatio: '16/9',
              background: 'linear-gradient(180deg, #2A2A2A 0%, #0A0A0A 100%)',
              marginBottom: 48,
            }}
          />
          <div style={{ fontSize: 18, lineHeight: 1.7, color: 'var(--brz-ink)' }}>
            <p>{a.body}</p>
          </div>
        </div>
      </article>
    </>
  );
}
