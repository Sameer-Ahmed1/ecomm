import car from "../assets/images/car.jpg";
import bluetshirt from "../assets/images/bluetshirt.jpg";
import jacket from "../assets/images/jacket.jpg";
import trousers1 from "../assets/images/trousers1.jpg";
import trousers2 from "../assets/images/trousers2.jpg";
import yellowshirt from "../assets/images/yellowshirt.jpg";
import { Product } from "../types";
const products: Product[] = [
  {
    id: 1,
    name: "Product 1",
    description: "This is product 1",
    price: 100,
    image: car,
  },
  {
    id: 2,
    name: "Product 2",
    description: "This is product 2",
    price: 200,
    image: bluetshirt,
  },
  {
    id: 3,
    name: "Product 3",
    description: "This is product 3",
    price: 300,
    image: jacket,
  },
  {
    id: 4,
    name: "Product 4",
    description: "This is product 4",
    price: 400,
    image: trousers1,
  },
  {
    id: 5,
    name: "Product 5",
    description: "This is product 5",
    price: 500,
    image: trousers2,
  },
  {
    id: 6,
    name: "Product 6",
    description: "This is product 6",
    price: 600,
    image: yellowshirt,
  },

  // Add more products as needed
];
export default products;
