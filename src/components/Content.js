import React, { Component } from "react";
import "../style/content.scss";
import HouseCard from "./HouseCard";
import { data } from "../data/data";
import { Link } from "react-router-dom";

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
          return (
            <Link to={`/house/${item.id}`}>
              <HouseCard key={index} data={{ ...item }} />;
            </Link>
          );
        })}
      </div>
    );
  }
}

export default Content;
