'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FileText, Phone, MapPin } from 'lucide-react';
import { cn } from '@/lib/utils';

const navigationItems = [
  { href: '/contacto', label: 'Contacto', icon: Phone },
  { href: '/carta', label: 'Carta', icon: FileText },
  { href: '/ubicacion', label: 'Ubicación', icon: MapPin },
];

export default function BottomNavigation() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50">
      <div className="flex justify-around items-center h-16">
        {navigationItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;
          
          return (
            <Link
              key={item.href}
              href={item.href}
              aria-label={item.label}
              className={cn(
                'flex flex-col items-center justify-center flex-1 h-full text-xs transition-colors',
                isActive 
                  ? 'text-white bg-blue-600' 
                  : 'text-gray-700 hover:text-gray-900 hover:bg-blue-50'
              )}
            >
              <Icon className="w-5 h-5 mb-1" />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}