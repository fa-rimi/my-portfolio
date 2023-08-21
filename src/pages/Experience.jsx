// Import necessary modules and components
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { ExternalLink } from "react-external-link"; // Import the ExternalLink component for external links
import { workExp } from "../constants/index"; // Import work experience data
import {
  // Import various styles and CSS classes from a styles module
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
} from "../constants/styles"; // Import CSS classes and styles
import { Button } from "@material-tailwind/react"; // Import a button component
import { ArrowRightLine, ArrowDownLine, ArrowUpLine } from "@rsuite/icons"; // Import arrow icons from the RSuite library
import Fatima_Rimi from "../assets/Fatima_Rimi.pdf"

// Define the Experience component
const Experience = () => {
  // Create an array of states, one for each experience section
  const [expandedStates, setExpandedStates] = useState(
    Array(workExp.length).fill(false)
  );

  // Function to toggle the expanded state of a specific section
  const toggleExpanded = (index) => {
    // Create a new array of expandedStates based on the current state
    const newExpandedStates = [...expandedStates];
    // Toggle the state at the specified index (expand if collapsed, collapse if expanded)
    newExpandedStates[index] = !newExpandedStates[index];
    // Update the expandedStates state with the new array
    setExpandedStates(newExpandedStates);
  };

  return (
    // Render the Experience section
    <section id="experience" className={`${genSection2} ${doubleCol}`}>
      {/* Title of the Experience section */}
      <div className={`${doubleColTitle} ${headingStyles}`}>Experience</div>
      <div className={`${doubleColInfo}`}>
        {/* Map over the workExp array and render each work experience section */}
        {workExp.map((exp, index) => (
          <div
            key={exp.id} // Use a unique key for each section
            onClick={() => toggleExpanded(index)} // Call toggleExpanded when clicked
            className={`${expBoxStyle} ${expBoxHover} ${clickable}`}>
            {/* Display the name of the work experience */}
            <h2 className={`${expHeading}`}>{exp.name}</h2>
            <div className={`px-2 py-1`}>
              <div className={`${sameLine}`}>
                {/* Display the role and date in the same line */}
                <h5 className={`${expSubtitle}`}>{exp.role}</h5>
                <h5 className={`${expSubtitle}`}>{exp.date}</h5>
              </div>
              {/* Display skills and an arrow icon if the section is not expanded */}
              {!expandedStates[index] && (
                <div
                  className={`${expSubtitle} flex justify-between px-4 md:px-2 py-3`}>
                  <p>Skills: {exp.skills}</p>
                  <ArrowDownLine /> {/* Down arrow icon */}
                </div>
              )}
            </div>
            {/* Display the description and skills if the section is expanded */}
            {expandedStates[index] ? (
              <div>
                <ul className={`${expList}`}>
                  {/* Map over the description array and display each item */}
                  {exp.description.map((desc, index) => (
                    <li key={index} className={`${raleway} py-2`}>
                      {desc}
                    </li>
                  ))}
                </ul>
                <div className={`${expSubtitle} ${sameLine} px-4 md:px-2 py-1`}>
                  <p>Skills: {exp.skills}</p>
                  <ArrowUpLine /> {/* Up arrow icon */}
                </div>
              </div>
            ) : null}
          </div>
        ))}
        {/* Render a link to view the full resume */}
        <div className={`w-fit pl-3 ${hoverFont}`}>
          <ExternalLink
            href={Fatima_Rimi} // Link to the full resume
            target="_blank" // Open in a new tab
          >
            <span className="flex items-center text-[15px]">
              View My Full Resume
              <Button size="sm" variant="text" className="flex items-center">
                <ArrowRightLine /> {/* Right arrow icon */}
              </Button>
            </span>
          </ExternalLink>
        </div>
      </div>
    </section>
  );
};

export default Experience;
