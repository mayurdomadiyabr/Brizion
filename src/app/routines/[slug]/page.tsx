import Link from 'next/link';

export default async function RoutinePage(props: { params: Promise<{ slug: string }> }) {
    const params = await props.params;
    const { slug } = params;

    const title = slug.replace('routine-for-', '').split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

    const routineSteps = [
        {
            step: 'Cleanse',
            name: 'Rice Water Face Wash',
            price: 8.99,
            size: '100ml',
            when: 'AM / PM',
            frequency: 'Everyday',
            image: '/images/hero/Checkk_proper_bottel_size_2k_delpmaspu.png'
        },
        {
            step: 'Treat',
            name: 'Advanced Face Serum',
            price: 14.99,
            size: '30ml',
            when: 'AM / PM',
            frequency: 'Everyday',
            image: '/images/hero/Replace_image_product_with_this_2k_delpmaspu.png'
        },
        {
            step: 'Moisturize',
            name: 'Daily Face Moisturizer',
            price: 12.99,
            size: '50g',
            when: 'AM / PM',
            frequency: 'Everyday',
            image: '/images/hero/Reolce_image_product_with_this_2k_delpmaspu.png'
        }
    ];


    return (
        <div className="bg-muted min-h-screen py-16 sm:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
                <div className="text-center mb-12 border-b border-border pb-8">
                    <span className="text-xs font-semibold text-brand-600 uppercase tracking-widest mb-4 inline-block">
                        Dermatologist Recommended
                    </span>
                    <h1 className="text-3xl sm:text-5xl font-serif font-semibold text-foreground mb-4">
                        Routine for {title}
                    </h1>
                    <p className="text-muted-foreground">
                        A scientifically curated regimen targeting {title.toLowerCase()} to restore barrier health and balance.
                    </p>
                    <div className="mt-8">
                        <button className="bg-brand-900 text-brand-50 px-8 py-3 rounded-full font-medium hover:bg-brand-700 transition-colors">
                            Add Full Routine to Cart
                        </button>
                    </div>
                </div>

                <div className="space-y-6">
                    {routineSteps.map((item, idx) => (
                        <div key={idx} className="bg-card border border-border rounded-2xl p-4 sm:p-6 flex flex-col sm:flex-row gap-6 items-center shadow-sm">
                            <div className="w-24 h-32 bg-brand-100 rounded-lg overflow-hidden flex-shrink-0">
                                <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                            </div>

                            <div className="flex-1 text-center sm:text-left">
                                <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Step {idx + 1}: {item.step}</span>
                                <h3 className="text-lg font-semibold text-foreground mt-1 mb-2">{item.name}</h3>

                                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 text-sm text-brand-600 mb-4">
                                    <div className="bg-brand-50 px-3 py-1 rounded-full">When: <strong>{item.when}</strong></div>
                                    <div className="bg-brand-50 px-3 py-1 rounded-full">Frequency: <strong>{item.frequency}</strong></div>
                                </div>

                                <div className="flex items-center justify-center sm:justify-start gap-4">
                                    <span className="text-lg font-semibold">${item.price} <span className="text-xs text-muted-foreground font-normal">/ {item.size}</span></span>
                                </div>
                            </div>

                            <div className="w-full sm:w-auto flex flex-col gap-2">
                                <button className="w-full sm:w-32 bg-foreground text-card py-2.5 rounded-full text-sm font-medium hover:bg-brand-700 transition-colors">
                                    Add to Cart
                                </button>
                                <Link href={`/products/mock-slug`} className="w-full sm:w-32 text-center text-sm font-medium text-brand-600 hover:text-brand-900 transition-colors py-2">
                                    View Details
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
