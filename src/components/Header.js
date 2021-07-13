import React, { Component } from "react";
import "../style/header.scss";
import Logo from "../assets/LOGO.svg";
import Navbar from "./Navbar";

export class Header extends Component {
  render() {
    return (
      <header className="header">
        <img className="logo" src={Logo} alt="Logo Kasa" />
        <Navbar />
      </header>
    );
  }
}

export default Header;
