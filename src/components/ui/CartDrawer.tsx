'use client';

import { useState } from 'react';
import { X, ShoppingBag, Plus, Minus, Trash2 } from 'lucide-react';
import Link from 'next/link';

interface CartDrawerProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function CartDrawer({ isOpen, onClose }: CartDrawerProps) {
    // Mock cart items
    const [items, setItems] = useState([
        {
            id: '1',
            name: 'Rice Water Face Wash',
            price: 8.99,
            quantity: 1,
            image: '/images/hero/Checkk_proper_bottel_size_2k_delpmaspu.png',
        },
        {
            id: '2',
            name: 'Advanced Face Serum',
            price: 14.99,
            quantity: 2,
            image: '/images/hero/Replace_image_product_with_this_2k_delpmaspu.png',
        }
    ]);

    const updateQuantity = (id: string, delta: number) => {
        setItems(items.map(item => {
            if (item.id === id) {
                const newQuantity = Math.max(1, item.quantity + delta);
                return { ...item, quantity: newQuantity };
            }
            return item;
        }));
    };

    const removeItem = (id: string) => {
        setItems(items.filter(item => item.id !== id));
    };

    const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    if (!isOpen) return null;

    return (
        <>
            <div
                className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 transition-opacity"
                onClick={onClose}
            />

            <div className="fixed inset-y-0 right-0 z-50 w-full max-w-sm bg-card shadow-2xl flex flex-col transform transition-transform duration-300">

                {/* Header */}
                <div className="flex items-center justify-between p-4 border-b border-border">
                    <h2 className="text-xl font-serif font-semibold text-foreground flex items-center gap-2">
                        <ShoppingBag className="w-5 h-5" />
                        Your Cart
                    </h2>
                    <button
                        onClick={onClose}
                        className="p-2 text-muted-foreground hover:bg-muted hover:text-foreground rounded-full transition-colors"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>

                {/* Promo Banner */}
                <div className="bg-brand-100 text-brand-800 p-3 text-center text-xs font-medium border-b border-brand-200">
                    You have earned <strong>{Math.floor(subtotal * 10)} MCash</strong> with this order!
                </div>

                {/* Items */}
                <div className="flex-1 overflow-y-auto p-4 space-y-6">
                    {items.length === 0 ? (
                        <div className="flex flex-col items-center justify-center h-full text-muted-foreground space-y-4">
                            <ShoppingBag className="w-12 h-12 opacity-20" />
                            <p>Your cart is empty.</p>
                            <button
                                onClick={onClose}
                                className="mt-4 bg-brand-900 text-brand-50 px-6 py-2 rounded-full font-medium text-sm hover:bg-brand-700 transition-colors"
                            >
                                Continue Shopping
                            </button>
                        </div>
                    ) : (
                        items.map(item => (
                            <div key={item.id} className="flex gap-4">
                                <div className="w-20 h-24 bg-brand-100 rounded-lg overflow-hidden flex-shrink-0">
                                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                                </div>
                                <div className="flex-1 flex flex-col">
                                    <div className="flex justify-between items-start gap-2 mb-1">
                                        <h3 className="text-sm font-medium text-foreground line-clamp-2">{item.name}</h3>
                                        <button
                                            onClick={() => removeItem(item.id)}
                                            className="text-muted-foreground hover:text-red-500 transition-colors"
                                        >
                                            <Trash2 className="w-4 h-4" />
                                        </button>
                                    </div>
                                    <div className="text-sm font-semibold text-foreground mb-3">
                                        ${item.price.toFixed(2)}
                                    </div>

                                    <div className="flex items-center mt-auto">
                                        <div className="flex items-center border border-border rounded-full bg-card">
                                            <button
                                                onClick={() => updateQuantity(item.id, -1)}
                                                className="w-7 h-7 flex items-center justify-center text-muted-foreground hover:bg-muted rounded-l-full"
                                            >
                                                <Minus className="w-3 h-3" />
                                            </button>
                                            <span className="w-8 text-center text-sm font-medium">{item.quantity}</span>
                                            <button
                                                onClick={() => updateQuantity(item.id, 1)}
                                                className="w-7 h-7 flex items-center justify-center text-muted-foreground hover:bg-muted rounded-r-full"
                                            >
                                                <Plus className="w-3 h-3" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>

                {/* Footer */}
                {items.length > 0 && (
                    <div className="p-4 border-t border-border bg-card">
                        <div className="flex justify-between items-center mb-4">
                            <span className="text-muted-foreground font-medium">Subtotal</span>
                            <span className="text-xl font-semibold">${subtotal.toFixed(2)}</span>
                        </div>
                        <p className="text-xs text-muted-foreground mb-4 text-center">Shipping & taxes calculated at checkout</p>
                        <button className="w-full bg-brand-900 text-brand-50 py-3.5 rounded-full font-medium text-lg hover:bg-brand-700 transition-colors shadow-lg shadow-brand-900/20">
                            Checkout
                        </button>
                    </div>
                )}
            </div>
        </>
    );
}
