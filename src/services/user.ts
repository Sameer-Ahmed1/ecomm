import users from "../Data/users";
import { User } from "../types";
import { CartItem } from "../types";

function fetchAllUsers(): Promise<User[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(users);
    }, 1000);
  });
}

function fetchUser(username: string): Promise<User> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = users.find((user) => {
        return user.username === username;
      });
      if (user) {
        resolve(user);
      } else {
        reject(new Error("User not found"));
      }
    }, 1000);
  });
}

function updateUserCart(username: string, cart: CartItem[]): Promise<User> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = users.find((user) => user.username === username);
      if (user) {
        user.cart = cart;
        resolve(user);
      } else {
        reject(new Error("User not found"));
      }
    }, 1000);
  });
}

export default { fetchAllUsers, fetchUser, updateUserCart };
