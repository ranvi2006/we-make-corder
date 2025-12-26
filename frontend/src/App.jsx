import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import LearningPaths from "./pages/LearningPaths";
import Counseling from "./pages/Counseling";
import Team from "./pages/Team";
import Contact from "./pages/Contact";
import AdminCounseling from "./pages/AdminCounseling";
import AdminLogin from "./pages/AdminLogin";
import ProtectedRoute from "./components/ProtectedRoute";
import AdminDashboard from "./pages/AdminDashboard";


export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/counseling"
          element={
            <ProtectedRoute>
              <AdminCounseling />
            </ProtectedRoute>
          }
        />
        <Route path="/" element={<Home />} />
        <Route path="/learning-paths" element={<LearningPaths />} />
        <Route path="/counseling" element={<Counseling />} />
        <Route path="/team" element={<Team />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin/counseling" element={<AdminCounseling />} />

      </Routes>
      <Footer />
    </>
  );
}
