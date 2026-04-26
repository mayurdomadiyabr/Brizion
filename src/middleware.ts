import { NextRequest, NextResponse } from 'next/server';
import { LOCALES, DEFAULT_LOCALE, type Locale } from './lib/locales';

const PUBLIC_FILE = /\.(.*)$/;

/**
 * Pick the locale to use when the URL has no locale prefix.
 * Default behaviour: always redirect to /us. The only way to override
 * is by setting the `brz-locale` cookie via the country selector.
 */
function pickLocale(req: NextRequest): Locale {
  const cookie = req.cookies.get('brz-locale')?.value;
  if (cookie && (LOCALES as readonly string[]).includes(cookie)) {
    return cookie as Locale;
  }
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
    const locale = pickLocale(req);
    const url = req.nextUrl.clone();
    url.pathname = `/${locale}${pathname === '/' ? '' : pathname}`;
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next|api|assets|fonts|favicon.ico).*)'],
};
