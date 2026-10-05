import React, { useState } from "react";
import "./Navbar.css";
import { ShieldCheck } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar-wrapper">
      <nav className="navbar">

        {/* ================= LOGO ================= */}
        <a
          href="https://bytes-encrypt-uorw.vercel.app/"
          target="_blank"
          rel="noreferrer"
          className="navbar-logo"
        >
          <span className="logo-icon">
            <ShieldCheck size={22} />
            <span className="logo-glow"></span>
          </span>

          <span className="logo-text">BytesEncrypt</span>
        </a>

        {/* ================= DESKTOP NAVIGATION ================= */}
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#labs">Labs</a>
          <a href="#about">About Us</a>
        </div>

        {/* ================= DESKTOP CONTACT ================= */}
        <a href="#contact" className="contact-btn">
          <span>Contact</span>
          <span className="contact-arrow">↗</span>
        </a>

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
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <a href="#home" onClick={closeMenu}>
          Home
        </a>

        <a href="#labs" onClick={closeMenu}>
          Labs
        </a>

        <a href="#about" onClick={closeMenu}>
          About Us
        </a>

        <a
          href="#contact"
          className="mobile-contact-btn"
          onClick={closeMenu}
        >
          Contact <span>↗</span>
        </a>
      </div>
    </header>
  );
};

export default Navbar;