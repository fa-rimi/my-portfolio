// eslint-disable-next-line no-unused-vars
import React from "react";
import Navbar from "./components/Navbar";
import My from "./pages/My";
import Skills from "./pages/Skills";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";
import "../src/App.css";

const App = () => {
  return (
    <div className={`w-screen h-screen flex flex-col`}>
      <Navbar />
      <div className={`px-[50px]`}>
        <My />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
        <Resume />
      </div>
    </div>
  );
};

export default App;
