import Link from 'next/link';

export default function BlogIndex() {
    const categories = [
        { title: "No BS Guides", slug: "guide", count: 10, desc: "Deep dives into proven ingredients." },
        { title: "Skincare Wisdom", slug: "skin-care", count: 120, desc: "Expert tips for a healthy skin barrier." },
        { title: "Hair Care Lab", slug: "hair-care", count: 25, desc: "Science-backed hair repair routines." },
        { title: "Company News", slug: "news", count: 8, desc: "Product launches and Brizion updates." },
    ];

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
            <div className="text-center mb-16">
                <h1 className="text-4xl sm:text-5xl font-serif font-semibold text-foreground mb-4">Knowledge Lab</h1>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    Dermatologist-reviewed, science-backed guides demystifying skincare ingredients, so you know exactly what is going on your skin.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {categories.map((cat) => (
                    <Link
                        key={cat.slug}
                        href={`/blogs/${cat.slug}`}
                        className="group block p-8 rounded-2xl bg-card border border-border shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-brand-100 rounded-full blur-3xl -mr-16 -mt-16 opacity-50 group-hover:bg-brand-200 transition-colors duration-500"></div>

                        <div className="relative z-10">
                            <div className="flex justify-between items-start mb-4">
                                <h2 className="text-2xl font-serif font-semibold text-foreground group-hover:text-brand-600 transition-colors">
                                    {cat.title}
                                </h2>
                                <span className="text-xs font-medium px-3 py-1 bg-muted rounded-full text-foreground">
                                    {cat.count} Articles
                                </span>
                            </div>
                            <p className="text-muted-foreground mb-6">{cat.desc}</p>
                            <div className="flex items-center text-sm font-semibold text-brand-900 gap-2 group-hover:gap-3 transition-all">
                                Explore <span className="text-xl leading-none">→</span>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
