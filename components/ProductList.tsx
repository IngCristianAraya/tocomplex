'use client';

import { useState } from 'react';
import { Category, Product } from '@/data/types';
import { useCart, SelectedOptions } from '@/components/cart/CartContext';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from '@/components/ui/dialog';
import { Checkbox } from '@/components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';

export default function ProductList({ categories }: { categories: Category[] }) {
  const { addItem } = useCart();
  const [open, setOpen] = useState(false);
  const [product, setProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [options, setOptions] = useState<SelectedOptions>({});

  const onOpenProduct = (p: Product) => {
    setProduct(p);
    setQuantity(1);
    setOptions({});
    setOpen(true);
  };

  const toggleMultiple = (groupId: string, value: string) => {
    setOptions((prev) => {
      const current = prev[groupId] || [];
      const exists = current.includes(value);
      const next = exists ? current.filter((v) => v !== value) : [...current, value];
      return { ...prev, [groupId]: next };
    });
  };

  const setSingle = (groupId: string, value: string) => {
    setOptions((prev) => ({ ...prev, [groupId]: [value] }));
  };

  const addToCart = () => {
    if (!product) return;
    addItem(product, quantity, options);
    setOpen(false);
  };

  return (
    <div>
      {categories.map((category) => (
        <section key={category.id} className="mb-8">
          <h2 className="text-lg font-semibold text-gray-800 mb-4 border-b-2 border-blue-600 pb-2">
            {category.name}
          </h2>
          <div className="space-y-3">
            {category.products.map((p) => (
              <button
                key={p.id}
                onClick={() => onOpenProduct(p)}
                className="w-full bg-gray-50 rounded-lg p-4 flex items-center text-left"
              >
                <div className="w-16 h-16 rounded-md overflow-hidden bg-gray-200 mr-3 flex-shrink-0">
                  <img
                    src={p.image || '/images/numero1.svg'}
                    alt={p.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium text-gray-900 text-base">{p.name}</h3>
                  {p.description && (
                    <p className="text-sm text-gray-600 mt-1">{p.description}</p>
                  )}
                </div>
                <span className="text-lg font-bold text-blue-600 ml-4">
                  S/ {p.price.toFixed(2)}
                </span>
              </button>
            ))}
          </div>
        </section>
      ))}

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-md p-0">
          <div className="flex">
            <div className="w-1/2 bg-white">
              {product?.image ? (
                <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full bg-gray-200" />
              )}
            </div>
            <div className="w-1/2 p-4">
              <DialogHeader>
                <DialogTitle>{product?.name}</DialogTitle>
              </DialogHeader>
              {product?.description && (
                <p className="text-sm text-gray-600 mt-1">{product.description}</p>
              )}

              <div className="space-y-4 mt-3 overflow-y-auto max-h-56 pr-1">
                {product?.optionGroups?.map((group) => (
                  <div key={group.id}>
                    <p className="font-medium text-sm mb-2">{group.name}</p>
                    {group.type === 'single' ? (
                      <RadioGroup
                        value={(options[group.id] || [])[0]}
                        onValueChange={(v) => setSingle(group.id, v)}
                        className="grid grid-cols-1 gap-2"
                      >
                        {group.options.map((opt) => (
                          <div key={opt} className="flex items-center space-x-2">
                            <RadioGroupItem id={`${group.id}-${opt}`} value={opt} />
                            <label htmlFor={`${group.id}-${opt}`} className="text-sm">
                              {opt}
                            </label>
                          </div>
                        ))}
                      </RadioGroup>
                    ) : (
                      <div className="grid grid-cols-1 gap-2">
                        {group.options.map((opt) => {
                          const checked = (options[group.id] || []).includes(opt);
                          return (
                            <div key={opt} className="flex items-center space-x-2">
                              <Checkbox
                                id={`${group.id}-${opt}`}
                                checked={checked}
                                onCheckedChange={() => toggleMultiple(group.id, opt)}
                              />
                              <label htmlFor={`${group.id}-${opt}`} className="text-sm">
                                {opt}
                              </label>
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between mt-4">
                <div className="flex items-center border rounded-lg">
                  <button
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="px-3 py-2"
                  >
                    -
                  </button>
                  <span className="px-4">{quantity}</span>
                  <button onClick={() => setQuantity((q) => q + 1)} className="px-3 py-2">
                    +
                  </button>
                </div>
                <Button onClick={addToCart} className="bg-black text-white">
                  AGREGAR S/ {(product ? product.price * quantity : 0).toFixed(2)} SOLES
                </Button>
              </div>
            </div>
          </div>
          <DialogClose asChild>
            <button className="absolute top-2 right-2 rounded-full p-2 bg-white shadow">
              <X className="w-4 h-4" />
            </button>
          </DialogClose>
        </DialogContent>
      </Dialog>
    </div>
  );
}