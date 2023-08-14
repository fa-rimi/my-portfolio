// eslint-disable-next-line no-unused-vars
import React from "react";
// eslint-disable-next-line no-unused-vars
import { useState } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { navLinks } from "../constants";

const Navlinks = () => {
  return (
    <Router>
      <nav className="navbar w-screen py-14 flex align-center ">
        {/* Responsive Navbar */}
        <ul className=" sm:flex hidden justify-evenly items-center flex-1">
          {navLinks.map((link) => (
            <li key={link.id} className="cursor-pointer">
              <Link to={`/${link.id}`}>{link.title}</Link>
            </li>
          ))}
        </ul>
        {/* Desktop Navbar */}
      </nav>
    </Router>
  );
};

export default Navlinks;
