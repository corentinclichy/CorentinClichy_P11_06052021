import React, { Component } from "react";

import "../../style/dropdown.scss";

export class Collapse extends Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false, height: "0px" };
    this.content = React.createRef();
  }

  handleDropdownClick() {
    this.setState({ isOpen: !this.state.isOpen });

    this.setState({
      height: this.state.isOpen
        ? "0px"
        : `${this.content.current.scrollHeight}px`,
    });
  }

  render() {
    let descriptionMarkup;
    let nameMarkup;

    const { title, isDescription, description, equipments } = this.props;
    const { isOpen, height } = this.state;

    if (isDescription) {
      descriptionMarkup = <p>{description}</p>;
      title === undefined ? (nameMarkup = "Description") : (nameMarkup = title);
    } else {
      descriptionMarkup = (
        <ul className="content__list">
          {equipments.map((equipment) => (
            <li key={equipment}>{equipment}</li>
          ))}
        </ul>
      );
      nameMarkup = "Equipement";
    }

    return (
      <div className="dropdown">
        <button
          className="dropdown__btn"
          onClick={() => this.handleDropdownClick()}
        >
          <span>{nameMarkup}</span>
          <div className="btn__icon">
            <svg
              width="16"
              height="10"
              viewBox="0 0 16 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={!isOpen ? "rotate" : ""}
            >
              <path
                d="M1.3705 0.736755L0.0120851 2.10285L7.61003 9.69312L15.208 2.09518L13.8495 0.736756L7.61003 6.97628L1.3705 0.736755Z"
                fill="white"
              />
            </svg>
          </div>
        </button>
        <div
          className="dropdown__content"
          ref={this.content}
          style={{ maxHeight: `${height}` }}
        >
          {descriptionMarkup}
        </div>
      </div>
    );
  }
}

export default Collapse;
