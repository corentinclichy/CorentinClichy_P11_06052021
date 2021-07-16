import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import "./App.scss";

import Header from "./components/commons/Header";
import Main from "./components/views/Main";
import About from "./components/views/About";
import Error from "./components/views/Error";
import Footer from "./components/commons/Footer";

import House from "./components/views/House";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <Header />
          <Switch>
            <Route path="/" component={Main} exact />
            <Route path="/about" component={About} />
            <Route path="/house/:id" component={House} />
            <Route component={Error} />
          </Switch>
        </div>
        <div className="footer-container">
          <div className="container">
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
