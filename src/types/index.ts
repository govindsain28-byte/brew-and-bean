export interface MenuItem {
  id: string;
  name: string;
  slug: string;
  category: MenuCategory;
  price: number;
  compareAtPrice?: number;
  rating: number;
  reviewCount: number;
  description: string;
  longDescription: string;
  calories: number;
  image: string;
  gallery: string[];
  tags: string[];
  isVeg: boolean;
  isBestSeller?: boolean;
  isNew?: boolean;
  isSignature?: boolean;
  spiceLevel?: 0 | 1 | 2 | 3;
  customizations: Customization[];
  ingredients: string[];
  allergens: string[];
  prepTimeMinutes: number;
}

export interface Customization {
  id: string;
  name: string;
  type: "single" | "multiple";
  required: boolean;
  options: { id: string; label: string; priceDelta: number }[];
}

export type MenuCategory =
  | "coffee"
  | "espresso"
  | "cold-coffee"
  | "tea"
  | "mocktails"
  | "smoothies"
  | "breakfast"
  | "lunch"
  | "pizza"
  | "burger"
  | "pasta"
  | "desserts"
  | "bakery"
  | "kids";

export interface CartItem {
  id: string;
  menuItem: MenuItem;
  quantity: number;
  selectedCustomizations: { customizationId: string; optionIds: string[] }[];
  notes?: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  tags: string[];
  author: { name: string; role: string; avatar: string };
  image: string;
  publishedAt: string;
  readTimeMinutes: number;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: "interior" | "coffee" | "food" | "events" | "people";
  width: number;
  height: number;
}

export interface EventItem {
  id: string;
  slug: string;
  title: string;
  type: "Live Music" | "Open Mic" | "Stand-up Comedy" | "Corporate" | "Birthday" | "Workshop";
  date: string;
  time: string;
  image: string;
  description: string;
  price: number;
  seatsLeft: number;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  avatar: string;
  rating: number;
  quote: string;
  videoUrl?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
}

export interface Review {
  id: string;
  menuItemId: string;
  userName: string;
  avatar: string;
  rating: number;
  comment: string;
  photos: string[];
  date: string;
  verified: boolean;
}

export interface Coupon {
  code: string;
  description: string;
  discountPercent: number;
  minOrderValue: number;
  expiresAt: string;
}
