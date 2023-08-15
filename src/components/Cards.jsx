import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Tooltip,
  Button
} from "@material-tailwind/react";
import { techProjects } from "../constants/index";
import Category from "./Category";

const Cards = () => {
  const phImg = "https://placehold.co/400";
  return (
    <div>
      {techProjects.map((project) => (
        <Card key={project.id}>
          <CardHeader>
            <img src="https://placehold.co/200"/>
          </CardHeader>
          <CardBody>
            <h2>{project.name}</h2>
          </CardBody>
          <CardFooter className="pt-0">
        <a href="#" >
          <Button size="sm" variant="text" className="flex items-center gap-2">
            View Project
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </Button>
        </a>
      </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default Cards;


// https://www.material-tailwind.com/docs/react/card#instagram

