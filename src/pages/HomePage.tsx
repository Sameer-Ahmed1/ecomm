import React, { useState } from "react";
import ProductCard from "../components/ProductCard";
import { useProduct } from "../hooks/useProduct";
import SearchBar from "../components/SearchBar";
import CategoryNavbar from "../components/CategoryNavbar";
function HomePage() {
  const { products } = useProduct();
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");

  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(search.toLowerCase()) &&
      (filter ? product.subCategory === filter : true)
  );

  if (!products) {
    return <div>loading...</div>;
  }
  return (
    <div>
      <CategoryNavbar setFilter={setFilter} />
      <SearchBar search={search} setSearch={setSearch} />
      <div className="flex flex-wrap justify-center">
        {filteredProducts.length ? (
          filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <div>No products found</div>
        )}
      </div>
    </div>
  );
}

export default HomePage;
