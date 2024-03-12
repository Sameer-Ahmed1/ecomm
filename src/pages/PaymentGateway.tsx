import React from "react";
import { useNavigate } from "react-router-dom";

const PaymentGateway = () => {
  const navigate = useNavigate();

  const handlePayment = () => {
    // Here you can add the logic for handling the payment
    alert("Payment successful");
    navigate("/"); // Redirect to the home page after successful payment
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Payment Gateway</h1>
      <p>Please enter your payment details:</p>
      <form onSubmit={handlePayment} className="flex flex-col space-y-4">
        <label>
          Card Number:
          <input
            type="text"
            required
            className="border-2 border-gray-300 p-2 rounded ml-2"
          />
        </label>
        <label>
          Expiry Date:
          <input
            type="text"
            required
            className="border-2 border-gray-300 p-2 rounded ml-2"
          />
        </label>
        <label>
          CVV:
          <input
            type="text"
            required
            className="border-2 border-gray-300 p-2 rounded ml-2"
          />
        </label>
        <button
          type="submit"
          className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-1/4"
        >
          Pay Now
        </button>
      </form>
    </div>
  );
};

export default PaymentGateway;
