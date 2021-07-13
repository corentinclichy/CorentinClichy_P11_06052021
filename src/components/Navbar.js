import React, { Component } from "react";
import "../style/navbar.scss";

import { Link } from "react-router-dom";

export class Navbar extends Component {
  render() {
    return (
      <nav className="nav-bar">
        <Link className="nav-links" to="/">
          Accueil
        </Link>
        <Link to="/about" className="nav-links">
          A propos
        </Link>
      </nav>
    );
  }
}

export default Navbar;
