import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar-wrapper">
      <nav className="navbar">
        {/* Logo */}
        <a
          href="https://bytes-encrypt-uorw.vercel.app/"
          target="_blank"
          rel="noreferrer"
          className="navbar-logo"
        >
          <span className="logo-bracket"></span>
          BytesEncrypt
          <span className="logo-bracket"></span>
        </a>

        {/* Desktop Navigation */}
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#labs">Labs</a>
          <a href="#about">About Us</a>
        </div>

        {/* Desktop Contact */}
        <a href="#contact" className="contact-btn">
          <span>Contact</span>
          <span className="contact-arrow">↗</span>
        </a>

        {/* Mobile Menu Button */}
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

      {/* Mobile Navigation */}
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

        <a href="#contact" className="mobile-contact-btn" onClick={closeMenu}>
          Contact <span>↗</span>
        </a>
      </div>
    </header>
  );
};

export default Navbar;