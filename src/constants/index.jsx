// Anything that wont change on the page

import My from "../pages/My";
import Contact from "../pages/Contact";
import Experience from "../pages/Experience";
import Projects from "../pages/Projects";
// import Resume from "../pages/Resume";
import Skills from "../pages/Skills";

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
  {
    id: "contact",
    title: "/contact",
    path: "/contact",
    component: Contact,
  },
  // {
  //   id: "resume",
  //   title: "/resume",
  //   path: "/resume",
  //   component: Resume,
  // },
];

// export const responsiveNavLinks = [
//   {
//     id: "skills",
//     title: "// skills",
//   },
//   {
//     id: "experience",
//     title: "// experience",
//   },
//   {
//     id: "contact",
//     title: "// contact",
//   },
//   {
//     id: "resume",
//     title: "// resume",
//   },
// ];

export const workExp = [
  {
    id: "cffg",
    name: "Change Food For Good",
    role: "Junior Web Developer & Technical Project Manager",
    description: [
      "Led a high-performing team of 2 developers in executing full-stack website development projects for grassroots organizations, leveraging APIs to enhance functionality and data integration",
      "Developed and maintained responsive websites using modern tech stack: HTML/CSS, JavaScript, and popular frameworks like Bootstrap and React to create dynamic user interfaces",
      "Oversaw the entire project lifecycle, streamlining debugging process by 12% through the identification of test scenarios and creation of comprehensive test plans",
    ],
    skills: "",
  },
];

export const techProjects = [
  {
    category: "Develop",
    id: "flipIT",
    name: "flip IT",
    type: "Game",
    tech: "",
    link: "",
    imgURL: "",
  },
  {
    category: "Design",
    id: "bbb",
    name: "Beyond Bold And Brave",
    type: "Branding & Design",
    tech: "",
    link: "",
    imgURL: "",
  },
  {
    category: "Develop",
    id: "aot",
    name: "America On Trial",
    type: "Web Development",
    tech: "",
    link: "",
    imgURL: "",
  },
  // {
  //   id: "",
  //   name: "",
  //   type: "",
  //   tech: "",
  //   link: "",
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
