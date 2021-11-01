import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import App from "./App";
import About from "./components/views/About";
import House from "./components/views/House";
import Header from "./components/commons/Header";
import Footer from "./components/commons/Footer";

// Create a router
const Root = () => (
  <Router>
    <div className="App">
      <div className="container">
        <Header />
        <Switch>
          <Route path="/" component={App} exact />
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
  </Router>
);

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
