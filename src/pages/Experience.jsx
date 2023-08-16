// import React from "react";
import { workExp } from "../constants/index";
import { doubleCol, doubleColTitle, doubleColInfo, headingStyles, genSection } from "../constants/styles"
import "../App.css"

const Experience = () => {
  return (
    <section id="experience" className={`${genSection} ${doubleCol}`}>
      <div className={`${doubleColTitle} ${headingStyles}`}>Experience</div>
      <div className={`${doubleColInfo}`}>
        {workExp.map((exp) => (
          <div key={exp.id}>
            <h2>{exp.name}</h2>
            <h5>{exp.role}</h5>
            <h4>{exp.description}</h4>
            <h4>{exp.skills}</h4>
          </div>
        ))}
        <div>View Full Resume</div>
      </div>
    </section>
  );
};

export default Experience;
