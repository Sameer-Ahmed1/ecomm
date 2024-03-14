import { useParams, useNavigate, useLocation } from "react-router-dom";
import productService from "../services/product";
import React, { useEffect, useState } from "react";
import { useCart } from "../hooks/useCart";
import { useAuth } from "../hooks/useAuth";
import { Product } from "../types";

const ProductsPage = () => {
  const { id } = useParams();
  const { user } = useAuth();
  const navigate = useNavigate();
  const [product, setProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState<number>(1);
  const [isAddedToCart, setIsAddedToCart] = useState<boolean>(false);

  const { addToCart, removeFromCart, updateQuantity } = useCart();
  const getProduct = async (id: string) => {
    try {
      const productData = await productService.fetchProduct(id);
      setProduct(productData);
    } catch (e) {
      alert("Product not found" + e);
    }
  };
  useEffect(() => {
    if (id) {
      const idNum = id;
      getProduct(idNum);
    }
    return () => {
      setProduct(null);
    };
  }, [id]);
  useEffect(() => {
    if (id) {
      updateQuantity(id, quantity);
    }
  }, [quantity]);
  const handleAddToCart = (product: Product) => {
    if (user) {
      addToCart(product);
      setIsAddedToCart(true);
    } else {
      navigate("/login", { state: { from: `/products/${product.id}` } });
    }
  };
  const handleBuy = (product: Product) => {
    if (!user) {
      addToCart(product);
      navigate("/login");
    } else {
      navigate(`/checkout/${product.id}`);
    }
  };
  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col md:flex-row m-6">
      <div className="w-full md:w-1/2 p-3">
        <img
          className="rounded-lg w-full"
          src={product.image}
          alt={product.name}
        />
      </div>
      <div className="w-full md:w-1/2 p-3">
        <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
        <p className="mb-2">{product.description}</p>
        <p className="text-xl font-bold mb-4">${product.price}</p>
        <p className="text-sm mb-2">Brand: {product.brand}</p>
        <p className="text-sm mb-2">Category: {product.category}</p>
        <p className="text-sm mb-2">Seller: {product.sellerName}</p>
        <p className="text-sm mb-2">Number of reviews: {product.numReviews}</p>
        <p className="text-sm mb-2">Rating {product.rating}</p>
        <p className="text-sm mb-2">Stock: {product.countInStock}</p>
        <button
          onClick={() => handleAddToCart(product)}
          className={`font-bold py-2 px-4 rounded mr-2 ${
            isAddedToCart ? "bg-gray-500" : "bg-blue-500 hover:bg-blue-700"
          } text-white`}
          disabled={isAddedToCart}
        >
          {isAddedToCart ? "Added to Cart" : "Add to Cart"}
        </button>
        <button
          onClick={() => handleBuy(product)}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        >
          Buy Now
        </button>
        <div className="mt-4">
          <button
            onClick={() => setQuantity(quantity + 1)}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
          >
            +
          </button>
          {quantity}
          <button
            onClick={() => {
              if (quantity > 1) setQuantity(quantity - 1);
            }}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-2 ml-2"
          >
            -
          </button>
        </div>
      </div>
    </div>
  );
};
export default ProductsPage;
