import React, { createContext, useEffect, useState, FC } from "react";
import { Product, CartContextType, CartItem, User } from "../types";
import { useAuth } from "../hooks/useAuth";
import userService from "../services/user";
export const CartContext = createContext<CartContextType | undefined>(
  undefined
);
interface CartProviderProps {
  children: React.ReactNode;
}

export const CartProvider: FC<CartProviderProps> = ({ children }) => {
  const { user } = useAuth();
  const [cart, setCart] = useState<CartItem[]>([]);
  useEffect(() => {
    if (user === null) {
      setCart([]);
      localStorage.removeItem("cart");
    } else {
      const savedCart = localStorage.getItem("cart");

      setCart(savedCart ? JSON.parse(savedCart) : user.cart);
    }
  }, [user]);

  const updateCart = async (cart: CartItem[]) => {
    if (user) {
      try {
        localStorage.setItem("cart", JSON.stringify(cart));
        await userService.addToCart(user.id, cart);
      } catch (e: any) {
        alert(e.message);
      }
    }
  };

  const addToCart = (product: Product) => {
    try {
      const id = product.id;
      const productFound = cart.find((product: CartItem) => product.id === id);
      if (productFound) {
        throw new Error("Product already in cart");
      }
      const newProduct = { ...product, quantity: 1 };
      setCart([...cart, newProduct]);
      updateCart([...cart, newProduct]);
    } catch (e: any) {
      alert(e.message);
    }
  };

  const removeFromCart = (productId: string) => {
    setCart(cart.filter((product) => product.id !== productId));
    updateCart(cart.filter((product) => product.id !== productId));
  };
  const updateQuantity = (productId: string, quantity: number) => {
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
