import { Routes, Route } from "react-router-dom";

import Overview from "../pages/Overview/Overview";

import Login from "../features/auth/Login/Login";

import ProtectedRoute from "../features/auth/ProtectedRoute";
import Containers from "../pages/Containers/Containers";

export default function AppRoutes() {
  return (
    <Routes>

      <Route
        path="/login"
        element={<Login />}
      />

      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Overview />
          </ProtectedRoute>
        }
      />
      <Route
        path="/containers"
        element={
        <ProtectedRoute>
            <Containers />
        </ProtectedRoute>
        }
      />

    </Routes>
  );
}