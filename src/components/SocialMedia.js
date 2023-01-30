import React, { Component } from "react";
import "../css/SocialMedia.css";

// importar imagenes
import twitter from "../assets/twitter.svg";
import instagram from "../assets/instagram.svg";
import linkedin from "../assets/linkedin.svg";

class SocialMedia extends Component {
  render() {
    return (
      <div className="social-media">
        <ul>
          <li>
            <img className="logo" src={twitter} alt="logo" />
          </li>
          <li>
            <img className="logo" src={instagram} alt="logo" />
          </li>
          <li>
            <img className="logo" src={linkedin} alt="logo" />
          </li>
        </ul>
      </div>
    );
  }
}

export default SocialMedia;
