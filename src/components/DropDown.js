import React, { Component } from "react";

import "../style/dropdown.scss";

export class DropDown extends Component {
  constructor(props) {
    super(props);
    this.description = this.props.description;
    this.equipments = this.props.equipments;
  }

  render() {
    const isDescription = this.props.isDescription;
    let description;
    let name;

    if (isDescription) {
      description = <p>{this.props.description}</p>;
      name = "Description";
    } else {
      description = (
        <ul className="content__list">
          {this.equipments.map((equipment) => (
            <li key={equipment}>{equipment}</li>
          ))}
        </ul>
      );
      name = "Equipement";
    }

    return (
      <div className="dropdown">
        <button className="dropdown__btn">
          {name}
          <div className="btn__icon">
            <svg
              width="16"
              height="10"
              viewBox="0 0 16 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.3705 0.736755L0.0120851 2.10285L7.61003 9.69312L15.208 2.09518L13.8495 0.736756L7.61003 6.97628L1.3705 0.736755Z"
                fill="white"
              />
            </svg>
          </div>
        </button>
        <div className="dropdown__content">{description}</div>
      </div>
    );
  }
}

export default DropDown;
