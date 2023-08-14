// eslint-disable-next-line no-unused-vars
import React from "react";
// eslint-disable-next-line no-unused-vars
import { useState } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { navLinks } from "../constants";

const Navbar = () => {
  return (
    <Router>
      <nav className="nav flex align-center py-14">
        <ul className="w-screen flex flex-row justify-evenly">
          {navLinks.map((link) => (
            <li key={link.id}>
              <Link to={`/${link.id}`}>{link.title}</Link>
            </li>
          ))}
        </ul>
        {/* Mobile Navbar */}
      </nav>
    </Router>
  );
};

export default Navbar;
