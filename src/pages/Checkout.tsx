import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import productService from "../services/product";
import { Product } from "../types";

const CheckoutPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [zip, setZip] = useState("");

  const getProduct = async (id: number) => {
    try {
      const productData = await productService.fetchProduct(+id);
      setProduct(productData);
    } catch (e) {
      alert("Product not found" + e);
    }
  };

  useEffect(() => {
    if (id) {
      const idNum = +id;
      getProduct(idNum);
    }
  }, [id]);

  const handleCheckout = (event: React.FormEvent) => {
    event.preventDefault();
    alert("Checkout successful");
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col md:flex-row m-6">
      <div className="w-full md:w-1/2 p-3">
        <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
        <p className="mb-2">{product.description}</p>
        <p className="text-xl font-bold mb-4">${product.price}</p>
        <img
          className="rounded-lg w-full"
          src={product.image}
          alt={product.name}
        />
      </div>
      <div className="w-full md:w-1/2 p-3">
        <h2 className="text-2xl font-bold mb-2">Shipping Information</h2>
        <form onSubmit={handleCheckout}>
          <label>
            Address:
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </label>
          <label>
            City:
            <input
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              required
            />
          </label>
          <label>
            ZIP Code:
            <input
              type="text"
              value={zip}
              onChange={(e) => setZip(e.target.value)}
              required
            />
          </label>
          <button type="submit">Checkout</button>
        </form>
      </div>
    </div>
  );
};

export default CheckoutPage;
