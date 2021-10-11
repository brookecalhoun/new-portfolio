import React from "react";
import Me from "../assets/me.jpg";
import QR from "../assets/qr.png";
import ProjectCarousel from "./ProjectCarousel";
import Resume from "./Resume";

function Homepage() {
  return (
    <div className="homepage">
      <div className="intro">
        <h1 className="name"> Hi, I'm Brooke.</h1>
        <p className="tagline">
          Looking to create code that makes a difference.
        </p>
      </div>

      <div className="projects" id="projects">
        <h2 className="project-title"> Projects. </h2>
        <p className="project-description">swipe to see them all!</p>
        <ProjectCarousel />
      </div>

      <div className="about" id="about">
        <h2 className="about-title"> About Me. </h2>
        <div className="overlay1">
          <div className="overlay2">
            <div className="overlay3">
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
              <img src={Me} className="me" alt="me" />
=======
              <img src={Me} className="me" />
>>>>>>> parent of 439dac0 (Updates)
=======
              <img src={Me} className="me" />
>>>>>>> parent of 439dac0 (Updates)
=======
              <img src={Me} className="me" />
>>>>>>> parent of 439dac0 (Updates)
            </div>
          </div>
        </div>
        <br />
        <div className="about-description">
          <p className="about-me">
            I'm a software engineer specializing in front-end development. My
            passions are innovation, responsive design, and making a difference
            with my code. Working at Walgreens as a manager at a young age made
            me realize that I could quickly adapt to new situations and easily
            learn new skills. One new skill that I had learned was problem
            solving. I was able to build upon that skill later by taking the
            General Assembly Software Engineer Immersive course (the largest
            learning experience of my life thus far). Throughout my life, I've
            also had to develop gritt, due to my mother being a drug addict.
            Luckily this led me to form my strong moral code and pushed me to
            want to pursue a career I could make a difference in. When I'm not
            coding, you can find me hanging out with my dog, Frank and my
            chicken, Gertrude (probably daydreaming about more pets).
          </p>
        </div>
        <br />
        <br />
        <div className="skill-list">
          <div className="css-wrap">
            <h3 className="css-name">CSS</h3>
            <img
              className="css"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
              alt="css logo"
=======
>>>>>>> parent of 439dac0 (Updates)
=======
>>>>>>> parent of 439dac0 (Updates)
=======
>>>>>>> parent of 439dac0 (Updates)
            />
          </div>
          <div className="js-wrap">
            <h3 className="js-name">JavaScript</h3>
            <img
              className="js"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
              alt="javascript logo"
=======
>>>>>>> parent of 439dac0 (Updates)
=======
>>>>>>> parent of 439dac0 (Updates)
=======
>>>>>>> parent of 439dac0 (Updates)
            />
          </div>
          <div className="html-wrap">
            <h3 className="html-name">HTML</h3>
            <img
              className="html"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
              alt="html logo"
=======
>>>>>>> parent of 439dac0 (Updates)
=======
>>>>>>> parent of 439dac0 (Updates)
=======
>>>>>>> parent of 439dac0 (Updates)
            />
          </div>
          <div className="python-wrap">
            <h3 className="python-name">Python</h3>
            <img
              className="python"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
              alt="python logo"
=======
>>>>>>> parent of 439dac0 (Updates)
=======
>>>>>>> parent of 439dac0 (Updates)
=======
>>>>>>> parent of 439dac0 (Updates)
            />
          </div>
          <div className="react-wrap">
            <h3 className="react-name">React</h3>
            <img
              className="react"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
              alt="react logo"
=======
>>>>>>> parent of 439dac0 (Updates)
=======
>>>>>>> parent of 439dac0 (Updates)
=======
>>>>>>> parent of 439dac0 (Updates)
            />
          </div>
          <div className="mongo-wrap">
            <h3 className="mongo-name">MongoDB</h3>
            <img
              className="mongo"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
              alt="css logo"
=======
>>>>>>> parent of 439dac0 (Updates)
=======
>>>>>>> parent of 439dac0 (Updates)
=======
>>>>>>> parent of 439dac0 (Updates)
            />
          </div>
        </div>
      </div>

      <div className="contact" id="contact">
        <h2 className="contact-title">Let's get in touch!</h2>
        <div className="contact-list">
          <a href="https://linkedin.com/in/brooke-calhoun" className="linkedin">
            LinkedIn
          </a>
          <a href="https://github.com/brookecalhoun" className="github">
            GitHub
          </a>
          <p className="email">bancalhoun@ymail.com</p>
          <p className="number">602.488.9355</p>
          <a href="https://hihello.me/p/d1926065-47e2-4ad3-958a-847ab7fdf877">
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
            <img src={QR} className="qr" alt="qr code" />
=======
            <img src={QR} className="qr" />
>>>>>>> parent of 439dac0 (Updates)
=======
            <img src={QR} className="qr" />
>>>>>>> parent of 439dac0 (Updates)
=======
            <img src={QR} className="qr" />
>>>>>>> parent of 439dac0 (Updates)
          </a>
          <br />
          <p className="qr-title">
            scan or press the QR code for my business card!
          </p>
        </div>
      </div>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      <div className="resume" id="resume">
        <h2 className="resume-title">Resume.</h2>
=======
      <div className="resume" id='resume'>
        <h2 className='resume-title'>Resume.</h2>
>>>>>>> parent of 439dac0 (Updates)
=======
      <div className="resume" id='resume'>
        <h2 className='resume-title'>Resume.</h2>
>>>>>>> parent of 439dac0 (Updates)
=======
      <div className="resume" id='resume'>
        <h2 className='resume-title'>Resume.</h2>
>>>>>>> parent of 439dac0 (Updates)
        <Resume />
      </div>
    </div>
  );
}
export default Homepage;
