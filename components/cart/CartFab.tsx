'use client';

import { useState } from 'react';
import { useCart } from './CartContext';
import CartModal from './CartModal';
import { ShoppingCart } from 'lucide-react';

export default function CartFab() {
  const { count } = useCart();
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-20 right-4 bg-green-600 text-white rounded-full p-4 shadow-lg"
      >
        <ShoppingCart className="w-6 h-6" />
        {count > 0 && (
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full px-2 py-0.5">
            {count}
          </span>
        )}
      </button>
      <CartModal open={open} onOpenChange={setOpen} />
    </>
  );
}