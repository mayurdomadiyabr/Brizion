export default async function BlogCategoryPage(props: { params: Promise<{ category: string }> }) {
    const params = await props.params;
    const { category } = params;

    const title = category.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="border-b border-border pb-8 mb-12">
                <h1 className="text-3xl sm:text-4xl font-serif font-semibold text-foreground mb-4">
                    {title}
                </h1>
                <p className="text-muted-foreground max-w-2xl">
                    Explore all articles in the {title} category authored by our certified dermatologists.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {[1, 2, 3, 4, 5, 6].map(i => (
                    <a key={i} href={`/blogs/${category}/sample-article-${i}`} className="group flex flex-col h-full">
                        <div className="aspect-[16/9] w-full bg-brand-200 rounded-xl overflow-hidden mb-4 relative">
                            <img
                                src={`https://images.unsplash.com/photo-1556228720-192a6af4e86e?auto=format&fit=crop&q=80&w=800`}
                                alt="Article cover"
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                        <div className="flex flex-col flex-1">
                            <span className="text-xs font-semibold text-brand-500 uppercase tracking-wider mb-2">{title} • March 8, 2026</span>
                            <h3 className="text-xl font-serif font-semibold text-foreground mb-2 group-hover:text-brand-600 transition-colors leading-tight">
                                The Science Behind Efficacious Formulations (Part {i})
                            </h3>
                            <p className="text-muted-foreground text-sm line-clamp-2 mb-4">
                                What makes active ingredients penetrate the dermal layer? We break down the absolute truth behind the molecules that power our best-selling serums.
                            </p>
                            <span className="mt-auto text-sm font-medium text-brand-900 flex items-center gap-1 group-hover:gap-2 transition-all">
                                Read Article <span className="text-lg leading-none">→</span>
                            </span>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
}
