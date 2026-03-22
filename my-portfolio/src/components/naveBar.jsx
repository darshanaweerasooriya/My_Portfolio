import React from "react";
import { Link, NavLink } from "react-router-dom";
import "../App.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <h2 className="logo">Darshana.</h2>

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