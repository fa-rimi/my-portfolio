import React, { useState, useEffect } from "react";
import { navLinks } from "../constants/index";
import { clickable, hoverFont } from "../constants/styles";

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
      <nav
        className={`fixed top-0 z-10 w-screen flex justify-center items-center scroll-smooth ${
          isNavShrunk ? "shrink" : ""
        }`}>
        <ul className="w-screen py-10 px-20 sm:flex hidden justify-evenly items-center">
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

        <div>
          {/* <img alt="Logo"></img> */}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
