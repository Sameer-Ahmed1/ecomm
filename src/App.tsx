import { Outlet } from "react-router-dom";
import { ProductProvider } from "./contexts/ProductContext";
import { CartProvider } from "./contexts/CartContext";
import CartSideBar from "./components/CartSideBar";
import React from "react";
import { AuthProvider } from "./contexts/AuthContext";
import Navbar from "./components/NavBar";
function App() {
  return (
    <AuthProvider>
      <ProductProvider>
        <CartProvider>
          <Navbar />
          <div>
            <Outlet />
          </div>
          <CartSideBar />
        </CartProvider>
      </ProductProvider>
    </AuthProvider>
  );
}

export default App;
