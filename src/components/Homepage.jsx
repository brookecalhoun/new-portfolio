import React from "react";
import ReactPlayer from "react-player";
import Koru from "../assets/koru.mov";
import Pokemon from "../assets/pokemon.mov";
import Ehub from "../assets/ehub.mov";

class Homepage extends React.Component {
  
  render() {
    return (
      <div className="homepage">
        <div className="intro" >
          <h1 className="name"> Hi, I'm Brooke.</h1>
          <p className="tagline">
            Looking to create code that makes a difference.
          </p>
        </div>
        <div className='projects' id='projects'>
        <div className="videos">
          <ReactPlayer url={Koru} controls className='koru'/>
          <ReactPlayer url={Pokemon} controls className='pokemon' />
          <ReactPlayer url={Ehub} controls className='ehub' />
        </div>
        </div>
      </div>
    );
  }
}

export default Homepage;
