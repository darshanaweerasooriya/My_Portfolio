import React, { useState } from "react";
import {
  FaLinkedin,
  FaMedium,
  FaInstagram,
  FaSquareFacebook,
  FaSquareGithub,
} from "react-icons/fa6";
import { FaBars, FaTimes } from "react-icons/fa";
import "../App.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggle = () => setMenuOpen(!menuOpen);

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <div className="nav-container">

        {/* LEFT SOCIAL ICONS */}
        <div className="nav-logo">
          <a href="https://www.linkedin.com/in/darshana-weerasooriya-86a2ba215/" target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>

          <a href="https://github.com/darshanaweerasooriya" target="_blank" rel="noreferrer">
            <FaSquareGithub />
          </a>

          <a href="https://medium.com/@darshanaweerasooriya11" target="_blank" rel="noreferrer">
            <FaMedium />
          </a>

          <a href="https://www.instagram.com/v.i.b.h.a__/" target="_blank" rel="noreferrer">
            <FaInstagram />
          </a>

          <a href="https://www.facebook.com/profile.php?id=61588554345126" target="_blank" rel="noreferrer">
            <FaSquareFacebook />
          </a>
        </div>

        {/* HAMBURGER */}
        <div className="hamburger" onClick={handleToggle}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* NAV LINKS */}
        <div className={`nav-links ${menuOpen ? "active" : ""}`}>
          <a href="#home" onClick={handleLinkClick}>Home</a>
          <a href="#about" onClick={handleLinkClick}>About</a>
          <a href="#skills" onClick={handleLinkClick}>Skills</a>
          <a href="#projects" onClick={handleLinkClick}>Projects</a>
          <a href="#article" onClick={handleLinkClick}>Articles</a>
          <a href="#contact" onClick={handleLinkClick}>Contact</a>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;