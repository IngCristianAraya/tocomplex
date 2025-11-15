'use client';

import BottomNavigation from '@/components/BottomNavigation';
import { restaurantContact } from '@/data/contacto';
import { Phone, UserPlus } from 'lucide-react';
import SocialLinks from '@/components/SocialLinks';

export default function Contacto() {
  const handleCall = () => {
    window.open(`tel:${restaurantContact.phone}`);
  };

  const handleWhatsApp = () => {
    window.open(`https://wa.me/${restaurantContact.whatsapp}`);
  };

  const handleSaveContact = () => {
    const vcard = [
      'BEGIN:VCARD',
      'VERSION:3.0',
      `FN:${restaurantContact.name}`,
      `ORG:${restaurantContact.name}`,
      `TEL;TYPE=CELL:${restaurantContact.phone}`,
      `ADR;TYPE=WORK:;;${restaurantContact.address.replace(/,/g, '\\,')};;;;`,
      'END:VCARD',
    ].join('\n');
    const blob = new Blob([vcard], { type: 'text/vcard' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${restaurantContact.name}.vcf`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="max-w-md mx-auto bg-sky-50 min-h-screen">
      <div className="relative h-44 bg-gray-200">
        {restaurantContact.heroUrl && (
          <img src={restaurantContact.heroUrl || ''} alt="Hero" className="w-full h-full object-cover" />
        )}
        <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-40 h-40 rounded-full bg-white shadow flex items-center justify-center overflow-hidden">
          {restaurantContact.logoUrl ? (
            <img src={restaurantContact.logoUrl} alt="Logo" className="w-full h-full object-cover scale-110" />
          ) : (
            <span className="text-2xl font-bold text-gray-500">SC</span>
          )}
        </div>
      </div>
      <div className="mt-24 text-center">
        <h1 className="text-xl font-bold">{restaurantContact.name}</h1>
        <p className="text-sm text-gray-600">Sanguchería</p>
      </div>

      <main className="p-6">

        <div className="space-y-3 mb-8">
          <button
            onClick={handleCall}
            className="group w-full max-w-xs md:max-w-sm mx-auto rounded-xl py-3 px-4 bg-white text-gray-900 border border-gray-200 shadow-sm hover:shadow-md hover:ring-2 hover:ring-blue-600 transition flex items-center justify-center gap-2"
          >
            <Phone className="w-5 h-5 text-blue-600" />
            <span className="text-base font-semibold">Llamar ahora</span>
          </button>

          <button
            onClick={handleWhatsApp}
            className="group w-full max-w-xs md:max-w-sm mx-auto rounded-xl py-3 px-4 bg-white text-gray-900 border border-gray-200 shadow-sm hover:shadow-md hover:ring-2 hover:ring-green-600 transition flex items-center justify-center gap-2"
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5 text-green-600" fill="currentColor" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.149-.671.149-.198.297-.767.966-.94 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.131-.606.134-.133.297-.347.446-.521.149-.173.198-.297.297-.495.099-.198.05-.372-.025-.521-.074-.149-.671-1.611-.921-2.206-.242-.581-.487-.502-.671-.511l-.571-.01c-.198 0-.521.074-.793.372s-1.04 1.016-1.04 2.476 1.065 2.876 1.213 3.074c.149.198 2.1 3.2 5.078 4.487.709.306 1.261.489 1.691.626.711.226 1.36.194 1.872.118.571-.085 1.758-.718 2.006-1.413.248-.695.248-1.29.173-1.413-.074-.123-.272-.198-.57-.347z" />
              <path d="M12.04 22c-1.827 0-3.627-.494-5.213-1.427l-.373-.223-3.095.81.826-3.016-.244-.379A9.96 9.96 0 0 1 2 12.04C2 6.56 6.56 2 12.04 2c2.67 0 5.18 1.04 7.06 2.93A9.95 9.95 0 0 1 22 12.04c0 2.67-1.04 5.18-2.93 7.06A9.95 9.95 0 0 1 12.04 22z" fill="none" stroke="currentColor" strokeWidth="1.5" />
            </svg>
            <span className="text-base font-semibold">WhatsApp</span>
          </button>

          <button
            onClick={handleSaveContact}
            className="group w-full max-w-xs md:max-w-sm mx-auto rounded-xl py-3 px-4 bg-white text-gray-900 border border-gray-200 shadow-sm hover:shadow-md hover:ring-2 hover:ring-gray-800 transition flex items-center justify-center gap-2"
          >
            <UserPlus className="w-5 h-5 text-gray-800" />
            <span className="text-base font-semibold">Guardar contacto</span>
          </button>
        </div>

        <div className="text-center">
          <h3 className="text-md font-medium text-gray-700 mb-4">Síguenos en redes sociales</h3>
          <SocialLinks links={restaurantContact.socialMedia} />
        </div>
      </main>

      <BottomNavigation />
    </div>
  );
}