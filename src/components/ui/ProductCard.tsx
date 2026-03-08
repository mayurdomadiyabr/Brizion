import Image from 'next/image';
import Link from 'next/link';

export interface Product {
    id: string;
    slug: string;
    name: string;
    subtitle: string;
    price: number;
    originalPrice?: number;
    rating?: number;
    image: string;
    badge?: string;
}

interface ProductCardProps {
    product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
    return (
        <div className="group flex flex-col justify-between h-full bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-border">
            <Link href={`/products/${product.slug}`} className="block relative aspect-[4/5] bg-brand-100 overflow-hidden">
                {product.badge && (
                    <div className="absolute top-3 left-3 z-10 bg-card/90 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase text-foreground">
                        {product.badge}
                    </div>
                )}

                {/* Simple placeholder for the image since we don't have real images yet */}
                {product.image ? (
                    <img
                        src={product.image}
                        alt={product.name}
                        className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700 ease-in-out"
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center text-brand-300 text-sm">
                        No Image
                    </div>
                )}

                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
            </Link>

            <div className="p-4 flex flex-col flex-1">
                <Link href={`/products/${product.slug}`} className="block">
                    <h3 className="text-foreground font-semibold text-sm leading-tight mb-1 group-hover:text-brand-600 transition-colors">
                        {product.name}
                    </h3>
                    <p className="text-muted-foreground text-xs line-clamp-2 mb-3">
                        {product.subtitle}
                    </p>
                </Link>

                <div className="mt-auto flex items-end justify-between">
                    <div className="flex flex-col">
                        {product.rating && (
                            <div className="flex items-center gap-1 mb-1">
                                <span className="text-accent-gold text-xs">★★★★★</span>
                                <span className="text-[10px] text-muted-foreground">({product.rating})</span>
                            </div>
                        )}
                        <div className="flex items-center gap-2">
                            <span className="font-semibold text-sm">${product.price.toFixed(2)}</span>
                            {product.originalPrice && (
                                <span className="text-xs text-muted-foreground line-through">${product.originalPrice.toFixed(2)}</span>
                            )}
                        </div>
                    </div>

                    <button className="h-8 w-8 rounded-full bg-brand-900 text-brand-50 flex items-center justify-center hover:bg-brand-700 transition-colors transform active:scale-95">
                        <span className="text-lg leading-none mb-0.5">+</span>
                    </button>
                </div>
            </div>
        </div>
    );
}
