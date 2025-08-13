import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">💰 SpendSense</div>
      <ul className="navbar-links">
        <li><a href="/">Home</a></li>
        <li><a href="https://github.com/mitrajit-55">About</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
