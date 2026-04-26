import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { getStripe, toMinorUnits } from '@/lib/stripe';
import { COUNTRIES, isLocale } from '@/lib/locales';
import { PRODUCTS } from '@/lib/products';
import { SITE } from '@/lib/seo';

export const runtime = 'nodejs';

const Body = z.object({
  locale: z.string(),
  lines: z
    .array(
      z.object({
        productId: z.string().min(1),
        qty: z.number().int().min(1).max(99),
      }),
    )
    .min(1)
    .max(20),
});

export async function POST(req: NextRequest) {
  let parsed;
  try {
    parsed = Body.parse(await req.json());
  } catch (e) {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 });
  }
  if (!isLocale(parsed.locale)) {
    return NextResponse.json({ error: 'Invalid locale' }, { status: 400 });
  }
  const country = COUNTRIES[parsed.locale];

  // Re-look-up products + prices server-side; never trust client price.
  const lineItems = parsed.lines.map((l) => {
    const product = PRODUCTS.find((p) => p.id === l.productId);
    if (!product) {
      throw new Response(JSON.stringify({ error: `Unknown productId ${l.productId}` }), {
        status: 400,
      });
    }
    const localPrice = product.priceUsd * country.fx;
    return {
      quantity: l.qty,
      price_data: {
        currency: country.currency.toLowerCase(),
        unit_amount: toMinorUnits(localPrice, country.currency),
        product_data: {
          name: product.name,
          description: product.sub,
          images: [`${SITE.url}${product.img}`],
          metadata: { product_id: product.id, slug: product.slug },
        },
      },
    };
  });

  let stripe;
  try {
    stripe = getStripe();
  } catch (e) {
    const msg = e instanceof Error ? e.message : 'Stripe not configured';
    return NextResponse.json({ error: msg }, { status: 500 });
  }

  const origin = req.headers.get('origin') ?? SITE.url;

  try {
    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      line_items: lineItems,
      success_url: `${origin}/${parsed.locale}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/${parsed.locale}/cart`,
      shipping_address_collection: {
        allowed_countries: [country.code.toUpperCase() as 'US' | 'CA' | 'IN'],
      },
      automatic_tax: { enabled: false },
      allow_promotion_codes: true,
      locale: 'auto',
      metadata: { brz_locale: parsed.locale },
    });
    return NextResponse.json({ id: session.id, url: session.url });
  } catch (e) {
    const msg = e instanceof Error ? e.message : 'Stripe error';
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
