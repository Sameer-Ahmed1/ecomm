export interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  price: number;
}
export interface CartItem extends Product {
  quantity: number;
}
export interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
}
export interface AuthContextType {
  isAuthenticated: boolean;
  login: (username: string, password: string) => void;
  logout: () => void;
}

export interface ProductContextType {
  products: Product[];
}
