import { getCountry, type Locale } from '@/lib/locales';

export function AnnouncementBar({ locale }: { locale: Locale }) {
  const c = getCountry(locale);
  const threshold = c.shipping.freeOver;
  // freeOver is already in local currency; format directly.
  const formatted = new Intl.NumberFormat(c.intlTag, {
    style: 'currency',
    currency: c.currency,
    minimumFractionDigits: c.currency === 'INR' ? 0 : 0,
    maximumFractionDigits: c.currency === 'INR' ? 0 : 0,
  }).format(threshold);

  return (
    <div
      style={{
        background: 'var(--brz-ink)',
        color: '#fff',
        textAlign: 'center',
        padding: '10px 16px',
        fontFamily: 'var(--brz-font-sans)',
        fontSize: 12,
        letterSpacing: '0.18em',
        textTransform: 'uppercase',
        fontWeight: 500,
      }}
    >
      Free shipping on orders {formatted}+ &nbsp;·&nbsp; {c.guarantee}
    </div>
  );
}
