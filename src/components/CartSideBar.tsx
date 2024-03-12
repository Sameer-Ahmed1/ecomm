import React, { useContext, useEffect, useRef, useState } from "react";
import { useCart } from "../hooks/useCart";
import { Product } from "../types";
import productService from "../services/product";
import { useNavigate } from "react-router-dom";

const CartSideBar = () => {
  const { cart, removeFromCart } = useCart();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);
  const fetchedCartItems = async () => {
    const promises: Promise<Product>[] = [];
    cart.forEach((item) => {
      promises.push(productService.fetchProduct(item.id));
    });
    const result = await Promise.all(promises);
    setProducts(result);
    console.log("result ", result);
  };
  useEffect(() => {
    fetchedCartItems();
  }, [cart]);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  const sidebarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  if (!cart) {
    return <div>loading...</div>;
  }
  return (
    <div className="relative">
      <button
        onClick={toggleSidebar}
        className="fixed top-0 right-0 m-4 mt-24 bg-blue-500 text-white px-4 py-2 rounded"
      >
        Cart
      </button>
      <div
        ref={sidebarRef}
        className={`transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } fixed right-0 top-0 h-full w-64 p-4 bg-white border-l shadow-lg transition-transform duration-200 ease-in-out`}
      >
        <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
        {products.length &&
          products.map((product) => (
            <div key={product.id} className="flex justify-between mb-4">
              <div>
                <h3 className="text-xl">{product.name}</h3>
                <p>${product.price}</p>
              </div>
              <button
                onClick={() => removeFromCart(product.id)}
                className="bg-red-500 text-white px-2 py-1 rounded"
              >
                Remove
              </button>
            </div>
          ))}
        <p className="text-xl font-bold">
          Total: $
          {products.reduce((total, product) => total + product.price, 0)}
        </p>
        <button
          onClick={() => navigate("/checkout")}
          className="mt-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        >
          Checkout
        </button>
      </div>
    </div>
  );
};

export default CartSideBar;
