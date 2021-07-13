import React, { Component } from "react";
import "../style/houseCard.scss";

export class HouseCard extends Component {
  render() {
    return (
      <div className="house-card">
        <img src={this.props.data.cover} alt="" />
        <p>{this.props.data.title}</p>
      </div>
    );
  }
}

export default HouseCard;
