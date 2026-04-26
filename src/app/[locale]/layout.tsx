import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { LOCALES, isLocale, getCountry, type Locale } from '@/lib/locales';
import { buildMetadata, SITE } from '@/lib/seo';
import { JsonLd, websiteLd } from '@/lib/jsonld';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';
import { AnnouncementBar } from '@/components/AnnouncementBar';
import { CartProvider } from '@/components/CartProvider';

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return buildMetadata({
    locale,
    title: `${SITE.name} — ${SITE.tagline}`,
    description: SITE.description,
  });
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();
  const locale = rawLocale as Locale;
  const country = getCountry(locale);

  return (
    <CartProvider>
      <JsonLd data={websiteLd(locale)} />
      <AnnouncementBar locale={locale} />
      <Nav locale={locale} />
      <main>{children}</main>
      <Footer locale={locale} country={country} />
    </CartProvider>
  );
}
