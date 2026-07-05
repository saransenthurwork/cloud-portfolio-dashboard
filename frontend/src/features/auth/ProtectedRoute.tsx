import { Navigate } from "react-router-dom";
import type { ReactNode } from "react";
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