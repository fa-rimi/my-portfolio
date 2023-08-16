/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { techProjects } from "../constants";
import {
  doubleCol,
  doubleColTitle,
  doubleColInfo,
  headingStyles,
  responsiveSingleRow,
} from "../constants/styles";
import Cards from "../components/Cards";
// import Category from "../components/Category";

const Projects = () => {
  return (
    <section id="projects" className={`w-screen flex flex-row sm:flex-col `}>
      <div className={`${doubleCol}`}>
        <div className={`${doubleColTitle}`}>
          <div className={`${headingStyles}`}>Projects</div>
          {/* <Category setData={setData} /> */}
        </div>
        <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4`}>
          <Cards/>
        </div>
      </div>
    </section>
  );
};

export default Projects;
