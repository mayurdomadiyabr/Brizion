import { notFound } from 'next/navigation';
import ProductCard, { Product } from '@/components/ui/ProductCard';

const PRODUCTS: Product[] = [
    { id: '1', slug: 'rice-water-face-wash', name: 'Rice Water Face Wash', subtitle: 'Gentle Cleansing & Brightening', price: 8.99, rating: 4.8, image: '/images/hero/Checkk_proper_bottel_size_2k_delpmaspu.png' },
    { id: '2', slug: 'advanced-face-serum', name: 'Advanced Face Serum', subtitle: 'Deep Hydration & Firming', price: 14.99, rating: 4.9, image: '/images/hero/Replace_image_product_with_this_2k_delpmaspu.png' },
    { id: '3', slug: 'daily-face-moisturizer', name: 'Daily Face Moisturizer', subtitle: 'Barrier Repair & Protection', price: 12.99, rating: 4.7, image: '/images/hero/Reolce_image_product_with_this_2k_delpmaspu.png' }
];

export default async function CollectionPage(props: { params: Promise<{ slug: string }> }) {
    const params = await props.params;
    const { slug } = params;

    // Format title
    const title = slug.charAt(0).toUpperCase() + slug.slice(1).replace('-', ' ');

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">

            {/* Category Header */}
            <div className="mb-12 border-b border-border pb-8">
                <h1 className="text-3xl sm:text-4xl font-serif font-semibold text-foreground mb-4">
                    {title} Collection
                </h1>
                <p className="text-muted-foreground max-w-2xl">
                    Explore our range of science-backed {title.toLowerCase()} care essentials formulated for maximum efficacy and transparency.
                </p>
            </div>

            <div className="flex flex-col lg:flex-row gap-8">

                {/* Sidebar Filters */}
                <aside className="w-full lg:w-64 flex-shrink-0">
                    <div className="sticky top-24 space-y-8">
                        <div>
                            <h3 className="font-medium mb-4 text-foreground">Step</h3>
                            <ul className="space-y-3 text-sm text-muted-foreground">
                                <li className="flex items-center gap-2 cursor-pointer hover:text-foreground"><input type="checkbox" className="rounded" /> Cleanse (4)</li>
                                <li className="flex items-center gap-2 cursor-pointer hover:text-foreground"><input type="checkbox" className="rounded" /> Tone (3)</li>
                                <li className="flex items-center gap-2 cursor-pointer hover:text-foreground"><input type="checkbox" className="rounded" /> Treat (16)</li>
                                <li className="flex items-center gap-2 cursor-pointer hover:text-foreground"><input type="checkbox" className="rounded" /> Moisturize (5)</li>
                                <li className="flex items-center gap-2 cursor-pointer hover:text-foreground"><input type="checkbox" className="rounded" /> SPF (4)</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="font-medium mb-4 text-foreground">Skin Concern</h3>
                            <ul className="space-y-3 text-sm text-muted-foreground">
                                <li className="flex items-center gap-2 cursor-pointer hover:text-foreground"><input type="checkbox" className="rounded" /> Acne (8)</li>
                                <li className="flex items-center gap-2 cursor-pointer hover:text-foreground"><input type="checkbox" className="rounded" /> Dullness (6)</li>
                                <li className="flex items-center gap-2 cursor-pointer hover:text-foreground"><input type="checkbox" className="rounded" /> Aging (5)</li>
                                <li className="flex items-center gap-2 cursor-pointer hover:text-foreground"><input type="checkbox" className="rounded" /> Dryness (4)</li>
                            </ul>
                        </div>
                    </div>
                </aside>

                {/* Product Grid */}
                <div className="flex-1">
                    <div className="flex justify-between items-center mb-6">
                        <span className="text-sm text-muted-foreground">Showing {PRODUCTS.length} products</span>
                        <select className="text-sm bg-transparent border-none outline-none font-medium cursor-pointer">
                            <option>Recommended</option>
                            <option>Best Selling</option>
                            <option>Price: Low to High</option>
                            <option>Price: High to Low</option>
                        </select>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-10 sm:gap-x-6 sm:gap-y-12">
                        {PRODUCTS.map(product => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
}
