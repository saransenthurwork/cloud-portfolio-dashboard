import { createContext } from "react";

type AuthContextType = {
  authenticated: boolean;
};

export const AuthContext =
  createContext<AuthContextType>({
    authenticated: false,
  });