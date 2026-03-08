import Link from 'next/link';
import ProductCard from '@/components/ui/ProductCard';
import Carousel from '@/components/ui/Carousel';
import CategoryCard from '@/components/ui/CategoryCard';
import HeroSlider from '@/components/ui/HeroSlider';

const BEST_SELLERS = [
  {
    id: '1',
    slug: 'rice-water-face-wash',
    name: 'Rice Water Face Wash',
    subtitle: 'Gentle Cleansing & Brightening',
    price: 8.99,
    originalPrice: 10.99,
    rating: 4.8,
    image: '/images/hero/Checkk_proper_bottel_size_2k_delpmaspu.png',
    badge: 'Bestseller'
  },
  {
    id: '2',
    slug: 'advanced-face-serum',
    name: 'Advanced Face Serum',
    subtitle: 'Deep Hydration & Firming',
    price: 14.99,
    originalPrice: 18.99,
    rating: 4.9,
    image: '/images/hero/Replace_image_product_with_this_2k_delpmaspu.png',
    badge: 'New'
  },
  {
    id: '3',
    slug: 'daily-face-moisturizer',
    name: 'Daily Face Moisturizer',
    subtitle: 'Barrier Repair & Protection',
    price: 12.99,
    originalPrice: 15.99,
    rating: 4.7,
    image: '/images/hero/Reolce_image_product_with_this_2k_delpmaspu.png'
  }
];

const CATEGORIES = [
  { title: "Cleansers", slug: "skin", color: "#FDE6D5" },
  { title: "Serums", slug: "skin", color: "#E0F2FE" },
  { title: "Moisturizers", slug: "skin", color: "#E1EAD2" },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">

      {/* Hero Section */}
      <HeroSlider />

      {/* Best Sellers Carousel */}
      <Carousel
        title="Our Best Sellers"
        subtitle="Highly effective routines loved by our community. Dermatologist recommended."
      >
        {BEST_SELLERS.map(product => (
          <div key={product.id} className="w-[70vw] sm:w-72 flex-shrink-0 snap-start">
            <ProductCard product={product} />
          </div>
        ))}
      </Carousel>

      {/* Shop By Category */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-serif text-center mb-12 font-semibold">Shop by Category</h2>

          <div className="flex flex-wrap justify-center gap-6 sm:gap-12">
            {CATEGORIES.map(category => (
              <CategoryCard
                key={category.slug}
                title={category.title}
                slug={category.slug}
                imageBgColor={category.color}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Brand Values */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-serif mb-16 font-semibold">The Future of Personal Care</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Transparency", desc: "Every ingredient listed, every concentration revealed." },
              { title: "Efficacy", desc: "Clinically proven actives at the right pH levels." },
              { title: "Affordable", desc: "Premium skincare accessible to everyone." },
              { title: "Only The Best", desc: "Sourced from world-class suppliers globally." }
            ].map(value => (
              <div key={value.title} className="p-6 rounded-2xl bg-card border border-border shadow-sm">
                <div className="w-12 h-12 bg-brand-100 rounded-full mx-auto mb-4 flex items-center justify-center text-xl">✨</div>
                <h3 className="font-semibold text-lg mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Circle CTA */}
      <section className="bg-brand-900 text-brand-50 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
          <h2 className="text-3xl font-serif mb-4">Brizion Trust Circle</h2>
          <p className="max-w-md text-brand-300 mb-8">Join our loyalty program to earn points, get early access to new launches, and unlock exclusive rewards.</p>
          <Link href="/account/register" className="bg-brand-50 text-brand-900 px-8 py-3 rounded-full font-medium hover:bg-brand-200 transition-colors">
            Join Now
          </Link>
        </div>
      </section>

    </div>
  );
}
