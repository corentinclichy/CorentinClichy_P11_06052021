import React, { Component } from "react";
import "../style/footer.scss";
import Logo from "../assets/LogoKasa_white.svg";

export class Footer extends Component {
  render() {
    return (
      <footer>
        <img src={Logo} alt="Logo Kasa" />
        <p>© 2020 Kasa. All rights reserved</p>
      </footer>
    );
  }
}

export default Footer;
