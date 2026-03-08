'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Search, User, ShoppingBag, Menu } from 'lucide-react';
import CartDrawer from '@/components/ui/CartDrawer';

export default function Header() {
    const [isCartOpen, setIsCartOpen] = useState(false);

    return (
        <>
            <header className="sticky top-0 z-40 glass border-b border-border w-full">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex h-16 items-center justify-between">

                        {/* Mobile Menu */}
                        <div className="flex lg:hidden items-center">
                            <button className="p-2 -ml-2 text-foreground hover:bg-muted rounded-md transition-colors">
                                <Menu className="h-5 w-5" />
                            </button>
                            <button className="p-2 ml-1 text-foreground hover:bg-muted rounded-md transition-colors">
                                <Search className="h-5 w-5" />
                            </button>
                        </div>

                        {/* Logo */}
                        <div className="flex-1 lg:flex-none flex justify-center lg:justify-start">
                            <Link href="/" className="font-serif text-2xl tracking-tight font-semibold text-foreground">
                                Brizion.
                            </Link>
                        </div>

                        {/* Desktop Nav */}
                        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-muted-foreground">
                            <Link href="/collections/skin" className="hover:text-foreground transition-colors">Shop All</Link>
                            <Link href="/tools/skin-insights" className="hover:text-foreground transition-colors">Skin Quiz</Link>
                            <Link href="/blogs/guide" className="hover:text-foreground transition-colors">Knowledge Lab</Link>
                        </nav>

                        {/* Right Icons */}
                        <div className="flex items-center gap-2 sm:gap-4">
                            <button className="hidden lg:block p-2 text-foreground hover:bg-muted rounded-full transition-colors">
                                <Search className="h-5 w-5" />
                            </button>
                            <Link href="/account" className="p-2 text-foreground hover:bg-muted rounded-full transition-colors hidden sm:block">
                                <User className="h-5 w-5" />
                            </Link>
                            <button
                                onClick={() => setIsCartOpen(true)}
                                className="p-2 text-foreground hover:bg-muted rounded-full transition-colors relative group"
                            >
                                <ShoppingBag className="h-5 w-5" />
                                <span className="absolute top-1 right-1 h-2 w-2 bg-foreground rounded-full group-hover:bg-brand-500 transition-colors"></span>
                            </button>
                        </div>

                    </div>
                </div>
            </header>

            <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
        </>
    );
}
