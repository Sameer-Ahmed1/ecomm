import { Product } from "../types";
import axios from "axios";

const baseUrl = "http://localhost:5000/api/products"; // replace with your backend URL

const fetchAllProducts = async (): Promise<Product[]> => {
  try {
    const response = await axios.get(baseUrl);
    return response.data;
  } catch (error) {
    console.error("Error fetching all products:", error);
    throw error;
  }
};

const fetchProduct = async (id: string): Promise<Product> => {
  try {
    const response = await axios.get(`${baseUrl}/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching product with id ${id}:`, error);
    throw error;
  }
};
const updateProduct = async (
  id: string,
  countInStock: number
): Promise<Product> => {
  try {
    const response = await axios.put(`${baseUrl}/${id}`, { countInStock });
    return response.data;
  } catch (error) {
    console.error(`Error updating product with id ${id}:`, error);
    throw error;
  }
};
const createProduct = async (productData: Product): Promise<Product> => {
  try {
    const response = await axios.post(baseUrl, productData);
    return response.data;
  } catch (error) {
    console.error(`Error creating product:`, error);
    throw error;
  }
};

export default { fetchAllProducts, fetchProduct, updateProduct, createProduct };
