'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const messages = [
    "Enjoy Free Shipping on Orders Over $50",
    "Buy 2 Serums, Get 1 Free Mini Moisturizer",
    "Join Our Trust Circle for Exclusive Rewards"
];

export default function AnnouncementBar() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % messages.length);
        }, 4000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="bg-brand-900 text-brand-50 text-xs sm:text-sm font-medium py-2 text-center relative overflow-hidden h-9 flex items-center justify-center">
            <AnimatePresence mode="wait">
                <motion.p
                    key={index}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="absolute w-full px-4"
                >
                    {messages[index]}
                </motion.p>
            </AnimatePresence>
        </div>
    );
}
