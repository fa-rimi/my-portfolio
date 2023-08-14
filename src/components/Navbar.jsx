// eslint-disable-next-line no-unused-vars
import React from "react";
import { useState } from "react";
import { navLinks } from "../constants/index";

// import { BrowserRouter, Routes, Route } from "react-router-dom";

const Navbar = () => {
  const [active, setActive] = useState("Home");

  return (
    <div>
      <nav className="w-screen flex items-center">
        <ul className="py-10 flex flex-row sm:flex hidden justify-evenly">
          {/* We are mapping over our navlinks(getting one nav link, and index) */}
          {navLinks.map((nav, index) => (
            <li
              key={nav.id}
              // active === nav.title ? "text-white" : "text-dimWhite"
              // when link is active then the title will be white : otherwise dimwhite
              className={`cursor-pointer text-[17px] ${
                active === nav.title ? `#eab308` : "text-black"
              } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
              onClick={() => setActive(nav.title)}>
              {/* within the href it is a # instead of / because # (fragment identifier) -- meaning in this single page application i am scrolling down to that section as oppose to / (path) which would take me to a different page all together (maybe later)*/}
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
