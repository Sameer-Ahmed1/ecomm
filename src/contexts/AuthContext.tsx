import React, { createContext, useState, useContext } from "react";
import { AuthContextType, User } from "../types";

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);
interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = (username: string, password: string) => {
    // For now, we'll just check if the username and password are not empty
    if (username && password) {
      setUser({ username });
    } else {
      setUser(null);
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
