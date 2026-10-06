import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import { useEffect } from "react";

import Home from "./pages/Home";

import About from "./pages/About";
import Contact from "./pages/Contact";

import PatientLab
  from "./pages/labs/PatientLab";

import FinancialAdviserLab
  from "./pages/labs/FinancialAdviserLab";

import ShopBotLab
  from "./pages/labs/ShopBotLab";

import Navbar
  from "./components/Navbar";

import AnimatedBackground
  from "./components/AnimatedBackground";

import ShopBotSignup
  from "./pages/labs/ShopBotSignup";


// =====================================================
// SCROLL TO TOP
// =====================================================

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto",
    });
  }, [pathname]);

  return null;
}


// =====================================================
// APP
// =====================================================

function App() {
  return (
    <BrowserRouter>

      {/* =================================================
          BACKGROUND
      ================================================= */}

      <AnimatedBackground />


      {/* =================================================
          NAVBAR
      ================================================= */}

      <Navbar />


      {/* =================================================
          SCROLL RESET
      ================================================= */}

      <ScrollToTop />


      {/* =================================================
          ROUTES
      ================================================= */}

      <Routes>

        {/* HOME */}

        <Route
          path="/"
          element={
            <Home />
          }
        />


        {/* ABOUT */}

        <Route
          path="/about"
          element={
            <About />
          }
        />


        {/* CONTACT */}

        <Route
          path="/contact"
          element={
            <Contact />
          }
        />


        {/* PATIENT LAB */}

        <Route
          path="/labs/patient-records"
          element={
            <PatientLab />
          }
        />


        {/* FINANCIAL LAB */}

        <Route
          path="/labs/financial-adviser"
          element={
            <FinancialAdviserLab />
          }
        />


        {/* SHOPBOT LAB */}

        <Route
          path="/labs/shopbot"
          element={
            <ShopBotLab />
          }
        />


        {/* SHOPBOT SIGNUP */}

        <Route
          path="/labs/shopbot/signup"
          element={
            <ShopBotSignup />
          }
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;