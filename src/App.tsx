import { Outlet } from "react-router-dom";
import { ProductProvider } from "./contexts/ProductContext";
import { CartProvider } from "./contexts/CartContext";
import CartSideBar from "./components/CartSideBar";
import React from "react";
function App() {
  return (
    <ProductProvider>
      <CartProvider>
        <div>this is navbar</div>
        <div>
          <Outlet />
        </div>
        <CartSideBar />
      </CartProvider>
    </ProductProvider>
  );
}

export default App;
