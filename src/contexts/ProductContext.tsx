import React, { createContext, useState, useEffect, FC } from "react";
import productService from "../services/product";
import { Product, ProductContextType } from "../types";
export const ProductContext = createContext<ProductContextType | undefined>(
  undefined
);
interface ProductProviderProps {
  children: React.ReactNode;
}
export const ProductProvider: FC<ProductProviderProps> = ({ children }) => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const getProducts = async () => {
      const products = await productService.fetchAllProducts();
      setProducts(products);
    };
    getProducts();
  }, []);

  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
};
