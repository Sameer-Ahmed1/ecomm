import products from "../Data/products";

function fetchAllProducts() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 1000);
  });
}

function fetchProduct(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const product = products.find((product) => {
        return product.id === id;
      });
      if (product) {
        resolve(product);
      } else {
        reject(new Error("Product not found"));
      }
    }, 1000);
  });
}

export default { fetchAllProducts, fetchProduct };
