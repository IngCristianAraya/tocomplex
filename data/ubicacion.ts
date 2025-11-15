import type { RestaurantLocation, SectionBanner } from './types';

export const restaurantLocation: RestaurantLocation = {
  address: 'Santa Paula #470, Cercado de Lima',
  hours: {
    lunesJueves: '16:00pm – 22:00pm',
    viernesSabados: '16:00am – 00:00am',
    domingos: '16:00am – 23:00pm',
  },
  mapUrl:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.351298284525!2d-77.0755515!3d-12.0640336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c93e392f11ab%3A0xf4878422193975ba!2sSta.%20Paula%20470%2C%20Lima%2015088!5e0!3m2!1ses!2spe!4v1731777600000"',
};

export const ubicacionBanner: SectionBanner = {
  title: 'Ubicación',
  heroUrl: '/images/hero-blue.svg',
};