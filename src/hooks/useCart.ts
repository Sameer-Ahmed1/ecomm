import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import { CartContextType } from "../types";

export function useCart(): CartContextType {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
