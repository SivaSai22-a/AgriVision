import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home/Home";
import PredictionPage from "../pages/Prediction/PredictionPage";

import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Dashboard from "../pages/Dashboard/Dashboard";
import Result from "../pages/Result/Result";
import History from "../pages/History/History";
import Weather from "../pages/Weather/Weather";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import Profile from "../pages/Profile/Profile";
import Admin from "../pages/Admin/Admin";
import NotFound from "../pages/NotFound/NotFound";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/prediction" element={<PredictionPage />} />

      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/result" element={<Result />} />
      <Route path="/history" element={<History />} />
      <Route path="/weather" element={<Weather />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/admin" element={<Admin />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRoutes;