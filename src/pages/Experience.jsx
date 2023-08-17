// import React from "react";
import { ExternalLink } from "react-external-link";
import { workExp } from "../constants/index";
import {
  doubleCol,
  doubleColTitle,
  doubleColInfo,
  headingStyles,
  genSection,
  hoverFont,
  subTitle,
} from "../constants/styles";
import { Button } from "@material-tailwind/react";
import "../App.css";

const Experience = () => {
  return (
    <section id="experience" className={`${genSection} ${doubleCol}`}>
      <div className={`${doubleColTitle} ${headingStyles}`}>Experience</div>
      <div className={`${doubleColInfo}`}>
        {workExp.map((exp) => (
          <div key={exp.id}>
            <h2 className={`text-[25px]`}>{exp.name}</h2>
            <h5 className={`${subTitle}`}>{exp.role}</h5>
            <div>
            <li>{exp.description[0]}</li>
            <li>{exp.description[1]}</li>
            <li>{exp.description[2]}</li>
            </div>
            <h4>{exp.skills}</h4>
          </div>
        ))}
        <div className={`${hoverFont}`}>
          <ExternalLink href="https://docs.google.com/document/d/1bieIblNwM_uVwHCFjP3UY3h9Lp8lq7sPpl74P_WhJIU/edit?usp=sharing">
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
                {/* <script src="https://cdn.lordicon.com/bhenfmcm.js"></script>
                <lord-icon
                  src="https://cdn.lordicon.com/zmkotitn.json"
                  trigger="hover"
                  colors="primary:#121331"
                  style="width:250px;height:250px"></lord-icon> */}
              </Button>
            </span>
          </ExternalLink>
        </div>
      </div>
    </section>
  );
};

export default Experience;
