import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { isLocale, type Locale, getCountry } from '@/lib/locales';
import { buildMetadata } from '@/lib/seo';
import { CartView } from '@/components/CartView';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return {
    ...buildMetadata({
      locale,
      path: '/cart',
      title: 'Your bag',
      description: 'Review your bag and continue to checkout.',
    }),
    robots: { index: false, follow: false },
  };
}

export default async function CartPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();
  const locale = rawLocale as Locale;
  const country = getCountry(locale);

  return <CartView locale={locale} country={country} />;
}
