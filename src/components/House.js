import React, { Component } from "react";

import Tag from "./Tag";
import Carrousel from "./Carrousel";
import Dropdown from "./DropDown";
import Notation from "./Notation";

import "../style/house.scss";

export class House extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.location.state.data,
    };
    this.pictures = this.state.data.pictures;
    this.title = this.state.data.title;
    this.location = this.state.data.location;
    this.tags = this.state.data.tags;
    this.rating = this.state.data.rating;
    this.firstName = this.state.data.host.name.split(" ")[0];
    this.lastName = this.state.data.host.name.split(" ")[1];
    this.profilePicUrl = this.state.data.host.picture;
    this.description = this.state.data.description;
    this.equipments = this.state.data.equipments;
  }

  render() {
    return (
      <div className="house">
        <div className="house__image">
          <Carrousel pictures={this.pictures} />
        </div>
        <div className="house__infos-wrapper">
          <div className="house__infos">
            <h1>{this.title}</h1>
            <p>{this.location}</p>
          </div>
          <div className="house__tags">
            {this.tags.map((tag) => (
              <Tag key={tag} tag={tag} />
            ))}
          </div>

          <div className="house__notation">
            <Notation rating={this.rating} />
          </div>

          <div className="house__ownerInfos">
            <div className="ownerInfos__name">
              <p>{this.firstName}</p>
              <p>{this.lastName}</p>
            </div>
            <div className="house__owner__profilePicture">
              <img src={this.profilePicUrl} alt="" />
            </div>
          </div>
        </div>

        <div className="house__dropdown-container">
          <Dropdown equipments={this.equipments} />
          <Dropdown isDescription description={this.description} />
        </div>
      </div>
    );
  }
}

export default House;
