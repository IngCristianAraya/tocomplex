export interface OptionGroup {
  id: string;
  name: string;
  type: 'single' | 'multiple';
  options: string[];
}

export interface Product {
  id: string;
  name: string;
  description?: string;
  price: number;
  image?: string;
  optionGroups?: OptionGroup[];
}

export interface Category {
  id: string;
  name: string;
  products: Product[];
}

export interface SocialMedia {
  instagram?: string;
  facebook?: string;
  tiktok?: string;
  youtube?: string;
  x?: string;
  linkedin?: string;
  twitch?: string;
  github?: string;
}

export interface RestaurantContact {
  name: string;
  address: string;
  phone: string;
  whatsapp: string;
  socialMedia: SocialMedia;
  heroUrl?: string;
  logoUrl?: string;
}

export interface RestaurantLocation {
  address: string;
  hours: {
    lunesJueves: string;
    viernesSabados: string;
    domingos: string;
  };
  mapUrl: string;
}

export interface SectionBanner {
  title?: string;
  heroUrl?: string;
  logoUrl?: string;
}