import { Link } from "react-router-dom";
import { Product } from "../types"; // import the Product type
import React, { FC } from "react";

interface ProductCardProps {
  product: Product;
}
const ProductCard: FC<ProductCardProps> = ({ product }) => {
  return (
    <Link to={`/products/${product.id}`}>
      <div className="max-w-xs rounded overflow-hidden shadow-lg m-2">
        <img
          className="w-72 h-64 object-cover"
          src={product.image}
          alt={product.name}
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{product.name}</div>
          <p className="text-gray-700 text-base">{product.description}</p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            ${product.price}
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            Rating: {product.rating}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
