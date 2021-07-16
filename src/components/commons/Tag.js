import React, { Component } from "react";
import "../../style/tag.scss";

export class Tag extends Component {
  render() {
    return <div className="tag">{this.props.tag}</div>;
  }
}

export default Tag;
