import React, { Component } from "react";
import "../style/header.css";
import Logo from "../assets/LOGO.svg";
import Navbar from "../components/Navbar";

export class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="logo">
          <img src={Logo} alt="" width="210px" />
        </div>
        <Navbar />
      </div>
    );
  }
}

export default Header;
