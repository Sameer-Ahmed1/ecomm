import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../hooks/useCart";

const CheckoutCart = () => {
  const navigate = useNavigate();
  const { cart } = useCart();
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [zip, setZip] = useState("");

  const handleCheckout = (event: React.FormEvent) => {
    event.preventDefault();
    alert("Checkout successful");
    navigate("/payment"); // Redirect to the PaymentGateway page
  };

  return (
    <div className="w-full p-3">
      <h2 className="text-2xl font-bold mb-2">Shipping Information</h2>
      <form onSubmit={handleCheckout} className="flex flex-col space-y-4">
        <label>
          Address:
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
            className="border-2 border-gray-300 p-2 rounded ml-2"
          />
        </label>
        <label>
          City:
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
            className="border-2 border-gray-300 p-2 rounded ml-2"
          />
        </label>
        <label>
          ZIP Code:
          <input
            type="text"
            value={zip}
            onChange={(e) => setZip(e.target.value)}
            required
            className="border-2 border-gray-300 p-2 rounded ml-2"
          />
        </label>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Proceed To Checkout
        </button>
      </form>
    </div>
  );
};

export default CheckoutCart;
