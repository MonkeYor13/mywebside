import React, { Component } from "react";
import "../css/SocialMedia.css";

// importar imagenes
import TwitterIcon from "../assets/TwitterIcon";
import InstagramIcon from "../assets/InstagramIcon";
import LinkedIcon from "../assets/LinkedIcon";

class SocialMedia extends Component {
  render() {
    return (
      <div className="social-media">
        <ul>
          <li>
            <TwitterIcon />
          </li>
          <li>
            <InstagramIcon />
          </li>
          <li>
            <a href="https://www.linkedin.com/in/yorvisjesusrodriguez-169163146/">
              <LinkedIcon />
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default SocialMedia;
