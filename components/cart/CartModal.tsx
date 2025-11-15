'use client';

import { useCart } from './CartContext';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Trash2 } from 'lucide-react';
import CheckoutModal from './CheckoutModal';
import { useState } from 'react';

export default function CartModal({ open, onOpenChange }: { open: boolean; onOpenChange: (o: boolean) => void }) {
  const { items, total, removeItem, clear } = useCart();
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  return (
    <>
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="max-w-sm">
          <DialogHeader>
            <DialogTitle>Mi Pedido</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            {items.map((item) => (
              <div key={item.id} className="flex items-center gap-3">
                <div className="w-12 h-12 rounded overflow-hidden bg-gray-200">
                  {item.image && <img src={item.image} alt={item.name} className="w-full h-full object-cover" />}
                </div>
                <div className="flex-1">
                  <p className="font-medium">{item.name}</p>
                  <p className="text-sm text-gray-600">Cantidad: {item.quantity}</p>
                  <p className="text-sm text-gray-600">Precio base: S/ {item.price.toFixed(2)}</p>
                  <p className="text-sm font-semibold">Total: S/ {(item.price * item.quantity).toFixed(2)}</p>
                </div>
                <button onClick={() => removeItem(item.id)} className="text-red-600">
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            ))}
          </div>
          <div className="border-t pt-3 mt-3">
            <p className="font-semibold">Total Pedido: S/ {total.toFixed(2)} SOLES</p>
          </div>
          <div className="flex gap-2 mt-3">
            <Button variant="outline" className="flex-1" onClick={clear}>Vaciar carrito</Button>
            <Button className="flex-1" onClick={() => setCheckoutOpen(true)}>Completar pedido</Button>
          </div>
        </DialogContent>
      </Dialog>
      <CheckoutModal open={checkoutOpen} onOpenChange={setCheckoutOpen} onBack={() => onOpenChange(true)} />
    </>
  );
}