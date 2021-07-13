import React, { Component } from "react";
import "./App.scss";
import Header from "./components/Header";
import Main from "./components/Main";
import About from "./components/About";
import Error from "./components/Error";
import Footer from "./components/Footer";
import { Route, Switch } from "react-router-dom";
import House from "./components/House";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <Header />
          <Switch>
            <Route path="/" component={Main} exact />
            <Route path="/about" component={About} />
            <Route path="/house/">
              <House />
            </Route>
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
