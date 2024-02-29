import { useParams } from "react-router-dom";
import productService from "../services/product";
import { useEffect, useState } from "react";
const ProductsPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  const getProduct = async (id) => {
    try {
      const productData = await productService.fetchProduct(+id);
      setProduct(productData);
      //   console.log(productData)
    } catch (e) {
      alert("Product not found" + e);
    }
  };
  useEffect(() => {
    // console.log('id', id)
    getProduct(id);
    return () => {
      setProduct(null);
    };
  }, [id]);
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
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">
          Add to Cart
        </button>
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
          Buy Now
        </button>
      </div>
    </div>
  );
};
export default ProductsPage;
