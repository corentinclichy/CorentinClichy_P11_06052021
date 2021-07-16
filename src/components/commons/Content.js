import React, { Component } from "react";
import "../../style/content.scss";
import HouseCard from "./HouseCard";
import { data } from "../../data/data";
import { Link } from "react-router-dom";

export class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data,
    };
  }

  render() {
    const { data } = this.state;

    return (
      <div className="showcase">
        {data.map((item, index) => {
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
