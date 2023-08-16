// eslint-disable-next-line no-unused-vars
import React from "react";
import Navbar from "./components/Navbar";
import My from "./pages/My";
import Skills from "./pages/Skills";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";
import "../src/App.css"

const App = () => {
  return (
    <div className={`w-screen h-screen flex flex-col items-center`}>
      <Navbar />
      <My />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <Resume />
    </div>
  );
};

export default App;
