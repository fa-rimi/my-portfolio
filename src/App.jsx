// eslint-disable-next-line no-unused-vars
import React from "react";
import Navbar from "./components/Navbar";
import My from "./pages/My";
import Skills from "./pages/Skills";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Footer from "./pages/Footer"; 

const App = () => {
  return (
    <div className={`w-screen h-screen flex flex-col`}>
      <Navbar />
      <div>
        <My />
        <Skills />
        <Experience />
        <Projects />
        <Footer />
      </div>
    </div>
  );
};

export default App;
