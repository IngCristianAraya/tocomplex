import BottomNavigation from '@/components/BottomNavigation';
import { menuCategories } from '@/data/carta';
import ProductList from '@/components/ProductList';
import CartFab from '@/components/cart/CartFab';
import { cartaBanner } from '@/data/carta';

export default function Carta() {
  return (
    <div className="max-w-md mx-auto bg-white min-h-screen">
      <div className="relative h-44 bg-gray-200">
        {cartaBanner.heroUrl && (
          <img
            src={cartaBanner.heroUrl}
            alt="Banner Carta"
            className="w-full h-full object-cover"
            fetchPriority="high"
            loading="eager"
            decoding="async"
          />
        )}
      </div>
      <div className="mt-10 text-center">
        <h1 className="text-xl font-bold">{cartaBanner.title || 'Carta'}</h1>
      </div>

      <main className="p-4">
        <ProductList categories={menuCategories} />
      </main>

      <BottomNavigation />
      <CartFab />
    </div>
  );
}