import { notFound } from 'next/navigation';

export default async function StaticPage(props: { params: Promise<{ slug: string }> }) {
    const params = await props.params;
    const { slug } = params;

    // Basic mock content map
    const contentMap: Record<string, { title: string, content: string }> = {
        'privacy-policy': {
            title: 'Privacy Policy',
            content: 'At Brizion, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy informs you how we collect, use, and protect your data.'
        },
        'terms': {
            title: 'Terms of Service',
            content: 'By accessing or using the Brizion website, you agree to comply with and be bound by the following Terms and Conditions of use.'
        },
        'about': {
            title: 'Our Values',
            content: 'Brizion was founded on the principles of transparency and efficacy. We believe that you deserve to know exactly what goes into your skincare and why.'
        },
        'faqs': {
            title: 'Frequently Asked Questions',
            content: 'Find answers to common questions about our products, shipping, returns, and more.'
        }
    };

    const pageData = contentMap[slug];

    if (!pageData) {
        notFound();
    }

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 max-w-4xl min-h-[60vh]">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-foreground mb-12">
                {pageData.title}
            </h1>

            <div className="prose prose-neutral max-w-none prose-headings:font-serif prose-headings:font-semibold">
                <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                    {pageData.content}
                </p>

                {slug === 'faqs' && (
                    <div className="mt-12 space-y-6">
                        {[1, 2, 3].map(i => (
                            <div key={i} className="border-b border-border pb-6">
                                <h3 className="text-lg font-medium text-foreground mb-2">Sample FAQ Question {i}?</h3>
                                <p className="text-muted-foreground">Detailed answer to the frequently asked question, explaining policies, procedures, or product details.</p>
                            </div>
                        ))}
                    </div>
                )}

                {slug !== 'faqs' && (
                    <>
                        <h2 className="text-2xl font-serif text-foreground mt-12 mb-6">1. Information Collection</h2>
                        <p className="text-muted-foreground leading-relaxed mb-6">
                            Sample extended paragraph for document pages. We may collect personal identification information from Users in a variety of ways.
                        </p>
                        <h2 className="text-2xl font-serif text-foreground mt-8 mb-6">2. Data Usage</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            Further detailed text about how data is used. We adopt appropriate data collection, storage and processing practices.
                        </p>
                    </>
                )}
            </div>
        </div>
    );
}
