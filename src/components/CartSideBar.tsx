import React, { useContext, useEffect, useRef, useState } from "react";
import { useCart } from "../hooks/useCart";

const CartSideBar = () => {
  const { cart, removeFromCart } = useCart();
  const [isOpen, setIsOpen] = useState(false);

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
  console.log("cart from CartSideBar", cart);
  for (let i = 0; i < cart.length; i++) {
    console.log("\tcart from CartSideBar", cart[i]);
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
        {cart.length &&
          cart.map((product) => (
            <div key={product.id} className="flex justify-between mb-4">
              <div>
                <h3 className="text-xl">{product.name}</h3>
                {/* <p>${product.price}</p> */}
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
          {/*cart.reduce((total, product) => total + product.price, 0) */}0
        </p>
      </div>
    </div>
  );
};

export default CartSideBar;
