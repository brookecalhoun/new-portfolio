import React from 'react' 
import B from '../assets/b.png'
import Navbar from "react-bootstrap/Navbar";

function Footer(){
    return(
        <span className="inlinefooter">
          <Navbar className="footer" fixed='bottom'expand="lg">
            <Navbar.Brand href="/">
              <img className="b-footer" src={B} alt="logo" />
            </Navbar.Brand> 
          </Navbar>
        </span>
    )
}

export default Footer