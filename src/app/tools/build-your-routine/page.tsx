import Link from 'next/link';

export default function BuildYourRoutinePage() {
    return (
        <div className="bg-muted min-h-[80vh] py-24 flex items-center">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
                <div className="text-center mb-16">
                    <h1 className="text-4xl sm:text-5xl font-serif font-semibold text-foreground mb-4">Build Your Routine Options</h1>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Choose your preferred method to discover a personalized skincare regimen formulated just for your unique needs.
                    </p>
                </div>

                <div className="flex flex-col md:flex-row gap-8 justify-center">

                    {/* AI Path */}
                    <div className="flex-1 bg-card border border-brand-200 rounded-2xl p-8 sm:p-12 text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <div className="w-20 h-20 bg-brand-100 rounded-full flex items-center justify-center mx-auto mb-8">
                            <span className="text-3xl">🤖</span>
                        </div>
                        <h2 className="text-2xl font-serif font-semibold mb-4 text-foreground">Skin Insights</h2>
                        <p className="text-muted-foreground mb-8 text-sm leading-relaxed">
                            Use our advanced AI-based skin scanner. Just upload a selfie and our AI will analyze up to 9 different skin concerns with 95% dermatologist accuracy to recommend the perfect routine.
                        </p>
                        <Link href="/tools/skin-insights" className="inline-block bg-brand-900 text-brand-50 px-8 py-3.5 rounded-full font-medium hover:bg-brand-700 transition-colors w-full">
                            Try Now
                        </Link>
                    </div>

                    {/* Questionnaire Path */}
                    <div className="flex-1 bg-card border border-border rounded-2xl p-8 sm:p-12 text-center shadow-sm hover:shadow-md transition-shadow duration-300">
                        <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center mx-auto mb-8">
                            <span className="text-3xl">📝</span>
                        </div>
                        <h2 className="text-2xl font-serif font-semibold mb-4 text-foreground">Skin Solutions</h2>
                        <p className="text-muted-foreground mb-8 text-sm leading-relaxed">
                            Prefer the classic approach? Answer a quick 3-minute questionnaire about your skin type, habits, and primary concerns to get a customized routine manually reviewed by our experts.
                        </p>
                        <button className="inline-block bg-brand-200 text-brand-900 px-8 py-3.5 rounded-full font-medium hover:bg-brand-300 transition-colors w-full">
                            Take Quiz
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
}
