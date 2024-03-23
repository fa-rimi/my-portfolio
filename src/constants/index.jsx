// Anything that wont change on the page

import My from "../pages/My";
import Experience from "../pages/Experience";
import Projects from "../pages/Projects";
import Skills from "../pages/Skills";
import flipItg from "../assets/flipItg.gif";
import aotny_splash from "../assets/aotny_splash.png";
import bbb from "../assets/bbb.png";
import progress_bar from "../assets/progress_bar.png";

// navbar links
export const navLinks = [
  {
    id: "my",
    title: "My",
    path: "/my",
    component: My,
  },
  {
    id: "skills",
    title: "/skills",
    path: "/skills",
    component: Skills,
  },
  {
    id: "experience",
    title: "/experience",
    path: "/experience",
    component: Experience,
  },
  {
    id: "projects",
    title: "/projects",
    path: "/projects",
    component: Projects,
  },
  // {
  //   id: "resume",
  //   title: "/resume",
  //   path: "/resume",
  //   component: Resume,
  // },
];

export const techSkills = [
  {
    category: "",
    id: "html",
    skills: "HTML",
  },
  {
    category: "",
    id: "css",
    skills: "CSS",
  },
  {
    category: "",
    id: "js",
    skills: "JavaScript",
  },
  {
    category: "",
    id: "r-js",
    skills: "React JS",
  },
  {
    category: "",
    id: "r-js",
    skills: "React JS",
  },
  {
    category: "",
    id: "r-js",
    skills: "React JS",
  },
];

export const workExp = [
  {
    id: "nbllc",
    name: "Neuberger Berman",
    role: "Software Developer Apprentice",
    date: "Oct 2023 - Present",
    description: [
      "in-progress"
    ],
    skills: "Fullstack, Python, SQL",
  },
  {
    id: "cffg",
    name: "Change Food For Good",
    role: "Junior Web Developer & Technical Project Manager",
    date: "Nov 2022 - Present",
    description: [
      "Led a high-performing team of 2 developers in executing full-stack website development projects for grassroots organizations, leveraging APIs to enhance functionality and data integration",
      "Developed and maintained responsive websites using modern tech stack: HTML/CSS, JavaScript, and popular frameworks like Bootstrap and React to create dynamic user interfaces",
      "Oversaw the entire project lifecycle, streamlining debugging process by 12% through the identification of test scenarios and creation of comprehensive test plans",
    ],
    skills: "Fullstack, Bootstrap, GitHub, Git, JIRA, Agile",
  }
];

export const techProjects = [
  {
    category: "Develop",
    id: "flipIT",
    name: "flip IT",
    type: "Game",
    skills: "HTML/CSS, Vanilla JavaScript",
    date: "2023",
    link: "https://github.com/fa-rimi/flipIT",
    imgURL: flipItg,
  },
  {
    category: "Design",
    id: "bbb",
    name: "Beyond Bold And Brave",
    type: "Branding & Design",
    skills: "UX/UI, Canva, Figma, Brand Design",
    date: "2023",
    link: "",
    imgURL: bbb,
  },
  {
    category: "Develop",
    id: "aot",
    name: "America On Trial",
    type: "Web Development",
    skills: "HTML/CSS, JavaScript, jQuery, Venobox, Bootstrap",
    date: "2022-2023",
    link: "https://www.americaontrial.org/",
    imgURL: aotny_splash,
  },
  {
    category: "In-Progress",
    id: "remind-me",
    name: "Remind Me",
    type: "Web Development and iOS",
    skills: "",
    date: "2023-2024",
    link: "",
    imgURL: progress_bar,
  },
  // {
  //   category: "",
  //   id: "",
  //   name: "",
  //   type: "",
  //   skills: "",
  //   date: "",
  //   link: "",
  //   imgURL: ,
  // },
];

export const contactInfo = [
  {
    id: "email",
    type: "email",
    info: "a.fatimaarimi@gmail.com",
    icon: "",
  },
];
