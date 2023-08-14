// Anything that wont change on the page
import Contact from "../pages/Contact";
import Experience from "../pages/Experience";
import Projects from "../pages/Projects";
import Resume from "../pages/Resume";
import Skills from "../pages/Skills";

// navbar links
export const navLinks = [
  {
    id: "skills",
    title: "skills.",
    path: "/skills",
    component: Skills,
  },
  {
    id: "experience",
    title: "experience.",
    path: "/experience",
    component: Experience,
  },
  {
    id: "projects",
    title: "projects.",
    path: "/projects",
    component: Projects,
  },
  {
    id: "contact",
    title: "contact.",
    path: "/contact",
    component: Contact,
  },
  {
    id: "resume",
    title: "resume.",
    path: "/resume",
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
