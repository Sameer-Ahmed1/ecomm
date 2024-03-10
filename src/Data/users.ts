import { User } from "../types";

const users: User[] = [
  {
    username: "sameer",
    cart: [
      {
        id: 1,
        name: "Product 1",
        quantity: 1,
      },
      {
        id: 2,
        name: "Product 2",
        quantity: 2,
      },
    ],
  },
  {
    username: "user2",
    cart: [],
  },
];
export default users;
