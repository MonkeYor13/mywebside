import React, { Component } from "react";
import "../css/SocialMedia.css";

// importar imagenes
// import twitter from "../assets/twitter.svg";
// import instagram from "../assets/instagram.svg";
// import linkedin from "../assets/linkedin.svg";
// import TwitterIcon from "../assets/twitter";
import twitter from '../assets/twitter';

class SocialMedia extends Component {
  render() {
    return (
      <div className="social-media">
        <ul>
          <li>
          {/* <TwitterIcon /> */}

            {/* <img className="imgSvg" src={twitter} alt="logo" /> */}
            <img className="imgSvg" src={twitter.img1} alt="logo" />
          </li>
          {/* <li>
            <img className="logo" src={instagram} alt="logo" />
          </li>
          <li>
            <img className="logo" src={linkedin} alt="logo" />
          </li> */}
        </ul>
      </div>
    );
  }
}

export default SocialMedia;
