import React, { Component } from "react";
import Tag from "./Tag";
import Carrousel from "./Carrousel";
import Dropdown from "./DropDown";
import Notation from "./Notation";

import "../style/house.scss";

export class House extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="house">
        <div className="house__image">
          <Carrousel />
        </div>
        <div className="house__infos-wrapper">
          <div className="house__infos">
            <h1>Paris center, on the romantic Canal Saint-Martin</h1>
            <p>Paris, Île-de-France</p>
          </div>
          <div className="house__tags">
            <Tag name="cozy" />
            <Tag name="canal" />
            <Tag name="Paris 10" />
          </div>

          <div className="house__notation">
            <Notation />
          </div>

          <div className="house__ownerInfos">
            <div className="ownerInfos__name">
              <p>Alexandre</p>
              <p>Dumas</p>
            </div>
            <div className="house__owner__profilePicture">
              {/* <img src="" alt="" /> */}
            </div>
          </div>
        </div>

        <div className="house__dropdown-container">
          <Dropdown />
          <Dropdown isDescription />
        </div>
      </div>
    );
  }
}

export default House;
