import React, { useState } from "react";
import ProductCard from "../components/ProductCard";
import { useProduct } from "../hooks/useProduct";

function HomePage() {
  const { products } = useProduct();
  const [search, setSearch] = useState("");
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );
  if (!products) {
    return <div>loading...</div>;
  }
  return (
    <div>
      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="p-2 m-4 border rounded w-full md:w-1/2 lg:w-2/3"
      />
      <div className="flex flex-wrap justify-center">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default HomePage;
