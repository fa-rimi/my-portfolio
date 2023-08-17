/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Tooltip,
  Button,
} from "@material-tailwind/react";
import { techProjects } from "../constants/index";
import { box, hoverFont } from "../constants/styles";

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
      <span className="font-['Raleway'] font-[500]">
        Filter by
        <button
          type="button"
          onClick={() => setData(techProjects)}
          className={`${hoverFont}`}>
          /All
        </button>
        <button
          type="button"
          onClick={() => filterProjects("Design")}
          className={`${hoverFont}`}>
          /Design
        </button>
        <button
          type="button"
          onClick={() => filterProjects("Develop")}
          className={`${hoverFont}`}>
          /Develop
        </button>
        <button
          type="button"
          onClick={() => filterProjects("In-Progress")}
          className={`${hoverFont}`}>
          /In-Progress
        </button>
      </span>
      <div>
        {data.map((project) => (
          <Card key={project.id} className={`${box} p-10`}>
            <CardHeader>
              <img src="https://placehold.co/300" />
            </CardHeader>
            <CardBody>
              <span className="flex flex-row justify-between items-center">
                <h2>{project.name}</h2>
                <a href="#">
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
                </a>
              </span>
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
