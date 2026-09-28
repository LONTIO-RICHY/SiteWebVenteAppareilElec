export type CategoryId = 'all' | 'fans' | 'fridges' | 'phones' | 'lighting' | 'machines';

export interface CategoryInfo {
  id: CategoryId;
  label: string;
  tagline: string;
  count: number;
  image: string;
  varieties: string[];
}

export interface Product {
  id: string;
  name: string;
  category: CategoryId;
  brand: string;
  priceXAF: number;
  oldPriceXAF?: number;
  rating: number;
  reviewsCount: number;
  inStock: boolean;
  stockCount: number;
  image: string;
  shortDesc: string;
  description: string;
  specs: Record<string, string>;
  warranty: string;
  featured?: boolean;
  isNew?: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export type Currency = 'XAF' | 'EUR' | 'USD';

export type AppView = 
  | { page: 'home' }
  | { page: 'category'; categoryId: CategoryId }
  | { page: 'product'; productId: string };

export interface CheckoutForm {
  fullName: string;
  phone: string;
  email: string;
  city: string;
  address: string;
  paymentMethod: 'orange_money' | 'mtn_momo' | 'cash_delivery' | 'card';
  notes: string;
}

export const CREATOR_INFO = {
  name: 'LONTIO KESSEL',
  role: 'Architecte Logiciel & Ingénieur Matériel',
  whatsapp: '237650196251',
  whatsappFormatted: '+237 650 196 251',
  email: 'lontiokessel@gmail.com',
  github: 'https://github.com/LONTIo-RICHY',
  githubUser: 'LONTIo-RICHY',
  location: 'Douala / Yaoundé, Cameroun',
} as const;
