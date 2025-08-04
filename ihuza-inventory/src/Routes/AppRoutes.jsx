import Login from "../pages/Login"
import Dashboard from "../pages/Dashboard"
import ProductsPage from "../pages/ProductsPage"
import UsersPage from "../pages/UsersPage";
import { Routes, Route } from "react-router-dom";
export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/Dashboard" element={<Dashboard />} />
      <Route path="/Products" element={<ProductsPage />} />
      <Route path="/Users" element={<UsersPage />} />

    </Routes>
  );
}