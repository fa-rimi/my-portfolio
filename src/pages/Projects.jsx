/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { techProjects } from "../constants";
import {
  doubleCol,
  doubleColTitle,
  doubleColInfo,
  doubleColDisplay,
  headingStyles,
  responsiveSingleRow,
  genSection3,
} from "../constants/styles";
import Cards from "../components/Cards";

const Projects = () => {
  return (
    <section id="projects" className={`${genSection3} flex flex-row sm:flex-col `}>
      <div className={`${doubleCol}`}>
        <div className={`${doubleColTitle}`}>
          <div className={`${headingStyles}`}>Projects</div>
        </div>
        <div>
          <Cards className={``}/>
        </div>
      </div>
    </section>
  );
};

export default Projects;
