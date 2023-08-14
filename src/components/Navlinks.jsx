// eslint-disable-next-line no-unused-vars
import React from "react";
// eslint-disable-next-line no-unused-vars
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { navLinks } from "../constants";

const Navlinks = () => {
  return (
    <Router>
      <nav className="navbar w-screen py-14 flex align-center ">
        {/* Responsive Navbar */}
        <ul className=" sm:flex hidden justify-evenly items-center flex-1">
          <li>
            <Link to="/">My</Link>
          </li>
          {navLinks.map((link) => (
            <li key={link.id} className="cursor-pointer">
              <Link to={`/${link.id}`}>{link.title}</Link>
              {/* <Link to={link.path}>{link.title}</Link> */}
            </li>
          ))}
        </ul>
        {/* Desktop Navbar */}
        {/* <Routes>
          {navLinks.map((link) => (
            <Route key={link.id} path={`/${link.id}`} component={link.component} />
          ))}
        </Routes> */}
        <Routes>
          {navLinks.map((link) => (
            <Route key={link.id} path={`/${link.id}`} element={<link.component />} />
          ))}
        </Routes>
      </nav>
    </Router>
  );
};

// console.log(Navlinks);
export default Navlinks;
