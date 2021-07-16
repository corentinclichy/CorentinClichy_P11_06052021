import React, { Component } from "react";
import "../../style/notation.scss";
import NotationIcon from "./NotationIcon";

export class Notation extends Component {
  render() {
    const { rating } = this.props;
    console.log(rating);

    return (
      <div className="notation">
        {[1, 2, 3, 4, 5].map((index) => (
          <NotationIcon
            key={index}
            index={index}
            rating={rating}
            fill={rating >= index ? "fill" : ""}
          />
        ))}
      </div>
    );
  }
}

export default Notation;
