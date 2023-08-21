/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Card, CardHeader, CardBody, Button } from "@material-tailwind/react";
import { techProjects } from "../constants/index";
import {
  clickable,
  doubleColInfo,
  filter,
  filterFont,
  filterHoverFont,
  projectBoxHover,
  projectBoxStyle,
  raleway,
} from "../constants/styles";
import { ArrowRightLine, ArrowDownLine, ArrowUpLine } from "@rsuite/icons";
import { ExternalLink } from "react-external-link";

const Cards = () => {
  const [data, setData] = useState(techProjects);
  const filterProjects = (catItem) => {
    const result = techProjects.filter((current) => {
      return current.category === catItem;
    });
    setData(result);
  };
  return (
    <div>
      <span className={`${raleway} ${filter} ${filterFont}`}>
        Filter by
        <button
          type="button"
          onClick={() => setData(techProjects)}
          className={`${filterHoverFont}`}>
          /All
        </button>
        <button
          type="button"
          onClick={() => filterProjects("Design")}
          className={`${filterHoverFont}`}>
          /Design
        </button>
        <button
          type="button"
          onClick={() => filterProjects("Develop")}
          className={`${filterHoverFont}`}>
          /Develop
        </button>
        <button
          type="button"
          onClick={() => filterProjects("In-Progress")}
          className={`${filterHoverFont}`}>
          /In-Progress
        </button>
      </span>
      <div className={`${doubleColInfo}`}>
        {data.map((project) => (
          <Card
            key={project.id}
            className={`${projectBoxStyle} ${projectBoxHover} ${clickable} p-10`}>
            <CardHeader>
              <img src={project.imgURL} />
            </CardHeader>
            <CardBody>
              <ExternalLink href={project.link}>
                <span className="flex flex-row justify-between items-center">
                  <h2>{project.name}</h2>
                  <Button
                    size="sm"
                    variant="text"
                    className="flex items-center gap-2">
                    <ArrowRightLine />
                    {/* <script src="https://cdn.lordicon.com/bhenfmcm.js"></script>
                <lord-icon
                  src="https://cdn.lordicon.com/zmkotitn.json"
                  trigger="hover"
                  colors="primary:#121331"
                  style="width:250px;height:250px"></lord-icon> */}
                  </Button>
                </span>
              </ExternalLink>
            </CardBody>
            {/* <CardFooter className="pt-0"></CardFooter> */}
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Cards;

// https://www.material-tailwind.com/docs/react/card#instagram
