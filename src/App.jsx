import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Home from "./pages/Home";

import About from "./pages/About";

import PatientLab
  from "./pages/labs/PatientLab";

import FinancialAdviserLab
  from "./pages/labs/FinancialAdviserLab";

import ShopBotLab
  from "./pages/labs/ShopBotLab";

import Navbar from "./components/Navbar";

import Contact from "./pages/Contact";

import AnimatedBackground from "./components/AnimatedBackground";

function App() {
  return (
    <BrowserRouter>

      {/* Background - entire website */}
      <AnimatedBackground />

      {/* Navbar */}
      <Navbar />


      <Routes>

        {/*HOME*/}

        <Route
          path="/"
          element={<Home />}
        />


        {/*ABOUT US*/}

        <Route
          path="/about"
          element={<About />}
        />

        {/*Contact*/}

        <Route
          path="/contact"
          element={<Contact />}
        />


        {/*PATIENT LAB*/}

        <Route
          path="/labs/patient-records"
          element={
            <PatientLab />
          }
        />


        {/*FINANCIAL LAB*/}

        <Route
          path="/labs/financial-adviser"
          element={
            <FinancialAdviserLab />
          }
        />


        {/*SHOPBOT LAB*/}

        <Route
          path="/labs/shopbot"
          element={
            <ShopBotLab />
          }
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;