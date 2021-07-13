import React, { Component } from "react";
import "../style/content.scss";
import HouseCard from "./HouseCard";
import { data } from "../data/data";

export class Content extends Component {
  //create a constructor with different state for each instance
  constructor(props) {
    super(props);
    this.state = {
      data: data,
      name: "corentin",
    };
  }

  componentDidMount() {}

  componentDidUnmount() {}

  render() {
    return (
      <div className="showcase">
        {this.state.data.map((item, index) => {
          return <HouseCard key={index} data={{ ...item }} />;
        })}
      </div>
    );
  }
}

export default Content;
