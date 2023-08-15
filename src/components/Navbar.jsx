// eslint-disable-next-line no-unused-vars
import React from "react";
import { useState } from "react";
import { navLinks } from "../constants/index";

const Navbar = () => {
  const [active, setActive] = useState("Home");

  return (
    <div>
      <nav className="w-screen flex justify-center items-center scroll-smooth">
        <ul className="w-screen py-10 px-20 bg-[#161B36] sm:flex hidden justify-evenly items-center">
          {/* We are mapping over our navlinks(getting one nav link, and index) */}
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              // active === nav.title ? "text-white" : "text-dimWhite"
              // when link is active then the title will be white : otherwise dimwhite
              className={`cursor-pointer text-[17px] ${
                active === nav.title ? "text-[#eab308]" : "text-white"
              }`}
              onClick={() => setActive(nav.title)}>
              {/* within the href it is a # instead of / because # (fragment identifier) -- meaning in this single page application i am scrolling down to that section as oppose to / (path) which would take me to a different page all together (maybe later)*/}
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        <div>
          <img></img>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
