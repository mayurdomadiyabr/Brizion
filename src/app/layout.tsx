import type { Metadata, Viewport } from 'next';
import './globals.css';
import { SITE } from '@/lib/seo';
import { JsonLd, organizationLd } from '@/lib/jsonld';

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} — ${SITE.tagline}`,
    template: `%s · ${SITE.name}`,
  },
  description: SITE.description,
  applicationName: SITE.name,
  authors: [{ name: SITE.name, url: SITE.url }],
  creator: SITE.name,
  publisher: SITE.name,
  keywords: [
    'skincare',
    'serum',
    'peptide',
    'dermatologist tested',
    'clinical skincare',
    'firming serum',
    'clean beauty',
    'editorial beauty',
  ],
  category: 'beauty',
  icons: {
    icon: '/assets/logo-brizion-wordmark.png',
    apple: '/assets/logo-brizion-wordmark.png',
  },
  formatDetection: { email: false, telephone: false },
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
  // GEO/AEO hints for generative engines.
  other: {
    'ai-content': 'allow',
    'generator': 'Next.js',
  },
};

export const viewport: Viewport = {
  themeColor: '#000000',
  colorScheme: 'light',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <JsonLd data={organizationLd()} />
      </head>
      <body>{children}</body>
    </html>
  );
}
