import React, { Component } from "react";
import "../style/about.scss";
import DropDown from "./DropDown";

export class About extends Component {
  constructor(props) {
    super(props);
    this.description = {
      fiabilite:
        "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
      respect:
        "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
      service:
        "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
      responsabilite:
        "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
    };
  }
  render() {
    return (
      <div className="about">
        <div className="about__image"></div>
        <div className="faq">
          <DropDown
            isDescription
            title="Fiabilité"
            description={this.description.fiabilite}
          />
          <DropDown
            isDescription
            title="Respect"
            description={this.description.respect}
          />
          <DropDown
            isDescription
            title="Service"
            description={this.description.service}
          />
          <DropDown
            isDescription
            title="Responsabilité"
            description={this.description.responsabilite}
          />
        </div>
      </div>
    );
  }
}

export default About;
