'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const HERO_IMAGES = [
    '/images/hero/Checkk_proper_bottel_size_2k_delpmaspu.png',
    '/images/hero/Reolce_image_product_with_this_2k_delpmaspu.png',
    '/images/hero/Replace_image_product_with_this_2k_delpmaspu.png'
];

export default function HeroSlider() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % HERO_IMAGES.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + HERO_IMAGES.length) % HERO_IMAGES.length);

    return (
        <section className="relative h-[80vh] min-h-[600px] w-full bg-brand-200 overflow-hidden group">

            {/* Slider Images */}
            <div
                className="absolute inset-0 flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {HERO_IMAGES.map((src, index) => (
                    <div key={index} className="w-full h-full flex-shrink-0 relative">
                        <img
                            src={src}
                            alt={`Hero slide ${index + 1}`}
                            className="object-cover w-full h-full"
                        />
                        {/* Gradient Overlay for Text Readability */}
                        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/20 to-transparent" />
                    </div>
                ))}
            </div>

            {/* Navigation Arrows */}
            <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-black/20 text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/40 backdrop-blur-sm"
                aria-label="Previous slide"
            >
                <ChevronLeft className="w-6 h-6" />
            </button>

            <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-black/20 text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/40 backdrop-blur-sm"
                aria-label="Next slide"
            >
                <ChevronRight className="w-6 h-6" />
            </button>

            {/* Pagination Dots */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
                {HERO_IMAGES.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        aria-label={`Go to slide ${index + 1}`}
                        className={`w-2 h-2 rounded-full transition-all ${currentIndex === index ? 'bg-white w-6' : 'bg-white/50'}`}
                    />
                ))}
            </div>

            {/* Hero Content Overlay */}
            <div className="relative h-full container mx-auto px-4 sm:px-6 lg:px-8 flex items-center pointer-events-none">
                <div className="max-w-xl text-brand-50 pointer-events-auto z-10 w-full">
                    <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl mb-6 leading-tight drop-shadow-lg">
                        Efficacy. <br /><span className="italic text-brand-200">Transparency.</span> <br />Results.
                    </h1>
                    <p className="text-lg sm:text-xl mb-8 text-brand-100 max-w-md drop-shadow-md">
                        Science-backed formulations with clinically proven ingredients. No fluff, just what works.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link href="/collections/skin" className="bg-brand-50 text-brand-900 px-8 py-4 rounded-full font-medium text-center hover:bg-white transition-colors">
                            Shop Best Sellers
                        </Link>
                        <Link href="/tools/skin-insights" className="bg-black text-white px-8 py-4 rounded-full font-medium text-center hover:bg-black/80 transition-colors">
                            Take Skin Quiz
                        </Link>
                    </div>
                </div>
            </div>

        </section>
    );
}
