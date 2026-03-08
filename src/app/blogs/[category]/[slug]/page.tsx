export default async function BlogArticlePage(props: { params: Promise<{ category: string, slug: string }> }) {
    const params = await props.params;
    const { category, slug } = params;

    const title = slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

    return (
        <article className="pb-24">
            {/* Article Hero */}
            <section className="bg-brand-100 py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
                <div className="container mx-auto max-w-4xl text-center">
                    <span className="text-xs font-semibold text-brand-600 uppercase tracking-widest mb-4 inline-block">
                        {category} • Reading time: 6 mins
                    </span>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-semibold text-foreground mb-6 leading-tight max-w-3xl mx-auto">
                        {title}
                    </h1>
                    <p className="text-muted-foreground">
                        Medically reviewed by Minimalist Health Specialist — Written by Dr. Sarah Chen (Dermatologist) on March 8, 2026
                    </p>
                </div>
            </section>

            {/* Article Content */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl mt-12 sm:mt-16">

                {/* Placeholder feature image */}
                <div className="aspect-[21/9] w-full bg-muted rounded-xl mb-12 overflow-hidden shadow-sm">
                    <img
                        src="https://images.unsplash.com/photo-1556228720-192a6af4e86e?auto=format&fit=crop&q=80&w=1200"
                        alt="Article featured image"
                        className="w-full h-full object-cover"
                    />
                </div>

                <div className="prose prose-neutral prose-lg max-w-none prose-headings:font-serif prose-headings:font-semibold prose-a:text-brand-600">
                    <p className="lead text-xl text-muted-foreground mb-8">
                        The skincare industry is filled with buzzwords, but what really works at the molecular level? In this comprehensive guide, we strip away the marketing fluff and look directly at the clinical data.
                    </p>

                    <h2>Understanding the Mechanism of Action</h2>
                    <p>
                        When topically applied, active ingredients must permeate the stratum corneum (the outermost layer of the epidermis) to be effective. The molecular weight and pH levels are critical factors. For instance, L-Ascorbic Acid (Vitamin C) requires a pH of under 3.5 to penetrate effectively in a water-based solution.
                    </p>

                    <blockquote>
                        "Efficacy is not about how many ingredients you can pack into a bottle; it's about delivering the correct concentration to the right depth."
                        <br /><em>- Dr. Sarah Chen</em>
                    </blockquote>

                    <h2>Why Concentration Matters</h2>
                    <p>
                        More is not always better. A common misconception is that higher percentages yield faster results. For example:
                    </p>
                    <ul>
                        <li><strong>Niacinamide:</strong> Clinical studies show 2-5% is highly effective. Going above 10% can cause severe irritation for certain skin types.</li>
                        <li><strong>Salicylic Acid:</strong> The FDA approves concentrations between 0.5% to 2% for over-the-counter acne treatments.</li>
                    </ul>

                    <h2>The Ideal Regimen</h2>
                    <p>
                        Building a routine should be a conscious, step-by-step process. Ensure you introduce actives gradually and always finish your morning routine with broad-spectrum sun protection.
                    </p>
                </div>

                {/* Product Callout */}
                <div className="mt-16 p-8 rounded-2xl bg-brand-50 border border-brand-200">
                    <h3 className="font-serif text-2xl mb-2 text-brand-900 font-semibold">Ready to Upgrade Your Routine?</h3>
                    <p className="text-brand-700 mb-6">Discover our scientifically backed Serums tested for optimal efficacy.</p>
                    <a href="/collections/skin" className="inline-block bg-brand-900 text-brand-50 px-6 py-3 rounded-full font-medium hover:bg-brand-700 transition-colors">
                        Shop Treatments
                    </a>
                </div>
            </div>
        </article>
    );
}
