export enum SubCategory {
  Trouser = "Trouser",
  Shirt = "Shirt",
  Tshirt = "Tshirt",
  Jacket = "Jacket",
  Wedding = "Wedding",
  Traditional = "Traditional",
}

export interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  price: number;
  category: string;
  subCategory: SubCategory;
  brand: string;
  rating: number;
  numReviews: number;
  countInStock: number;
  createdAt: Date;
  updatedAt: Date;
  sellerName: string;
  sellerId: number;
}

export interface CartItem {
  id: string;
  quantity: number;
}
export interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
}
export interface User {
  id: string;
  username: string;
  cart: CartItem[];
  // Add other user properties here
}

export interface AuthContextType {
  user: User | null;
  login: (username: string, password: string) => void;
  logout: () => void;
}

export interface ProductContextType {
  products: Product[];
}
