import React, { Component } from "react";
import "../../style/houseCard.scss";

export class HouseCard extends Component {
  render() {
    const { data } = this.props;
    return (
      <div className="house-card">
        <img src={data.cover} alt="" />
        <p>{data.title}</p>
      </div>
    );
  }
}

export default HouseCard;
