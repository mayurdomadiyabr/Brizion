import { NextRequest, NextResponse } from 'next/server';
import { getStripe } from '@/lib/stripe';
import type Stripe from 'stripe';

export const runtime = 'nodejs';
// Webhooks require the raw body for signature verification.
export const dynamic = 'force-dynamic';

export async function POST(req: NextRequest) {
  const sig = req.headers.get('stripe-signature');
  const secret = process.env.STRIPE_WEBHOOK_SECRET;
  if (!sig || !secret) {
    return NextResponse.json({ error: 'Missing signature or secret' }, { status: 400 });
  }
  let stripe;
  try {
    stripe = getStripe();
  } catch (e) {
    return NextResponse.json(
      { error: e instanceof Error ? e.message : 'Stripe error' },
      { status: 500 },
    );
  }

  // Raw body required for signature verification.
  const rawBody = await req.text();

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(rawBody, sig, secret);
  } catch (err) {
    const msg = err instanceof Error ? err.message : 'Invalid signature';
    return NextResponse.json({ error: `Webhook Error: ${msg}` }, { status: 400 });
  }

  switch (event.type) {
    case 'checkout.session.completed': {
      const session = event.data.object as Stripe.Checkout.Session;
      // TODO: persist order, send email, decrement inventory.
      // eslint-disable-next-line no-console
      console.log('[stripe] checkout.session.completed', session.id, session.amount_total);
      break;
    }
    case 'charge.refunded': {
      const charge = event.data.object as Stripe.Charge;
      // eslint-disable-next-line no-console
      console.log('[stripe] charge.refunded', charge.id);
      break;
    }
    default:
      // eslint-disable-next-line no-console
      console.log('[stripe] unhandled event', event.type);
  }

  return NextResponse.json({ received: true });
}
