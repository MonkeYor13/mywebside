import React, { Component } from "react";
import "../css/NavBar.css";
import logo from "../assets/m1.png";

class NavBar extends Component {
render() {
    return (
      <header className="navbar">
        <img className="logo" src={logo} alt="logo" />
        <ul>
          <li>
            <a className="active" href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Resume Cv</a>
          </li>
          <li>
            <a href="#">Projects</a>
          </li>
        </ul>
      </header>
    );
  }
}

export default NavBar;
