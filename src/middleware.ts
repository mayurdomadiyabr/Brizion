import { NextRequest, NextResponse } from 'next/server';
import { LOCALES, DEFAULT_LOCALE, type Locale } from './lib/locales';

const PUBLIC_FILE = /\.(.*)$/;

function pickLocaleFromHeader(req: NextRequest): Locale {
  // Cookie has highest priority
  const cookie = req.cookies.get('brz-locale')?.value;
  if (cookie && (LOCALES as readonly string[]).includes(cookie)) {
    return cookie as Locale;
  }
  // Country header set by Vercel/edge providers
  const country = req.headers.get('x-vercel-ip-country')?.toLowerCase();
  if (country === 'us') return 'us';
  if (country === 'ca') return 'ca';
  if (country === 'in') return 'in';
  // Fall back to Accept-Language
  const accept = req.headers.get('accept-language')?.toLowerCase() ?? '';
  if (accept.includes('en-in') || accept.includes('hi')) return 'in';
  if (accept.includes('en-ca') || accept.includes('fr-ca')) return 'ca';
  return DEFAULT_LOCALE;
}

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/assets') ||
    pathname.startsWith('/fonts') ||
    pathname === '/favicon.ico' ||
    PUBLIC_FILE.test(pathname)
  ) {
    return NextResponse.next();
  }

  const segments = pathname.split('/').filter(Boolean);
  const first = segments[0];
  const hasLocale = !!first && (LOCALES as readonly string[]).includes(first);

  if (!hasLocale) {
    const locale = pickLocaleFromHeader(req);
    const url = req.nextUrl.clone();
    url.pathname = `/${locale}${pathname === '/' ? '' : pathname}`;
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next|api|assets|fonts|favicon.ico).*)'],
};
