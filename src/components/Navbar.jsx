// eslint-disable-next-line no-unused-vars
import React from "react";
import { useState, useEffect } from "react";
import { navLinks } from "../constants/index";
import { hoverFont } from "../constants/styles";

const Navbar = () => {
  const [isNavShrunk, setIsNavShrunk] = useState(false);
  const [active, setActive] = useState("Home");

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsNavShrunk(true);
    } else {
      setIsNavShrunk(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="w-screen">
      <nav
        className={`fixed top-0 z-10 w-screen flex justify-center items-center scroll-smooth ${
          isNavShrunk ? "shrink" : ""
        }`}>
        <ul className="w-screen py-10 px-20 sm:flex hidden justify-evenly items-center">
          {/* We are mapping over our navlinks(getting one nav link, and index) */}
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              // active === nav.title ? "text-white" : "text-dimWhite"
              // when link is active then the title will be white : otherwise dimwhite
              className={`${hoverFont} cursor-pointer text-[17px] ${
                active === nav.title
                  ? "text-[#161B36] font-[700]"
                  : "text-black"
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
