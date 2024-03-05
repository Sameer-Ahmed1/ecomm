import React, { createContext, useEffect, useState, FC } from "react";
import { Product, CartContextType, CartItem } from "../types";
export const CartContext = createContext<CartContextType | undefined>(
  undefined
);
interface CartProviderProps {
  children: React.ReactNode;
}

export const CartProvider: FC<CartProviderProps> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product: Product) => {
    try {
      const id = product.id;
      const productFound = cart.find((product: CartItem) => product.id === id);
      if (productFound) {
        throw new Error("Product already in cart");
      }
      const newProduct = { ...product, quantity: 1 };
      setCart([...cart, newProduct]);
    } catch (e: any) {
      alert(e.message);
    }
  };

  const removeFromCart = (productId: number) => {
    setCart(cart.filter((product) => product.id !== productId));
  };
  const updateQuantity = (productId: number, quantity: number) => {
    if (quantity > 0) {
      setCart(
        cart.map((product) => {
          if (product.id === productId) {
            return { ...product, quantity: quantity };
          }
          return product;
        })
      );
    }
  };
  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, updateQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
};
