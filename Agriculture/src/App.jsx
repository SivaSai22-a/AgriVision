import React from "react";
import { Routes, Route } from "react-router-dom";

// ================================
// NAVBAR
// ================================
import Navbar from "./components/Navbar.jsx";

// ================================
// PAGES
// ================================

import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";

import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Profile from "./pages/Profile/Profile";

import Prediction from "./pages/Prediction/PredictionPage";
import Dashboard from "./pages/Dashboard/Dashboard";

import Weather from "./pages/Weather/Weather";
import Result from "./pages/Result/Result";

import Admin from "./pages/Admin/Admin";
import NotFound from "./pages/NotFound/NotFound";


function App() {
  return (
    <>
      {/* NAVBAR */}
      <Navbar />

      {/* ALL ROUTES */}
      <Routes>

        {/* HOME */}
        <Route
          path="/"
          element={<Home />}
        />

        {/* ABOUT */}
        <Route
          path="/about"
          element={<About />}
        />

        {/* CONTACT */}
        <Route
          path="/contact"
          element={<Contact />}
        />

        {/* LOGIN */}
        <Route
          path="/login"
          element={<Login />}
        />

        {/* REGISTER */}
        <Route
          path="/register"
          element={<Register />}
        />

        {/* PROFILE */}
        <Route
          path="/profile"
          element={<Profile />}
        />

        {/* PREDICTION */}
        <Route
          path="/prediction"
          element={<Prediction />}
        />

        {/* DASHBOARD */}
        <Route
          path="/dashboard"
          element={<Dashboard />}
        />

        {/* WEATHER */}
        <Route
          path="/weather"
          element={<Weather />}
        />

        {/* RESULT */}
        <Route
          path="/result"
          element={<Result />}
        />

        {/* ADMIN */}
        <Route
          path="/admin"
          element={<Admin />}
        />

        {/* 404 */}
        <Route
          path="*"
          element={<NotFound />}
        />

      </Routes>
    </>
  );
}

export default App;