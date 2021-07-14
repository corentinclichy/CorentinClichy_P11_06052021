import React, { Component } from "react";

import "../style/dropdown.scss";

export class DropDown extends Component {
  constructor(props) {
    super(props);
    this.title = this.props.title;
    this.isDescription = this.props.isDescription;
    this.description = this.props.description;
    this.equipments = this.props.equipments;
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
    let description;
    let name;

    if (this.isDescription) {
      description = <p>{this.props.description}</p>;
      this.title === undefined ? (name = "Description") : (name = this.title);
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
        <button
          className="dropdown__btn"
          onClick={() => this.handleDropdownClick()}
        >
          <span>{name}</span>
          <div className="btn__icon">
            <svg
              width="16"
              height="10"
              viewBox="0 0 16 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={!this.state.isOpen ? "" : "rotate"}
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
          style={{ maxHeight: `${this.state.height}` }}
        >
          {description}
        </div>
      </div>
    );
  }
}

export default DropDown;
