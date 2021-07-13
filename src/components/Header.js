import React, { Component } from "react";
import "../style/header.scss";
import Logo from "../assets/LOGO.svg";
import Navbar from "./Navbar";
import { NavLink } from "react-router-dom";

export class Header extends Component {
  render() {
    return (
      <header className="header">
        <NavLink to="/">
          <img className="logo" src={Logo} alt="Logo Kasa" />
        </NavLink>
        <Navbar />
      </header>
    );
  }
}

export default Header;
