export type Rating = 1 | 2 | 3 | 4 | 5;

export interface Category {
  slug: string;
  name: string;
  description: string;
  image: string;
  productCount: number;
}

export interface ProductImage {
  src: string;
  alt: string;
}

export interface ProductReview {
  id: string;
  author: string;
  title: string;
  content: string;
  rating: Rating;
  date: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  description: string;
  category: string;
  brand: string;
  price: number;
  compareAtPrice: number;
  discount: number;
  rating: number;
  reviewCount: number;
  stock: number;
  sku: string;
  colors: string[];
  sizes: string[];
  images: ProductImage[];
  features: string[];
  specifications: Array<{ label: string; value: string }>;
  isNew?: boolean;
  isFeatured?: boolean;
  isBestSeller?: boolean;
  isTrending?: boolean;
  badges?: string[];
  reviews?: ProductReview[];
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedColor?: string;
  selectedSize?: string;
}
