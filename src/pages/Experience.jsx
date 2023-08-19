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
  clickable,
  expBoxStyle,
  sameLine,
  expHeading,
  expSubtitle,
  expList,
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
      className={`${genSection2} ${doubleCol}`}>
      <div className={`${doubleColTitle} ${headingStyles}`}>Experience</div>
      <div className={`${doubleColInfo}`}>
        {workExp.map((exp, index) => (
          <div
            key={exp.id}
            onClick={() => toggleExpanded(index)}
            className={`${expBoxStyle} ${clickable}`}>
            <h2 className={`${expHeading}`}>{exp.name}</h2>
            <div className={`${sameLine} px-2 py-1`}>
              <h5 className={`${expSubtitle}`}>{exp.role}</h5>
              <h5 className={`${expSubtitle}`}>{exp.date}</h5>
            </div>
            {expandedStates[index] && (
              <ul className={`${expList}`}>
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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="h-4 w-4">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
              </Button>
            </span>
          </ExternalLink>
        </div>
      </div>
    </section>
  );
};

export default Experience;
