// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import { genSection } from "../constants/styles";
import groovy_background from "../assets/groovy_background.jpeg";
import smiley from "../assets/smiley.jpeg"

const My = () => {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const parallaxOffset = scrollY * 0.3; // Adjust the parallax speed here

  return (
    <section
      id="my"
      className={`${genSection}`}
      style={{
        backgroundImage: `url(${smiley})`,
        backgroundAttachment: "fixed",
        backgroundPosition: "",
        backgroundRepeat: "repeat",
        backgroundSize: "cover",
        "@media (maxWidth: 640px)": {
          backgroundSize: "contain", // You can adjust this value as needed
        },
      }}>
      <div
        className={`text-white flex flex-col justify-center items-center`}
        style={{ transform: `translateY(-${parallaxOffset}px)` }}>
        <div className="text-[75px] md:sm:text-[150px]">Rimi</div>
        <div className="font-['Cousine'] text-[50px] md:sm:font-[60px]">
          Full Stack Developer & Designer
        </div>
      </div>
    </section>
  );
};

export default My;
