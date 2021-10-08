import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import B from "../assets/b.png";

function Header() {
  return (
    <div>
        <span className="inlineheader">
          <span className="headerlinks">
            <Navbar className="header" fixed='top'expand="lg">
              <Navbar.Brand href="/">
                <img className="B" src={B} alt="logo" />
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto"></Nav>
                <Nav.Link href="#projects">Projects</Nav.Link>
                <Nav.Link href="#about">About</Nav.Link>
                <Nav.Link href="#contact">Contact</Nav.Link>
                <Nav.Link href="#resume">Resume</Nav.Link>
              </Navbar.Collapse>
            </Navbar>
          </span>
        </span>
      </div>
  );
}

export default Header;
