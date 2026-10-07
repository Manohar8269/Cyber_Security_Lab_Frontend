import React, { useState } from "react";
import "./Navbar.css";
import { ShieldCheck } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [menuOpen, setMenuOpen] = useState(false);

  // ================= ACTIVE NAV =================
  const [activeNav, setActiveNav] = useState(
    location.pathname.startsWith("/labs") ? "labs" : "home"
  );

  const closeMenu = () => {
    setMenuOpen(false);
  };

  // ================= HOME =================
  const handleHome = () => {
    closeMenu();

    // Home ko active karo
    setActiveNav("home");

    // Agar already Home page par ho
    if (location.pathname === "/") {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });

      return;
    }

    // Kisi bhi Lab page se Home par jao
    navigate("/");
  };

  // ================= LABS =================
  const handleLabs = () => {
    closeMenu();

    // Labs ko active karo
    setActiveNav("labs");

    // Agar already Home page par ho
    if (location.pathname === "/") {
      const labsSection = document.getElementById("labs");

      if (labsSection) {
        labsSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }

      return;
    }

    // Kisi bhi Lab/About/Contact page se Home par jao
    navigate("/");

    // Home load hone ke baad Labs section par scroll
    setTimeout(() => {
      const labsSection = document.getElementById("labs");

      if (labsSection) {
        labsSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 150);
  };

  return (
    <header className="navbar-wrapper">
      <nav className="navbar">

        {/* ================= LOGO ================= */}
        <a
          href="/"
          className="navbar-logo"
          onClick={(e) => {
            e.preventDefault();
            handleHome();
          }}
        >
          <span className="logo-icon">
            <ShieldCheck size={22} />
            <span className="logo-glow"></span>
          </span>

          <span className="logo-text">
            BytesEncrypt
          </span>
        </a>


        {/* ================= DESKTOP NAVIGATION ================= */}
        <div className="nav-links">

          {/* HOME */}
          <a
            href="/"
            className={activeNav === "home" ? "active" : ""}
            onClick={(e) => {
              e.preventDefault();
              handleHome();
            }}
          >
            Home
          </a>

          {/* LABS */}
          <a
            href="#labs"
            className={activeNav === "labs" ? "active" : ""}
            onClick={(e) => {
              e.preventDefault();
              handleLabs();
            }}
          >
            Labs
          </a>

        </div>


        {/* ================= MOBILE MENU BUTTON ================= */}
        <button
          className={`menu-toggle ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

      </nav>


      {/* ================= MOBILE NAVIGATION ================= */}
      <div
        className={`mobile-menu ${menuOpen ? "open" : ""}`}
      >

        {/* MOBILE HOME */}
        <a
          href="/"
          className={activeNav === "home" ? "active" : ""}
          onClick={(e) => {
            e.preventDefault();
            handleHome();
          }}
        >
          Home
        </a>


        {/* MOBILE LABS */}
        <a
          href="#labs"
          className={activeNav === "labs" ? "active" : ""}
          onClick={(e) => {
            e.preventDefault();
            handleLabs();
          }}
        >
          Labs
        </a>

      </div>
    </header>
  );
};

export default Navbar;