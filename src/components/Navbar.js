import React, { Component } from "react";
import "../style/navbar.scss";

export class Navbar extends Component {
  render() {
    return (
      <nav className="nav-bar">
        <a className="nav-links" href="#">
          Accueil
        </a>
        <a href="#" className="nav-links">
          A propos
        </a>
      </nav>
    );
  }
}

export default Navbar;
