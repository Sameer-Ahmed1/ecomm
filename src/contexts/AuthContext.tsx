import React, { createContext, useState, useContext } from "react";
import { AuthContextType, User } from "../types";
import userService from "../services/user";
import { useCart } from "../hooks/useCart";

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);
interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = async (username: string, password: string) => {
    // For now, we'll just check if the username and password are not empty
    try {
      if (username && password) {
        const userFetched = await userService.login({ username, password });
        console.log("userFetched", userFetched);
        setUser(userFetched);
      } else {
        setUser(null);
      }
    } catch (e) {
      setUser(null);
      console.log(e);
    }
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
