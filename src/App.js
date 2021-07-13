import React, { Component } from "react";
import "./App.scss";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <Header />
          <Main />
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
