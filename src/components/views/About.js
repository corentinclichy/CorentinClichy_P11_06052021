import React, { Component } from "react";
import "../../style/about.scss";
import DropDown from "../commons/DropDown";

export class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      description: {
        fiabilite:
          "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
        respect:
          "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
        service:
          "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
        responsabilite:
          "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
      },
    };
  }
  render() {
    const { description } = this.state;
    return (
      <div className="about">
        <div className="about__image"></div>
        <div className="faq">
          <DropDown
            isDescription
            title="Fiabilité"
            description={description.fiabilite}
          />
          <DropDown
            isDescription
            title="Respect"
            description={description.respect}
          />
          <DropDown
            isDescription
            title="Service"
            description={description.service}
          />
          <DropDown
            isDescription
            title="Responsabilité"
            description={description.responsabilite}
          />
        </div>
      </div>
    );
  }
}

export default About;
