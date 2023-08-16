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
} from "../constants/styles";
import Cards from "../components/Cards";

const Projects = () => {
  return (
    <section id="projects" className={`w-screen flex flex-row sm:flex-col `}>
      <div className={`${doubleCol}`}>
        <div className={`${doubleColTitle}`}>
          <div className={`${headingStyles}`}>Projects</div>
        </div>
        <div>
          <Cards className={`grid grid-cols-3 gap-12`}/>
        </div>
      </div>
    </section>
  );
};

export default Projects;
