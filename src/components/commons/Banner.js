import React, { Component } from "react";

//Style
import "../../style/banner.scss";

export class Banner extends Component {
  render() {
    return (
      <div className="banner-container">
        <div className="banner-container__title">
          <span>Chez vous,&nbsp;</span>
          <span>partout et ailleurs</span>
        </div>
      </div>
    );
  }
}

export default Banner;
