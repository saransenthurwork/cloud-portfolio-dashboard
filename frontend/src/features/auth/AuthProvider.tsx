import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

type AuthContextType = {
  authenticated: boolean;
  login: (token: string) => void;
  logout: () => void;
};

const AuthContext =
  createContext<AuthContextType | null>(null);

export function AuthProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [authenticated, setAuthenticated] =
    useState(false);

  useEffect(() => {
    const token =
      localStorage.getItem("token");

    setAuthenticated(!!token);
  }, []);

  function login(token: string) {
    localStorage.setItem(
      "token",
      token
    );

    setAuthenticated(true);
  }

  function logout() {
    localStorage.removeItem(
      "token"
    );

    setAuthenticated(false);
  }

  return (
    <AuthContext.Provider
      value={{
        authenticated,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context =
    useContext(AuthContext);

  if (!context) {
    throw new Error(
      "useAuth must be used inside AuthProvider"
    );
  }

  return context;
}