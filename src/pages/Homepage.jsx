import React from "react";
import Projects from "../pages/Projects";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Resume from "../pages/Resume";

function Homepage() {
  return (
    <div className="homepage">
        <Projects />
      <div className="intro">
        <h1 className="name"> Hi, I'm Brooke.</h1>
        <p className="tagline">Looking to create code that makes a difference.</p>
      </div>
      <div className="tabs">
        <About />
        <Contact />
        <Resume />
      </div>
    </div>
  );
}

export default Homepage;
