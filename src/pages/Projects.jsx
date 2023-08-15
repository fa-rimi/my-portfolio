/* eslint-disable no-unused-vars */
import React from "react";
import { techProjects } from "../constants";

const Projects = () => {
  return (
    <section id="projects" className={`w-screen flex flex-row`}>
      <div className={`w-screen flex flex-row`}>
        <div className={`w-5/12`}>
          <div>Projects</div>
          <div>Filter</div>
        </div>
        <div className={`w-6/12`}>
          Project 1
        </div>
      </div>
    </section>
  );
};

export default Projects;
