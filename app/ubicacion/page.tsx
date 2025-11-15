import BottomNavigation from '@/components/BottomNavigation';
import { restaurantLocation, ubicacionBanner } from '@/data/ubicacion';
import { MapPin, Clock } from 'lucide-react';

export default function Ubicacion() {
  return (
    <div className="max-w-md mx-auto bg-white min-h-screen">
      <div className="relative h-44 bg-gray-200">
        {ubicacionBanner.heroUrl && (
          <img
            src={ubicacionBanner.heroUrl}
            alt="Banner Ubicación"
            className="w-full h-full object-cover"
            fetchPriority="high"
            loading="eager"
            decoding="async"
          />
        )}
      </div>
      <div className="mt-10 text-center">
        <h1 className="text-xl font-bold">{ubicacionBanner.title || 'Nuestra Ubicación'}</h1>
      </div>

      <main className="p-4">
        {/* Address */}
        <div className="bg-blue-50 rounded-lg p-4 mb-6">
          <div className="flex items-start gap-3">
            <MapPin className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-gray-800 mb-1">Dirección</h3>
              <p className="text-gray-700">{restaurantLocation.address}</p>
            </div>
          </div>
        </div>

        {/* Hours */}
        <div className="bg-gray-50 rounded-lg p-4 mb-6">
          <div className="flex items-start gap-3">
            <Clock className="w-5 h-5 text-gray-600 mt-1 flex-shrink-0" />
            <div className="flex-1">
              <h3 className="font-semibold text-gray-800 mb-3">Horarios de atención</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Lunes a Jueves:</span>
                  <span className="font-medium text-gray-800">{restaurantLocation.hours.lunesJueves}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Viernes y Sábados:</span>
                  <span className="font-medium text-gray-800">{restaurantLocation.hours.viernesSabados}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Domingos:</span>
                  <span className="font-medium text-gray-800">{restaurantLocation.hours.domingos}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="mb-6">
          <h3 className="font-semibold text-gray-800 mb-3">Ubicación en el mapa</h3>
          <div className="bg-gray-100 rounded-lg overflow-hidden" style={{ height: '300px' }}>
            <iframe
              src={restaurantLocation.mapUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación de Sanguchón Campesino"
            />
          </div>
        </div>

        {/* Directions button */}
        <a
          href={`https://maps.google.com/?q=${encodeURIComponent(restaurantLocation.address)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg text-center transition-colors"
        >
          Abrir en Google Maps
        </a>
      </main>

      <BottomNavigation />
    </div>
  );
}