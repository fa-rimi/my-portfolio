// import React from "react";
import { workExp } from "../constants/index";

const Experience = () => {
  return (
    <section id="experience" className={`w-screen flex flex-row`}>
      <div className={`w-5/12`}>Experience</div>
      <div className={`w-6/12 flex flex-col md:flex-col `}>
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
