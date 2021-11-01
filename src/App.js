import React, { Component } from "react";

import "./style/main.scss";

import Banner from "./components/commons/Banner";
import Content from "./components/commons/Content";

class App extends Component {
  render() {
    return (
      <main>
        <Banner />
        <Content />
      </main>
    );
  }
}

export default App;
