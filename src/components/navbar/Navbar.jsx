import React, { useState } from "react";
import logo from "../../assets/logo.png";
import "./Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="nav-left">
          <div className="navbar-logo">
            <img src={logo} alt="Logo" />
          </div>

          {/* Desktop Links */}
          <ul className="navbar-links">
            <li><a href="#features">Products</a></li>
            <li><a href="#pricing">Solution</a></li>
            <li><a href="#demo">pricing</a></li>
            <li><a href="#about">Resources</a></li>
          </ul>
        </div>

        <div className="nav-right">
          {/* Desktop Actions */}
          <div className="navbar-actions">
            <button className="btn btn-login">Login</button>
            <button className="btn btn-signup">Sign Up Now</button>
          </div>

          {/* Hamburger Icon (mobile only) */}
          <button
            className="hamburger-btn"
            onClick={() => setIsOpen(true)}
            aria-label="Open menu"
          >
            <FaBars />
          </button>
        </div>
      </div>

      {/* Overlay */}
      <div
        className={`nav-overlay ${isOpen ? "active" : ""}`}
        onClick={closeMenu}
      ></div>

      {/* Off-canvas mobile drawer */}
      <div className={`mobile-drawer ${isOpen ? "open" : ""}`}>
        <div className="mobile-drawer-header">
          <img src={logo} alt="Logo" className="drawer-logo" />
          <button
            className="drawer-close-btn"
            onClick={closeMenu}
            aria-label="Close menu"
          >
            <FaTimes />
          </button>
        </div>

        <ul className="mobile-links">
          <li><a href="#features" onClick={closeMenu}>Products</a></li>
          <li><a href="#pricing" onClick={closeMenu}>Solution</a></li>
          <li><a href="#demo" onClick={closeMenu}>pricing</a></li>
          <li><a href="#about" onClick={closeMenu}>Resources</a></li>
        </ul>

        <div className="mobile-actions">
          <button className="btn btn-login" onClick={closeMenu}>Login</button>
          <button className="btn btn-signup" onClick={closeMenu}>Sign Up Now</button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;