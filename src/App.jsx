import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/login";
import Register from "./pages/register";
import Dashboard from "./pages/Dashboard";
import Categories from "./pages/Categories";
import Reports from "./pages/Reports";
import LegalPolicy from "./pages/LegalPolicy";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import DashBoardLayout from "./layouts/DashBoardLayout";
import Location from "./pages/Location";
import Rating from "./pages/Rating";

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Auth Pages (Bina Sidebar ke) */}
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />

        {/* Dashboard Pages (DashBoardLayout ke andar) */}
        <Route element={<DashBoardLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/legal-policy" element={<LegalPolicy />} />
          <Route path="/location" element={<Location />} />
          <Route path="/rating" element={<Rating />} />
        </Route>

        {/* Galat URL hone par Dashboard par bhejne ke liye */}
        <Route path="*" element={<Navigate to="/dashboard" replace />} />
      </Routes>
    </Router>
  );
}