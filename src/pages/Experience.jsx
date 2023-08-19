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
} from "../constants/styles";
import { Button } from "@material-tailwind/react";

const Experience = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <section id="experience" className={`${genSection2} ${doubleCol}`}>
      <div className={`${doubleColTitle} ${headingStyles}`}>Experience</div>
      <div className={`${doubleColInfo}`}>
        {workExp.map((exp) => (
          <div
            key={exp.id}
            onClick={toggleExpanded}
            className={`${clickable}`}>
            <h2 className="text-[25px]">{exp.name}</h2>
            <h5 className={`${subTitle}`}>{exp.role}</h5>
            {expanded && (
              <ul className="list-disc pl-6">
                {exp.description.map((desc, index) => (
                  <li key={index} className="py-2">
                    {desc}
                  </li>
                ))}
              </ul>
            )}
            {expanded && exp.skills.length > 0 && (
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
