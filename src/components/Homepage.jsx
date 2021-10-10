import React from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";
import Koru from "../assets/koru.mov";
import Pokemon from "../assets/pokemon.mov";
import Ehub from "../assets/ehub.mov";
import Modal from "react-bootstrap/Modal";
import Me from "../assets/me.jpg";

function Homepage() {
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);
  const handleClose3 = () => setShow3(false);
  const handleShow3 = () => setShow3(true);

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
        <div className="videos">
          <div className="koru">
            <h3 className="koru-title">Koru </h3>
            <video controls src={Koru} className="koru-video" />
            <Button
              variant="danger"
              onClick={handleShow}
              className="more-button"
            >
              More Info
            </Button>
            <br />
            <Modal show={show}>
              <Modal.Header>
                <Modal.Title>Koru</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                Koru is an app that ties in addiction with mental health. Koru's
                interactivity includes authentication, journaling that can be
                saved, a virtual coloring book, and a random quote generator.
                Koru also offers various resources for addiction and mental
                health.
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal>
          </div>

          <div className="pokemon">
            <h3 className="pokemon-title">Pokemon Tamogatchi </h3>
            <video controls src={Pokemon} className="pokemon-video" />
            <Button
              variant="danger"
              onClick={handleShow2}
              className="more-button"
            >
              More Info
            </Button>
            <br />
            <Modal show={show2}>
              <Modal.Header>
                <Modal.Title>Pokemon Tamogatchi</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                Pokemon Tamogatchi is a game where you can take care of a
                Pokemon in the same manner as a tamogatchi pet. You can choose
                between 3 pets, and name them whatever you want. Once the pet is
                chosen, you must feed, play with, and put them to bed before any
                of his status levels reach 10, because at that point, he will
                die.
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose2}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
          <div className="ehub">
            <h3 className="ehub-title">Ehub </h3>
            <video controls src={Ehub} className="ehub-video" />
            <Button
              variant="danger"
              onClick={handleShow3}
              className="more-button"
            >
              More Info
            </Button>
            <Modal show={show3}>
              <Modal.Header>
                <Modal.Title>Ehub</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                Ehub is a place to catalogue all of your favorite music, games,
                movies, and TV shows. Connect and sort each of them by genre.
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose3}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
        </div>
      </div>

      <div className="about" id="about">
        <h2 className="about-title"> About Me. </h2>
        <div className="overlay1">
          <div className="overlay2">
            <div className="overlay3">
              <img src={Me} className="me" />
            </div>
          </div>
        </div>
        <br />
        <div className="about-description">
            <p className="about-me">
              I'm a software engineer specializing in front-end development. My
              passions are innovation, responsive design, and making a
              difference with my code. Working at Walgreens as a manager at a
              young age made me realize that I could quickly adapt to new
              situations and easily learn new skills. One new skill that I had
              learned was problem solving. I was able to build upon that skill
              later by taking the General Assembly Software Engineer Immersive
              course (the largest learning experience of my life thus far).
              Throughout my life, I've also had to develop gritt, due to my
              mother being a drug addict. Luckily this led me to form my strong
              moral code and pushed me to want to pursue a career I could make a
              difference in. When I'm not coding, you can find me hanging out
              with my dog, Frank and my chicken, Gertrude (probably daydreaming
              about more pets).
            </p>
          </div>
        <br />
          <div className="skill-list">
            <div className="css-wrap">
              <h3 className="css-name">CSS</h3>
              <img
                className="css"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
              />
            </div>
            <div className="js-wrap">
              <h3 className="js-name">JavaScript</h3>
              <img
                className="js"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
              />
            </div>
            <div className="html-wrap">
              <h3 className="html-name">HTML</h3>
              <img
                className="html"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
              />
            </div>
            <div className="python-wrap">
              <h3 className="python-name">Python</h3>
              <img
                className="python"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
              />
            </div>
            <div className="react-wrap">
              <h3 className="react-name">React</h3>
              <img
                className="react"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
              />
            </div>
            <div className="mongo-wrap">
              <h3 className="mongo-name">MongoDB</h3>
              <img
                className="mongo"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
              />
            </div>
          </div>
        </div>
      </div>
  );
}
export default Homepage;
