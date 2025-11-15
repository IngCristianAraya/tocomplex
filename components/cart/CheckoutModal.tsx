'use client';

import { useCart } from './CartContext';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { restaurantContact } from '@/data/contacto';
import Link from 'next/link';

export default function CheckoutModal({ open, onOpenChange, onBack }: { open: boolean; onOpenChange: (o: boolean) => void; onBack: () => void }) {
  const { items, total } = useCart();
  const [name, setName] = useState('');
  const [delivery, setDelivery] = useState<string | undefined>(undefined);
  const [payment, setPayment] = useState<string | undefined>(undefined);
  const [note, setNote] = useState('');
  const [accepted, setAccepted] = useState(false);

  const buildMessage = () => {
    const lines: string[] = [];
    lines.push(`Pedido - ${name || 'Cliente'}`);
    items.forEach((i) => {
      const opts = i.options
        ? Object.entries(i.options)
            .map(([gid, vals]) => `${gid}: ${vals.join(', ')}`)
            .join(' | ')
        : '';
      lines.push(`- ${i.name} x${i.quantity} (S/ ${(i.price * i.quantity).toFixed(2)}) ${opts ? '[' + opts + ']' : ''}`);
    });
    lines.push(`Total: S/ ${total.toFixed(2)}`);
    if (delivery) lines.push(`Entrega: ${delivery}`);
    if (payment) lines.push(`Pago: ${payment}`);
    if (note) lines.push(`Nota: ${note}`);
    return encodeURIComponent(lines.join('\n'));
  };

  const whatsappUrl = `https://wa.me/${restaurantContact.whatsapp}?text=${buildMessage()}`;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-sm">
        <DialogHeader>
          <DialogTitle>Completa tu pedido</DialogTitle>
        </DialogHeader>
        <div className="space-y-3">
          <Input placeholder="Nombre" value={name} onChange={(e) => setName(e.target.value)} />
          <Select value={delivery} onValueChange={setDelivery}>
            <SelectTrigger>
              <SelectValue placeholder="Opciones de entrega" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Recojo en tienda">Recojo en tienda</SelectItem>
              <SelectItem value="Delivery">Delivery</SelectItem>
            </SelectContent>
          </Select>
          <Select value={payment} onValueChange={setPayment}>
            <SelectTrigger>
              <SelectValue placeholder="Formas de pago" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Efectivo">Efectivo</SelectItem>
              <SelectItem value="Yape">Yape</SelectItem>
              <SelectItem value="Tarjeta">Tarjeta</SelectItem>
            </SelectContent>
          </Select>
          <Input placeholder="Nota adicional" value={note} onChange={(e) => setNote(e.target.value)} />
          <label className="flex items-center gap-2 text-sm">
            <input type="checkbox" checked={accepted} onChange={(e) => setAccepted(e.target.checked)} />
            <span>Acepto los términos y condiciones.</span>
          </label>
          <Link href={accepted ? whatsappUrl : '#'} target={accepted ? '_blank' : undefined} className="block">
            <Button className="w-full bg-green-600" disabled={!accepted}>Enviar pedido</Button>
          </Link>
          <Button variant="ghost" onClick={onBack}>Regresar al carrito</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

import { useState } from 'react';