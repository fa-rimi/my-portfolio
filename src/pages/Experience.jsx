// eslint-disable-next-line no-unused-vars
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
  raleway,
  expBoxHover,
} from "../constants/styles";
import { Button } from "@material-tailwind/react";
import { ArrowRightLine, ArrowDownLine, ArrowUpLine } from "@rsuite/icons";

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
    <section id="experience" className={`${genSection2} ${doubleCol}`}>
      <div className={`${doubleColTitle} ${headingStyles}`}>Experience</div>
      <div className={`${doubleColInfo}`}>
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
              {!expandedStates[index] && (
                <div className={`${expSubtitle} flex justify-between px-4 md:px-2 py-3`}>
                  <p>Skills: {exp.skills}</p>
                  <ArrowDownLine/>
                </div>
              )}
            </div>
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
                  <ArrowUpLine/>
                </div>
              </div>
            ) : null}
          </div>
        ))}
        <div className={`w-fit pl-3 ${hoverFont}`}>
          <ExternalLink
            href="https://docs.google.com/document/d/1bieIblNwM_uVwHCFjP3UY3h9Lp8lq7sPpl74P_WhJIU/edit?usp=sharing"
            target="_blank">
            <span className="flex items-center text-[15px]">
              View My Full Resume
              <Button
                size="sm"
                variant="text"
                className="flex items-center">
                  <ArrowRightLine/>
              </Button>
            </span>
          </ExternalLink>
        </div>
      </div>
    </section>
  );
};

export default Experience;
