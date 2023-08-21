// Import necessary modules and components
/* eslint-disable no-unused-vars */ // This comment disables ESLint warnings for unused variables in this file.
import React, { useState } from "react";
import { Card, CardHeader, CardBody, Button } from "@material-tailwind/react";
import { techProjects } from "../constants/index"; // Import a constant containing tech project data
import {
  // Import various styles and CSS classes
  clickable,
  doubleColInfo,
  filter,
  filterFont,
  filterHoverFont,
  hoverFont,
  projectBoxHover,
  projectBoxStyle,
  projectContent,
  projectHeading,
  projectImgs,
  projectSubtitle,
  raleway,
} from "../constants/styles";
import { ArrowRightLine, ArrowDownLine, ArrowUpLine } from "@rsuite/icons";
import { ExternalLink } from "react-external-link";

// Define the Cards component
const Cards = () => {
  // Initialize state for data, initially set to techProjects
  const [data, setData] = useState(techProjects);

  // Function to filter projects by category
  const filterProjects = (catItem) => {
    // Use the filter method to create a new array containing projects that match the selected category
    // The filter method is an array method that creates a new array containing elements that meet certain criteria
    const result = techProjects.filter((current) => {
      return current.category === catItem;
    });

    // Update the 'data' state with the filtered results, component re-renders, and the list of displayed projects changes to include only those that match the selected category
    setData(result);
  };

  return (
    <div>
      {/* Filter buttons */}
      <span className={`${raleway} ${filter} ${filterFont}`}>
        Filter by
        {/* Reset button to show all projects */}
        <button
          type="button"
          onClick={() => setData(techProjects)} // When clicked, reset to show all projects
          className={`${filterHoverFont}`}>
          /All
        </button>
        {/* Filter button for "Design" category */}
        <button
          type="button"
          onClick={() => filterProjects("Design")} // When clicked, filter by "Design" category
          className={`${filterHoverFont}`}>
          /Design
        </button>
        {/* Filter button for "Develop" category */}
        <button
          type="button"
          onClick={() => filterProjects("Develop")} // When clicked, filter by "Develop" category
          className={`${filterHoverFont}`}>
          /Develop
        </button>
        {/* Filter button for "In-Progress" category */}
        <button
          type="button"
          onClick={() => filterProjects("In-Progress")} // When clicked, filter by "In-Progress" category
          className={`${filterHoverFont}`}>
          /In-Progress
        </button>
      </span>

      <div className={`${doubleColInfo}`}>
        {/* Map over the data (filtered projects) and render each project */}
        {data.map((project) => (
          <Card
            key={project.id}
            className={`${projectBoxStyle} ${projectBoxHover} ${clickable} flex flex-row`}>
            <CardHeader>
              <img src={project.imgURL} className={`${projectImgs}`} />
            </CardHeader>
            <CardBody className={`${projectContent}`}>
              <ExternalLink href={project.link}>
                <span className="flex flex-row justify-between">
                  <h2 className={`${projectHeading}`}>{project.name}</h2>
                  <Button
                    size="sm"
                    variant="text"
                    className="flex items-center gap-2">
                    <ArrowRightLine />
                  </Button>
                </span>
              </ExternalLink>
              <h4 className={`${projectSubtitle}`}>{project.skills}</h4>
              <h4 className={`${projectSubtitle}`}>{project.date}</h4>
            </CardBody>
            {/* <CardFooter className="pt-0"></CardFooter> */}
          </Card>
        ))}

        {/* A message with a link */}
        <div className={`w-fit pl-3 ${hoverFont}`}>
          <ExternalLink href="" target="_blank">
            <span className="flex items-center text-[15px]">
              Project Archive Coming Soon
              <Button size="sm" variant="text" className="flex items-center">
                <ArrowRightLine />
              </Button>
            </span>
          </ExternalLink>
        </div>
      </div>
    </div>
  );
};

export default Cards;
