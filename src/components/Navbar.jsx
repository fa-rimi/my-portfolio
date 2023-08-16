// eslint-disable-next-line no-unused-vars
import React from "react";
import { useState } from "react";
import { navLinks } from "../constants/index";
// import { close, menu } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("Home");

  return (
    <div className="">
      <nav className="w-screen flex justify-center items-center scroll-smooth">
        <ul className="w-screen py-10 px-20 sm:flex hidden justify-evenly items-center">
          {/* We are mapping over our navlinks(getting one nav link, and index) */}
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              // active === nav.title ? "text-white" : "text-dimWhite"
              // when link is active then the title will be white : otherwise dimwhite
              className={`cursor-pointer text-[17px] ${
                active === nav.title ? "text-slate-400" : "text-white"
              }`}
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
