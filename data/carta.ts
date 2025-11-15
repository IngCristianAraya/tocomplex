import type { Category, SectionBanner } from './types';

export const menuCategories: Category[] = [
  {
    id: 'combinados',
    name: 'Combinados',
    products: [
      {
        id: '1',
        name: 'Combo N°1',
        description:
          'Completo italiano  + papas fritas  + bebida 500 ml',
        price: 15.0,
        image: '/images/combo1.svg',
        optionGroups: [
          { id: 'bebida', name: 'Bebida (Elige una)', type: 'single', options: ['Coca Cola', 'Chicha'] },
          {
            id: 'cremas',
            name: 'Cremas',
            type: 'multiple',
            options: ['Ají', 'Mayonesa', 'Mostaza', 'Ketchup'],
          },
        ],
      },
      {
        id: '2',
        name: 'Combo N°2',
        description: 'Chacarero  + bebida 500 ml',
        price: 20.0,
        image: '/images/combo8.svg',
        optionGroups: [
          { id: 'bebida', name: 'Bebida (Elige una)', type: 'single', options: ['Coca Cola', 'Chicha'] },
          { id: 'cremas', name: 'Cremas', type: 'multiple', options: ['Ají', 'Mayonesa', 'Mostaza'] },
        ],
      },
      { id: '3', name: 'Combinado 3', description: 'Con papas y ensalada', price: 22.9 },
    ],
  },
  {
    id: 'sanguches',
    name: 'Sanguches',
    products: [
      { id: '4', name: 'Chacarero', description: 'Carne de res, Vainita, Tomate, Palta', price: 12.9, 
        image: '/images/chacarero.webp',
     optionGroups: [
        
          {
            id: 'cremas',
            name: 'Cremas',
            type: 'multiple',
            options: ['Ají', 'Mayonesa', 'Mostaza', 'Ketchup'],
          },
        ],
      },

      { id: '5', name: 'Churrasco Italiano', description: 'Carne de res, Tomate, Palta', price: 14.9, 
        image: '/images/churrasco_italiano.webp',
     optionGroups: [
        
          {
            id: 'cremas',
            name: 'Cremas',
            type: 'multiple',
            options: ['Ají', 'Mayonesa', 'Mostaza', 'Ketchup'],
          },
        ],
      },
      { id: '6', name: 'Completo Italiano', description: 'Hot dog, Tomate, Palta', price: 13.9, 
        image: '/images/italiano.webp',
     optionGroups: [
        
          {
            id: 'cremas',
            name: 'Cremas',
            type: 'multiple',
            options: ['Ají', 'Mayonesa', 'Mostaza', 'Ketchup'],
          },
        ],
      },
      { id: '7', name: 'Completo normal', description: 'Hot dog, Tomate, Chucrut', price: 16.9, 
        image: '/images/tocomple.webp',
     optionGroups: [
        
          {
            id: 'cremas',
            name: 'Cremas',
            type: 'multiple',
            options: ['Ají', 'Mayonesa', 'Mostaza', 'Ketchup'],
          },
        ],
      },
    ],
  },
  {
    id: 'bebidas',
    name: 'Gaseosas',
    products: [
      { id: '8', name: 'Coca Cola', description: 'Botella 500ml', price: 3.5 },
      { id: '9', name: 'Inka Cola', description: 'Botella 500ml', price: 3.5 },
      { id: '10', name: 'Agua Mineral', description: 'Botella 600ml', price: 2.5 },
      { id: '11', name: 'Jugo Natural', description: 'De temporada', price: 4.5 },
    ],
  },
];

export const cartaBanner: SectionBanner = {
  title: 'Carta',
  heroUrl: '/images/foti.png',
};