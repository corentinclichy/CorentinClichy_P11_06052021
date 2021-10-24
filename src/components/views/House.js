import React, { Component } from "react";
import { Redirect } from "react-router-dom";

import Tag from "../commons/Tag";
import Carrousel from "../commons/Carrousel";
import Dropdown from "../commons/DropDown";
import Notation from "../commons/Notation";

import "../../style/house.scss";

export class House extends Component {
  constructor(props) {
    super(props);
    if (this.props.location.state !== undefined) {
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
  }

  render() {
    if (this.props.location.state === undefined) return <Redirect to="/404" />;

    const {
      pictures,
      title,
      location,
      tags,
      rating,
      host,
      description,
      equipments,
    } = this.state.data;

    return (
      <div className="house">
        <div className="house__image">
          <Carrousel pictures={pictures} />
        </div>
        <div className="house__infos-wrapper">
          <div className="house__infos">
            <h1>{title}</h1>
            <p>{location}</p>
          </div>
          <div className="house__tags">
            {tags.map((tag) => (
              <Tag key={tag} tag={tag} />
            ))}
          </div>

          <div className="house__notation">
            <Notation rating={rating} />
          </div>

          <div className="house__ownerInfos">
            <div className="ownerInfos__name">
              <p>{host.name.split(" ")[0]}</p>
              <p>{host.name.split(" ")[1]}</p>
            </div>
            <div className="house__owner__profilePicture">
              <img src={host.picture} alt="" />
            </div>
          </div>
        </div>

        <div className="house__dropdown-container">
          <Dropdown equipments={equipments} />
          <Dropdown isDescription description={description} />
        </div>
      </div>
    );
  }
}

export default House;
