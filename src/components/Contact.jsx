import React from "react";

function Contact() {
  return (
    <div className="contact-comp">
      <div className="linkedin">
        <a href="https://linkedin.com/in/brooke-calhoun">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
            className="linkedin-img"
          />
          <p>linkedin.com/in/brooke-calhoun</p>
        </a>
      </div>
      <div className="github">
        <a href="https://github.com/brookecalhoun">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
            className="github-img"
          />
          <p>github.com/brookecalhoun</p>
        </a>
      </div>
    </div>
  );
}

export default Contact;
