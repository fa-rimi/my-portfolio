// Import necessary modules and components
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { ExternalLink } from "react-external-link";
import { workExp } from "../constants/index";
import {
  // Import various styles and CSS classes
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
  raleway,
  expBoxHover,
} from "../constants/styles";
import { Button } from "@material-tailwind/react";
import { ArrowRightLine, ArrowDownLine, ArrowUpLine } from "@rsuite/icons";

// Define the Experience component
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
    // Render the Experience section
    <section id="experience" className={`${genSection2} ${doubleCol}`}>
      <div className={`${doubleColTitle} ${headingStyles}`}>Experience</div>
      <div className={`${doubleColInfo}`}>
        {/* Map over the workExp array and render each work experience section */}
        {workExp.map((exp, index) => (
          <div
            key={exp.id}
            onClick={() => toggleExpanded(index)}
            className={`${expBoxStyle} ${expBoxHover} ${clickable}`}>
            <h2 className={`${expHeading}`}>{exp.name}</h2>
            <div className={`px-2 py-1`}>
              <div className={`${sameLine}`}>
                <h5 className={`${expSubtitle}`}>{exp.role}</h5>
                <h5 className={`${expSubtitle}`}>{exp.date}</h5>
              </div>
              {/* Display skills and an arrow icon if the section is not expanded */}
              {!expandedStates[index] && (
                <div
                  className={`${expSubtitle} flex justify-between px-4 md:px-2 py-3`}>
                  <p>Skills: {exp.skills}</p>
                  <ArrowDownLine />
                </div>
              )}
            </div>
            {/* Display the description and skills if the section is expanded */}
            {expandedStates[index] ? (
              <div>
                <ul className={`${expList}`}>
                  {exp.description.map((desc, index) => (
                    <li key={index} className={`${raleway} py-2`}>
                      {desc}
                    </li>
                  ))}
                </ul>
                <div className={`${expSubtitle} ${sameLine} px-4 md:px-2 py-1`}>
                  <p>Skills: {exp.skills}</p>
                  <ArrowUpLine />
                </div>
              </div>
            ) : null}
          </div>
        ))}
        {/* Render a link to view the full resume */}
        <div className={`w-fit pl-3 ${hoverFont}`}>
          <ExternalLink
            href="https://docs.google.com/document/d/1bieIblNwM_uVwHCFjP3UY3h9Lp8lq7sPpl74P_WhJIU/edit?usp=sharing"
            target="_blank">
            <span className="flex items-center text-[15px]">
              View My Full Resume
              <Button size="sm" variant="text" className="flex items-center">
                <ArrowRightLine />
              </Button>
            </span>
          </ExternalLink>
        </div>
      </div>
    </section>
  );
};

export default Experience;
