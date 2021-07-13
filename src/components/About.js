import React, { Component } from "react";
import "../style/about.scss";
import DropDown from "./DropDown";

export class About extends Component {
  render() {
    return (
      <div className="about">
        <div className="about__image"></div>
        <div className="faq">
          <DropDown isDescription />
          <DropDown isDescription />
          <DropDown isDescription />
        </div>
      </div>
    );
  }
}

export default About;
