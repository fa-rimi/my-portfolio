/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import {
  doubleCol,
  doubleColTitle,
  doubleColInfo,
  headingStyles,
  genSection2,
} from "../constants/styles";
import Cards from "../components/Cards";

const Projects = () => {
  return (
    <section id="projects" className={`${genSection2}`}>
      <div className={`${doubleColInfo}`}>
        <Cards className={``} />
      </div>
    </section>
  );
};

export default Projects;
