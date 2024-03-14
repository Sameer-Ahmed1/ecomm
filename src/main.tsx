import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import LoginPage from "./pages/LoginPage";
import CheckoutPage from "./pages/Checkout";
import PaymentGateway from "./pages/PaymentGateway";
import CheckoutCart from "./pages/CheckoutCart";
import SignupPage from "./pages/SignupPage";
import AdminPage from "./pages/AdminPage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/products/:id",
        element: <ProductsPage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/signup",
        element: <SignupPage />,
      },
      {
        path: "/checkout/:id",
        element: <CheckoutPage />,
      },
      {
        path: "/checkout",
        element: <CheckoutCart />,
      },
    ],
  },
  {
    path: "/payment",
    element: <PaymentGateway />,
  },
  {
    path: "admin",
    element: <AdminPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as Element).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
