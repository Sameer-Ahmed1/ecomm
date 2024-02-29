import { useContext } from "react";
import { ProductContext } from "../contexts/ProductContext";
import { ProductContextType } from "../types";

export function useProduct(): ProductContextType {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error("useProduct must be used within a ProductProvider");
  }
  return context;
}
