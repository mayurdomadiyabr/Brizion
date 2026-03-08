import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-brand-900 pt-16 pb-8 border-t border-brand-800 text-brand-300">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-12">

                    <div className="space-y-4">
                        <h3 className="text-brand-50 font-serif text-xl mb-4">Brizion.</h3>
                        <p className="text-sm max-w-xs leading-relaxed text-brand-400">
                            High-performance, science-backed skincare crafted with efficacious ingredients and sheer transparency.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-brand-50 font-medium mb-6">Explore</h4>
                        <ul className="space-y-3 text-sm flex flex-col items-start">
                            <li><Link href="/" className="hover:text-brand-50 transition-colors">Our Best Sellers</Link></li>
                            <li><Link href="/collections/skin" className="hover:text-brand-50 transition-colors">Categories</Link></li>
                            <li><Link href="/blogs/skin-care" className="hover:text-brand-50 transition-colors">Blog</Link></li>
                            <li><Link href="/pages/about" className="hover:text-brand-50 transition-colors">Our Values</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-brand-50 font-medium mb-6">Support</h4>
                        <ul className="space-y-3 text-sm flex flex-col items-start">
                            <li><Link href="/pages/contact" className="hover:text-brand-50 transition-colors">Contact Us</Link></li>
                            <li><Link href="/pages/faqs" className="hover:text-brand-50 transition-colors">FAQs</Link></li>
                            <li><Link href="/pages/shipping-policy" className="hover:text-brand-50 transition-colors">Shipping Policy</Link></li>
                            <li><Link href="/pages/return-refund-policy" className="hover:text-brand-50 transition-colors">Returns & Refunds</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-brand-50 font-medium mb-6">Stay Connected</h4>
                        <p className="text-sm text-brand-400 mb-4">Join our community for expert tips and early access to launches.</p>
                        <div className="flex gap-2 w-full max-w-sm">
                            <input
                                type="email"
                                placeholder="Your email address"
                                className="bg-brand-800 border-none rounded-md px-4 py-2 text-sm w-full focus:ring-1 focus:ring-brand-500 text-brand-50 placeholder:text-brand-500"
                            />
                            <button className="bg-brand-50 text-brand-900 px-4 py-2 rounded-md font-medium text-sm hover:bg-brand-200 transition-colors whitespace-nowrap">
                                Subscribe
                            </button>
                        </div>
                    </div>

                </div>

                <div className="border-t border-brand-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-brand-500">
                    <p>© {new Date().getFullYear()} Brizion Science. All rights reserved.</p>
                    <div className="flex gap-4">
                        <Link href="/pages/privacy-policy" className="hover:text-brand-300">Privacy Policy</Link>
                        <Link href="/pages/terms" className="hover:text-brand-300">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
