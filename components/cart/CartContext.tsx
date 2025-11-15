'use client';

import { createContext, useContext, useMemo, useState, ReactNode } from 'react';
import type { Product } from '@/data/types';

export interface SelectedOptions {
  [groupId: string]: string[];
}

export interface CartItem {
  id: string;
  productId: string;
  name: string;
  price: number;
  quantity: number;
  image?: string;
  options?: SelectedOptions;
}

interface CartContextValue {
  items: CartItem[];
  addItem: (product: Product, quantity: number, options?: SelectedOptions) => void;
  removeItem: (id: string) => void;
  clear: () => void;
  total: number;
  count: number;
}

const CartContext = createContext<CartContextValue | undefined>(undefined);

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within CartProvider');
  return ctx;
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  const addItem = (product: Product, quantity: number, options?: SelectedOptions) => {
    setItems((prev) => {
      const id = `${product.id}-${Date.now()}`;
      return [
        ...prev,
        {
          id,
          productId: product.id,
          name: product.name,
          price: product.price,
          quantity,
          image: product.image,
          options,
        },
      ];
    });
  };

  const removeItem = (id: string) => setItems((prev) => prev.filter((i) => i.id !== id));
  const clear = () => setItems([]);

  const total = useMemo(() => items.reduce((sum, i) => sum + i.price * i.quantity, 0), [items]);
  const count = useMemo(() => items.reduce((sum, i) => sum + i.quantity, 0), [items]);

  const value: CartContextValue = { items, addItem, removeItem, clear, total, count };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}