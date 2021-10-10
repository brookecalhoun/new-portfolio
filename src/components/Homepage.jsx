import React from "react";
import Koru from "../assets/koru.mov";
import Pokemon from "../assets/pokemon.mov";
import Ehub from "../assets/ehub.mov";

class Homepage extends React.Component {
  render() {
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
            </div>
            <div className="pokemon">
              <h3 className="pokemon-title">Pokemon Tamogatchi </h3>
              <video controls src={Pokemon} className="pokemon-video" />
            </div>
            <div className="ehub">
              <h3 className="ehub-title">Ehub </h3>
              <video controls src={Ehub} className="ehub-video" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Homepage;
