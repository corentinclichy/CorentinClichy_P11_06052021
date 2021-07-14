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

  render() {
    return (
      <div className="showcase">
        {this.state.data.map((item, index) => {
          return (
            <Link
              to={{
                pathname: `/house/${item.id}`,
                state: { data: item },
              }}
              key={item.id}
            >
              <HouseCard key={item.id} data={{ ...item }} />
            </Link>
          );
        })}
      </div>
    );
  }
}

export default Content;
