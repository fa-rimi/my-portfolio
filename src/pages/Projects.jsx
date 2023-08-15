/* eslint-disable no-unused-vars */
import React from "react";
import { techProjects } from "../constants";
import { doubleCol, doubleColTitle, doubleColInfo, headingStyles } from "../constants/styles"

const Projects = () => {
  return (
    <section id="projects" className={`w-screen flex flex-row`}>
      <div className={`${doubleCol}`}>
        <div className={`${doubleColTitle}`}>
          <div className={`${headingStyles}`}>Projects</div>
          <span>
            Filter by
            <button type="button">/All</button>
            <button type="button">/Design</button>
            <button type="button">/Development</button>
            <button type="button">/In-Progress</button>
          </span>
        </div>
        <div className={`${doubleColInfo}`}>
          {techProjects.map(project => (
            <div key={project.id}>
              <span>
              <div>{project.name}</div>
              <div>{project.type}</div>
              </span>
            </div>
          ))};
        </div>
      </div>
    </section>
  );
};

export default Projects;
