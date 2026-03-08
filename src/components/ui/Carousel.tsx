'use client';

import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CarouselProps {
    title: string;
    subtitle?: string;
    children: React.ReactNode;
}

export default function Carousel({ title, subtitle, children }: CarouselProps) {
    const scrollRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const { current } = scrollRef;
            const scrollAmount = direction === 'left' ? -current.offsetWidth / 2 : current.offsetWidth / 2;
            current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    return (
        <section className="py-12 sm:py-16 overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-8 flex items-end justify-between">
                <div>
                    <h2 className="text-2xl sm:text-3xl font-serif text-foreground font-semibold tracking-tight">{title}</h2>
                    {subtitle && <p className="text-muted-foreground mt-2 text-sm max-w-xl">{subtitle}</p>}
                </div>

                <div className="hidden sm:flex items-center gap-2">
                    <button
                        onClick={() => scroll('left')}
                        className="p-2 rounded-full border border-border text-foreground hover:bg-muted transition-colors disabled:opacity-50"
                        aria-label="Scroll left"
                    >
                        <ChevronLeft className="h-5 w-5" />
                    </button>
                    <button
                        onClick={() => scroll('right')}
                        className="p-2 rounded-full border border-border text-foreground hover:bg-muted transition-colors"
                        aria-label="Scroll right"
                    >
                        <ChevronRight className="h-5 w-5" />
                    </button>
                </div>
            </div>

            <div className="relative">
                <div
                    ref={scrollRef}
                    className="flex overflow-x-auto gap-4 sm:gap-6 px-4 sm:px-6 lg:px-8 snap-x snap-mandatory hide-scrollbar pb-6"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {/* Child elements should have min-w-[size] and snap-start */}
                    {children}
                </div>
            </div>

            {/* Custom CSS to hide scrollbar across browsers if inline styles fail */}
            <style dangerouslySetInnerHTML={{
                __html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}} />
        </section>
    );
}
