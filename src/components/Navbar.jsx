// eslint-disable-next-line no-unused-vars
import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Experience from "../pages/Experience";
import Homepage from "../pages/Homepage";
import Projects from "../pages/Projects";
import Resume from "../pages/Resume";

export default function Navbar() {
  return (
    <Router>
      <div>
        <nav className="nav flex flex-row">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/About">About</Link></li>
            <li><Link to="/Experience">Experience</Link></li>
            <li><Link to="/Projects">Projects</Link></li>
            <li><Link to="/Contact">Contact</Link></li>
            <li><Link to="/Resume">Resume</Link></li>
          </ul>
        </nav>
        <Route path="/" exact component={Homepage} />
        <Route path="/About" component={About} />
        <Route path="/Experience" component={Experience} />
        <Route path="/Projects" component={Projects} />
        <Route path="/Contact" component={Contact} />
        <Route path="/Resume" component={Resume} />
      </div>
    </Router>
  );
}
