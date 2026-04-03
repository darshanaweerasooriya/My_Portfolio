import React, { useState } from "react";
import { FaLinkedin, FaMedium, FaInstagram, FaSquareFacebook, FaSquareGithub } from "react-icons/fa6";
import { FaBars, FaTimes } from "react-icons/fa";
import "../App.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">

        {/* LEFT ICONS */}
        <div className="nav-logo">
          <a href="https://www.linkedin.com/in/darshana-weerasooriya-86a2ba215/" target="_blank" rel="noreferrer">
            <FaLinkedin size={22} />
          </a>

          <a href="https://github.com/darshanaweerasooriya" target="_blank" rel="noreferrer">
            <FaSquareGithub size={22} />
          </a>

          <a href="https://medium.com/@darshanaweerasooriya11" target="_blank" rel="noreferrer">
            <FaMedium size={22} />
          </a>

          <a href="https://www.instagram.com/v.i.b.h.a__/" target="_blank" rel="noreferrer">
            <FaInstagram size={22} />
          </a>

          <a href="https://www.facebook.com/profile.php?id=61588554345126" target="_blank" rel="noreferrer">
            <FaSquareFacebook size={22} />
          </a>
        </div>

        {/* HAMBURGER */}
        <div className="hamburger" onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* NAV LINKS */}
        <div className={`nav-links ${menuOpen ? "active" : ""}`}>
          <a href="#home" onClick={toggleMenu}>Home</a>
          <a href="#about" onClick={toggleMenu}>About</a>
          <a href="#skills" onClick={toggleMenu}>Skills</a>
          <a href="#projects" onClick={toggleMenu}>Projects</a>
          <a href="#article" onClick={toggleMenu}>Articles</a>
          <a href="#contact" onClick={toggleMenu}>Contact</a>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;