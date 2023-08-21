/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { navLinks } from "../constants/index";
import {
  clickable,
  hoverFont,
  navbarPositioning,
  navbarStyle,
  shrink,
} from "../constants/styles";

const Navbar = () => {
  const [isNavShrunk, setIsNavShrunk] = useState(false);
  const [active, setActive] = useState("Home");

  const handleScroll = () => {
    setIsNavShrunk(window.scrollY > 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="w-screen">
      <nav className={`${navbarPositioning} ${isNavShrunk ? "shrink" : ""}`}>
        <ul className={`${navbarStyle}`}>
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${hoverFont} ${clickable} text-[17px] ${
                active === nav.title
                  ? "text-[#161B36] font-[700]"
                  : "text-black"
              }`}
              onClick={() => setActive(nav.title)}>
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
