import React, { Component } from "react";
import "../../style/main.scss";

import Banner from "../commons/Banner";
import Content from "../commons/Content";

export class Main extends Component {
  render() {
    return (
      <main>
        <Banner />
        <Content />
      </main>
    );
  }
}

export default Main;
