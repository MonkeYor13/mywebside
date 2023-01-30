import React from "react";
import "./css/App.css";

// importaciones de compoentes
import NavBar from "./components/NavBar";
import SocialMedia from "./components/SocialMedia";

function App() {
  return (
    <div className="cont-general">
      <NavBar />
      <SocialMedia />
    </div>
  );
}

export default App;
