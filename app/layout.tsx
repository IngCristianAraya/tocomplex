import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { CartProvider } from '@/components/cart/CartContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Sanguchón Campesino - Carta Digital',
  description: 'Carta digital de Sanguchón Campesino - Av. Alfredo Benavides 3710, Surco',
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#ffffff',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={`${inter.className} bg-sky-50 text-gray-900`}>
        <CartProvider>
          <div className="min-h-screen pb-20">
            {children}
          </div>
        </CartProvider>
      </body>
    </html>
  );
}
