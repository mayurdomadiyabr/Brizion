import Image from 'next/image';
import Carousel from '@/components/ui/Carousel';
import ProductCard from '@/components/ui/ProductCard';

export default async function ProductDetailPage(props: { params: Promise<{ slug: string }> }) {
    const params = await props.params;
    const { slug } = params;

    // Mock product data based on slug
    const fallbackImages = [
        '/images/hero/Checkk_proper_bottel_size_2k_delpmaspu.png',
        '/images/hero/Replace_image_product_with_this_2k_delpmaspu.png',
        '/images/hero/Reolce_image_product_with_this_2k_delpmaspu.png'
    ];

    const product = {
        id: '1',
        slug: slug,
        name: 'Advanced Face Serum',
        tagline: 'Deep Hydration & Firming',
        price: 14.99,
        originalPrice: 18.99,
        description: 'A scientifically formulated serum that penetrates deeper to provide multi-level hydration. Reduces fine lines and plumps skin instantly.',
        images: fallbackImages
    };

    return (
        <div className="pb-24">
            {/* Top Section */}
            <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-16">
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">

                    {/* Image Gallery */}
                    <div className="w-full lg:w-1/2">
                        <div className="aspect-[4/5] bg-brand-100 rounded-2xl overflow-hidden mb-4 relative">
                            <img
                                src={product.images[0]}
                                alt={product.name}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="flex gap-4 overflow-x-auto hide-scrollbar snap-x snap-mandatory">
                            {product.images.map((img: string, i: number) => (
                                <div key={i} className="aspect-[4/5] bg-muted relative rounded-2xl overflow-hidden cursor-crosshair">
                                    <img src={img} alt={`${product.name} gallery ${i + 1}`} className="object-cover w-full h-full" />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Product Details */}
                    <div className="w-full lg:w-1/2 flex flex-col justify-center">
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold tracking-tight text-foreground mb-4">
                            Advanced Face Serum
                        </h1>
                        <p className="text-lg font-medium text-brand-700 mb-4">Deep Hydration & Firming without the Oily Feel</p>

                        <div className="flex items-center gap-3 mb-6">
                            <span className="text-2xl font-semibold">${product.price.toFixed(2)}</span>
                            {product.originalPrice && (
                                <span className="text-lg text-muted-foreground line-through">${product.originalPrice.toFixed(2)}</span>
                            )}
                            <span className="text-sm text-brand-500 ml-2">(incl. of all taxes)</span>
                        </div>

                        <p className="text-muted-foreground leading-relaxed mb-8">
                            {product.description}
                        </p>

                        {/* Badges */}
                        <div className="flex gap-4 mb-8">
                            {['Fragrance Free', 'Silicone Free', 'pH 5.0 - 6.0'].map(badge => (
                                <div key={badge} className="flex flex-col items-center gap-2">
                                    <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-xl">✨</div>
                                    <span className="text-xs text-center font-medium text-muted-foreground">{badge}</span>
                                </div>
                            ))}
                        </div>

                        <div className="flex gap-4 items-center mb-12">
                            <button className="flex-1 bg-brand-900 text-brand-50 h-14 rounded-full font-medium text-lg hover:bg-brand-700 transition-colors shadow-lg shadow-brand-900/20">
                                Add to Cart
                            </button>
                        </div>

                        {/* Accordion Info Placeholder */}
                        <div className="border-t border-border pt-6 mt-auto">
                            {['What makes it potent?', 'How to Use', 'Ingredients'].map((tab, i) => (
                                <div key={tab} className="flex justify-between items-center py-4 border-b border-border cursor-pointer group">
                                    <span className="font-medium group-hover:text-brand-600 transition-colors">{tab}</span>
                                    <span className="text-2xl font-light">+</span>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            </section>

            {/* Cross-Sell Carousel */}
            <div className="mt-16 bg-muted py-8">
                <Carousel title="Goes Well With">
                    {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="min-w-[200px] border border-border rounded-xl p-4 bg-card cursor-pointer hover:border-brand-300 transition-colors">
                            <div className="aspect-square bg-muted rounded-lg mb-3 overflow-hidden">
                                <img src="/images/hero/Reolce_image_product_with_this_2k_delpmaspu.png" alt="Cross sell product" className="w-full h-full object-cover" />
                            </div>
                            <h4 className="font-semibold text-sm mb-1">Daily Face Moisturizer</h4>
                        </div>
                    ))}
                </Carousel>
            </div>

        </div>
    );
}
