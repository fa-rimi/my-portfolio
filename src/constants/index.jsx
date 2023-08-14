// Anything that wont change on the page
import Contact from "../pages/Contact";
import Experience from "../pages/Experience";
import Projects from "../pages/Projects";
import Resume from "../pages/Resume";
import Skills from "../pages/Skills";

// navbar links
export const navLinks = [
  {
    id: "my",
    title: "My",
    path: "/",
    // component: My
  },
  {
    id: "skills",
    title: "skills.",
    path: "./src/pages/Skills.jsx",
    component: Skills,
  },
  {
    id: "experience",
    title: "experience.",
    path: "./src/pages/Experience.jsx",
    component: Experience,
  },
  {
    id: "projects",
    title: "projects.",
    path: "./src/pages/Projects.jsx",
    component: Projects,
  },
  {
    id: "contact",
    title: "contact.",
    path: "./src/pages/Contact.jsx",
    component: Contact,
  },
  {
    id: "resume",
    title: "resume.",
    path: "./src/pages/Resume.jsx",
    component: Resume,
  },
];

export const responsiveNavLinks = [
  {
    id: "my",
    title: "My",
  },
  {
    id: "skills",
    title: "// skills",
  },
  {
    id: "experience",
    title: "// experience",
  },
  {
    id: "projects",
    title: "// projects",
  },
  {
    id: "contact",
    title: "// contact",
  },
  {
    id: "resume",
    title: "// resume",
  },
];
