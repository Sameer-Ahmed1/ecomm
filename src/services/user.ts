import axios from "axios";

const baseUrl = "http://localhost:5000/api"; // replace with your backend URL

const login = async (credentials: any) => {
  try {
    const response = await axios.post(`${baseUrl}/login`, credentials);
    return response.data;
  } catch (e) {
    console.log(" log in error ");
    throw new Error("log in error");
  }
};

const signup = async (newUser: any) => {
  const response = await axios.post(`${baseUrl}/login/signup`, newUser);
  return response.data;
};

const addToCart = async (id: string, newCart: any) => {
  try {
    const modifiedCart = newCart.map((item: any) => ({
      ...item,
      product: item.id,
    }));

    const response = await axios.put(`${baseUrl}/users/${id}/cart`, {
      cart: modifiedCart,
    });
    return response.data;
  } catch (e) {
    console.log("add to cart error");
    throw new Error("add to cart error");
  }
};
export default { login, signup, addToCart };
