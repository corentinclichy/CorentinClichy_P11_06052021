import React, { Component } from "react";
import "../style/tag.scss";

export class Tag extends Component {
  render() {
    return <div className="tag">{this.props.name}</div>;
  }
}

export default Tag;
