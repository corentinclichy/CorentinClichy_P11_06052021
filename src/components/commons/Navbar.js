import React, { Component } from "react";
import "../../style/navbar.scss";

import { NavLink } from "react-router-dom";

export class Navbar extends Component {
  render() {
    return (
      <nav className="nav-bar">
        <NavLink className="nav-links" to="/">
          Accueil
        </NavLink>
        <NavLink to="/about" className="nav-links">
          A propos
        </NavLink>
      </nav>
    );
  }
}

export default Navbar;
