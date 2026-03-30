import React, { createContext, useContext, useState, useEffect } from 'react';
import { Template } from '../data/templates';

export type PricingTier = 1 | 2;

export interface CartItem {
  template: Template;
  tier: PricingTier;
  priceVND: number;
  priceUSD: number;
}

interface CartContextType {
  items: CartItem[];
  addToCart: (template: Template, tier: PricingTier) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
  isCartOpen: boolean;
  setIsCartOpen: (isOpen: boolean) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('cart');
      if (saved) {
        const parsed = JSON.parse(saved);
        // Check if it's the old format (array of Templates without tier)
        if (parsed.length > 0 && !('template' in parsed[0])) {
          // Migrate old items to new format (default to tier 1)
          return parsed.map((item: Template) => ({
            template: item,
            tier: 1,
            priceVND: 200000,
            priceUSD: 7.7
          }));
        }
        return parsed;
      }
    } catch (e) {
      console.error('Failed to parse cart', e);
    }
    return [];
  });
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(items));
  }, [items]);

  const addToCart = (template: Template, tier: PricingTier) => {
    const priceVND = tier === 1 ? 200000 : 350000;
    const priceUSD = tier === 1 ? 7.7 : 13.4;

    setItems(prev => {
      const existingItemIndex = prev.findIndex(item => item.template.id === template.id);
      if (existingItemIndex >= 0) {
        // Update tier if it already exists
        const newItems = [...prev];
        newItems[existingItemIndex] = { template, tier, priceVND, priceUSD };
        return newItems;
      }
      return [...prev, { template, tier, priceVND, priceUSD }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (id: string) => {
    setItems(prev => prev.filter(item => item.template.id !== id));
  };

  const clearCart = () => setItems([]);

  return (
    <CartContext.Provider value={{ items, addToCart, removeFromCart, clearCart, isCartOpen, setIsCartOpen }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart must be used within a CartProvider');
  return context;
};
