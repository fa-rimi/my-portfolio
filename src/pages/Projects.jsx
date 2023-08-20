/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { techProjects } from "../constants";
import {
  doubleCol,
  doubleColTitle,
  doubleColInfo,
  headingStyles,
  genSection3,
} from "../constants/styles";
import Cards from "../components/Cards";

const Projects = () => {
  return (
    <section id="projects" className={`${genSection3} ${doubleCol}`}>
      <div className={`${doubleColTitle} ${headingStyles}`}>Projects</div>
      <div className={`${doubleColInfo}`}>
        <Cards className={``} />
      </div>
    </section>
  );
};

export default Projects;
