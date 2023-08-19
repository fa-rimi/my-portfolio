import React, { useState } from "react";
import { ExternalLink } from "react-external-link";
import { workExp } from "../constants/index";
import {
  doubleCol,
  doubleColTitle,
  doubleColInfo,
  headingStyles,
  genSection2,
  hoverFont,
  subTitle,
  clickable,
  expBoxStyle,
} from "../constants/styles";
import { Button } from "@material-tailwind/react";

const Experience = () => {
  // Create an array of states, one for each experience section
  const [expandedStates, setExpandedStates] = useState(
    Array(workExp.length).fill(false)
  );

  // Function to toggle the expanded state of a specific section
  const toggleExpanded = (index) => {
    const newExpandedStates = [...expandedStates];
    newExpandedStates[index] = !newExpandedStates[index];
    setExpandedStates(newExpandedStates);
  };

  return (
    <section
      id="experience"
      className={`${genSection2} ${doubleCol} sm:flex-row`}>
      <div className={`${doubleColTitle} ${headingStyles}`}>Experience</div>
      <div className={`${doubleColInfo}`}>
        {workExp.map((exp, index) => (
          <div
            key={exp.id}
            onClick={() => toggleExpanded(index)}
            className={`${expBoxStyle} ${clickable}`}>
            <h2 className="text-[25px]">{exp.name}</h2>
            <div className="flex flex-row justify-between">
              <h5 className={`${subTitle}`}>{exp.role}</h5>
              <h5 className={`${subTitle}`}>{exp.date}</h5>
            </div>
            {expandedStates[index] && (
              <ul className="list-disc pl-6">
                {exp.description.map((desc, index) => (
                  <li key={index} className="py-2">
                    {desc}
                  </li>
                ))}
              </ul>
            )}
            {expandedStates[index] && exp.skills.length > 0 && (
              <div>
                <h4>Skills:</h4>
                <ul className="list-disc pl-6">
                  {exp.skills.map((skill, index) => (
                    <li key={index}>{skill}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
        <div className={`${hoverFont}`}>
          <ExternalLink
            href="https://docs.google.com/document/d/1bieIblNwM_uVwHCFjP3UY3h9Lp8lq7sPpl74P_WhJIU/edit?usp=sharing"
            target="_blank">
            <span className="flex items-center">
              View My Full Resume{" "}
              <Button
                size="sm"
                variant="text"
                className="flex items-center gap-2">
                {/* Add your resume link icon or animation here */}
              </Button>
            </span>
          </ExternalLink>
        </div>
      </div>
    </section>
  );
};

export default Experience;
