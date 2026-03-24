import React from "react";
import { Link, NavLink } from "react-router-dom";
import "../App.css";
import { FaLinkedin , FaMedium, FaInstagram, FaSquareFacebook, FaSquareGithub } from "react-icons/fa6";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">
       <div className="nav-logo">

  <a href="https://www.linkedin.com/in/darshana-weerasooriya-86a2ba215/" target="_blank" rel="noreferrer">
    <FaLinkedin size={28} title="LinkedIn" />
  </a>

  <a href="https://github.com/darshanaweerasooriya" target="_blank" rel="noreferrer">
    <FaSquareGithub size={28} title="GitHub" />
  </a>

  <a href="https://medium.com/@darshanaweerasooriya11" target="_blank" rel="noreferrer">
    <FaMedium size={28} title="Medium" />
  </a>

  <a href="https://www.instagram.com/v.i.b.h.a__/" target="_blank" rel="noreferrer">
    <FaInstagram size={28} title="Instagram" />
  </a>

  <a href="https://www.facebook.com/profile.php?id=61588554345126" target="_blank" rel="noreferrer">
    <FaSquareFacebook size={28} title="Facebook" />
  </a>

</div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#articles">Articles</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;