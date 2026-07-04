import { Navigate } from "react-router-dom";
import { ReactNode } from "react";
import { useAuth } from "./AuthProvider";

export default function ProtectedRoute({
  children,
}: {
  children: ReactNode;
}) {
  const { authenticated } =
    useAuth();

  if (!authenticated) {
    return (
      <Navigate
        to="/login"
        replace
      />
    );
  }

  return children;
}