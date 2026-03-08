import Carousel from '@/components/ui/Carousel';
import ProductCard from '@/components/ui/ProductCard';
import Link from 'next/link';

export default async function OfferLandingPage(props: { params: Promise<{ slug: string }> }) {
    const params = await props.params;
    const { slug } = params;

    // Format the title from the slug (e.g. minimalist-b2g1-offer -> "B2G1 Offer")
    const titleText = slug.replace('minimalist-', '').replace('-offer', '').split('-').map(w => w.toUpperCase()).join(' ');

    // Reuse the Best Sellers list
    const BEST_SELLERS = [
        { id: '1', slug: 'rice-water-face-wash', name: 'Rice Water Face Wash', subtitle: 'Gentle Cleansing & Brightening', price: 8.99, rating: 4.8, image: '/images/hero/Checkk_proper_bottel_size_2k_delpmaspu.png' },
        { id: '2', slug: 'advanced-face-serum', name: 'Advanced Face Serum', subtitle: 'Deep Hydration & Firming', price: 14.99, rating: 4.9, image: '/images/hero/Replace_image_product_with_this_2k_delpmaspu.png' },
        { id: '3', slug: 'daily-face-moisturizer', name: 'Daily Face Moisturizer', subtitle: 'Barrier Repair & Protection', price: 12.99, rating: 4.7, image: '/images/hero/Reolce_image_product_with_this_2k_delpmaspu.png' }
    ];

    return (
        <div className="flex flex-col min-h-screen">

            {/* Promotional Hero Specific to this Offer */}
            <section className="relative h-[60vh] min-h-[500px] w-full bg-brand-900 overflow-hidden flex items-center text-center justify-center text-brand-50 py-16">
                <div className="absolute inset-0 bg-gradient-to-tr from-brand-900 to-brand-700 opacity-90" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent" />

                <div className="relative z-10 px-4 max-w-2xl">
                    <div className="inline-block bg-accent-gold/20 border border-accent-gold/50 text-accent-gold font-bold tracking-widest uppercase text-xs px-3 py-1 rounded-full mb-6">
                        Exclusive Deal Active
                    </div>
                    <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl mb-6 font-semibold shadow-sm">
                        {titleText}
                    </h1>
                    <p className="text-xl sm:text-2xl mb-8 text-brand-200 font-light">
                        Claim your exclusive reward today. Build your perfect regimen and save instantly at checkout.
                    </p>
                    <button className="bg-brand-50 text-brand-900 px-10 py-4 rounded-full font-medium hover:bg-white transition-colors text-lg shadow-xl shadow-black/20">
                        Shop The Offer Now
                    </button>
                </div>
            </section>

            {/* Reused Homepage Component: Best Sellers */}
            <div className="mt-12">
                <Carousel
                    title="Offer Eligible Best Sellers"
                    subtitle="Add these community favorites to your cart to instantly qualify for the promotion."
                >
                    {BEST_SELLERS.map(product => (
                        <div key={product.id} className="w-[70vw] sm:w-72 flex-shrink-0 snap-start">
                            <ProductCard product={product} />
                        </div>
                    ))}
                </Carousel>
            </div>

            {/* Reused Homepage Component: Brand Values Boxed */}
            <section className="py-20 bg-muted border-y border-border">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
                    <h2 className="text-3xl font-serif mb-10 font-semibold text-foreground">Why choose Brizion?</h2>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {['Transparency', 'Efficacy', 'Affordable', 'The Best Ingredients'].map((value) => (
                            <div key={value} className="bg-card p-6 rounded-2xl shadow-sm border border-border">
                                <span className="text-2xl mb-2 block">✨</span>
                                <span className="font-medium text-sm text-foreground">{value}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Utility CTA */}
            <section className="py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-2xl">
                    <h2 className="text-3xl font-serif font-semibold mb-6">Not sure what your skin needs?</h2>
                    <p className="text-muted-foreground mb-8">
                        Before checking out, let our proprietary AI skin analyzer scan your face and recommend the precise serums tailored completely to your profile.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link href="/tools/skin-insights" className="bg-brand-900 text-brand-50 px-8 py-3 rounded-full font-medium hover:bg-brand-800 transition-colors w-full sm:w-auto">
                            Try the Skin Analyzer
                        </Link>
                        <Link href="/collections/skin" className="bg-transparent border border-border text-foreground px-8 py-3 rounded-full font-medium hover:bg-muted transition-colors w-full sm:w-auto">
                            Browse Manually
                        </Link>
                    </div>
                </div>
            </section>

        </div>
    );
}
