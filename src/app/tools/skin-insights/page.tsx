export default function SkinInsightsPage() {
    const categories = [
        'Hydration', 'Lines & Wrinkles', 'Skin Tone',
        'Redness', 'Dark Circles', 'Pores',
        'Uniformness', 'Pigmentation', 'Acne & Blemishes'
    ];

    return (
        <div className="pb-24">

            {/* Hero */}
            <section className="bg-brand-900 text-brand-50 py-24 px-4 sm:px-6 lg:px-8 text-center">
                <div className="container mx-auto max-w-3xl border border-brand-800 rounded-3xl p-8 sm:p-12 bg-black/20 backdrop-blur-md">
                    <h1 className="text-4xl sm:text-5xl font-serif font-semibold mb-6">Understand your skin better with AI</h1>
                    <p className="text-lg text-brand-200 mb-8 max-w-xl mx-auto">
                        Our cutting-edge technology analyzes your skin to deliver highly-accurate, dermatologist-grade insights and a truly personalized skincare routine.
                    </p>
                    <button className="bg-brand-50 text-brand-900 px-10 py-4 rounded-full font-medium text-lg hover:bg-white transition-colors mb-4">
                        Start Now
                    </button>
                    <p className="text-xs text-brand-400 max-w-sm mx-auto">
                        By clicking "Start Now", you consent to our Privacy Policy regarding facial feature analysis. Your data is processed securely and never stored.
                    </p>
                </div>
            </section>

            {/* Advanced & Accurate Stats */}
            <section className="py-20 bg-muted border-b border-border">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
                    <h2 className="text-2xl sm:text-3xl font-serif font-semibold mb-12">AI Powered Skin Analysis</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div>
                            <div className="text-4xl font-serif text-brand-900 mb-2 font-semibold">10,000+</div>
                            <p className="text-sm text-muted-foreground uppercase tracking-widest font-medium">Graded Pictures</p>
                        </div>
                        <div>
                            <div className="text-4xl font-serif text-brand-900 mb-2 font-semibold">95%</div>
                            <p className="text-sm text-muted-foreground uppercase tracking-widest font-medium">Dermatologist Match</p>
                        </div>
                        <div>
                            <div className="text-4xl font-serif text-brand-900 mb-2 font-semibold">15 Years</div>
                            <p className="text-sm text-muted-foreground uppercase tracking-widest font-medium">Of Lab Research</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* How AI Works */}
            <section className="py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
                    <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-center mb-16">How AI works</h2>

                    <div className="flex flex-col md:flex-row gap-16 items-center">

                        <div className="w-full md:w-1/2 aspect-square relative bg-brand-100 rounded-full flex items-center justify-center border-8 border-brand-50 shadow-2xl">
                            <div className="w-3/4 h-3/4 bg-brand-200 rounded-full blur-2xl absolute" />
                            <img
                                src="https://images.unsplash.com/photo-1556228720-192a6af4e86e?auto=format&fit=crop&q=80&w=800"
                                alt="AI Face Scanning Wireframe"
                                className="relative z-10 w-full h-full object-cover rounded-full mix-blend-overlay opacity-80"
                            />
                            <div className="absolute inset-x-0 h-1 bg-brand-500/50 shadow-[0_0_20px_10px_rgba(120,113,108,0.3)] z-20 animate-[scan_3s_ease-in-out_infinite]" />
                        </div>

                        <div className="w-full md:w-1/2">
                            <p className="text-lg text-muted-foreground mb-8">
                                Our algorithm breaks down your facial structures into topographical maps to identify micro-concerns invisible to the naked eye across 9 major categories:
                            </p>

                            <div className="grid grid-cols-2 gap-x-4 gap-y-6">
                                {categories.map((cat, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <div className="w-2 h-2 rounded-full bg-brand-400" />
                                        <span className="font-medium text-foreground text-sm">{cat}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>

                <style dangerouslySetInnerHTML={{
                    __html: `
          @keyframes scan {
            0% { top: 0%; opacity: 0; }
            10% { opacity: 1; }
            90% { opacity: 1; }
            100% { top: 100%; opacity: 0; }
          }
        `}} />
            </section>

            {/* 3 Step Process */}
            <section className="py-20 bg-brand-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-5xl">
                    <h2 className="text-3xl font-serif font-semibold mb-16 text-brand-900">Advanced & Accurate Skin Analysis</h2>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                        {[
                            { num: '01', title: 'Quick Assessment', desc: 'Tell us your age, skin type, and any immediate sensitivity concerns.' },
                            { num: '02', title: 'Take a Selfie', desc: 'Find good natural lighting, remove glasses, and tie your hair back.' },
                            { num: '03', title: 'Get Your Routine', desc: 'Receive your multi-step regimen instantly based on the precise scan.' }
                        ].map((step) => (
                            <div key={step.num} className="bg-card border border-border rounded-2xl p-8 relative overflow-hidden">
                                <div className="text-7xl font-serif text-brand-100 absolute -top-4 -left-4 font-bold opacity-50 z-0">
                                    {step.num}
                                </div>
                                <div className="relative z-10 text-left pt-6">
                                    <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </div>
    );
}
