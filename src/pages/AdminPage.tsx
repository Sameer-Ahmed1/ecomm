import React, { useEffect, useState } from "react";
import productService from "../services/product";
import { Product } from "../types";

const AdminPage = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const fetchedProducts = await productService.fetchAllProducts();
      setProducts(fetchedProducts);
    };

    fetchProducts();
  }, []);

  const handleUpdate = async (id: string, countInStock: number) => {
    try {
      const updatedProduct = await productService.updateProduct(
        id,
        countInStock
      );
      setProducts(
        products.map((product) =>
          product.id === id ? updatedProduct : product
        )
      );
    } catch (error) {
      console.error(`Failed to update product ${id}:`, error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <div className="flex flex-col w-full p-8 text-gray-800 bg-white shadow-lg pin-r pin-y md:w-4/5 lg:w-4/5">
        <div className="flex-1">
          <h1 className="text-2xl font-bold">Admin Page</h1>
          {products.map((product) => (
            <div
              key={product.id}
              className="w-full py-4 border-b border-gray-200"
            >
              <h2 className="mb-2 text-xl font-bold">{product.name}</h2>
              <p className="mb-2">Count in stock: {product.countInStock}</p>
              <input
                type="number"
                min="0"
                value={product.countInStock}
                onChange={(e) =>
                  handleUpdate(product.id, Number(e.target.value))
                }
                className="w-20 px-3 py-2 text-gray-700 bg-gray-200 rounded outline-none focus:shadow-outline"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
