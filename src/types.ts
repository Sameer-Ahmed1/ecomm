export interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  price: number;
  category: string;
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
  id: number;
  name: string;
  quantity: number;
}
export interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
}
export interface User {
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
