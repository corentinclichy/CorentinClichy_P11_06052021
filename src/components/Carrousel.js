import React, { Component } from "react";
import "../style/carrousel.scss";

export class Carrousel extends Component {
  constructor(props) {
    super(props);
    this.pictures = this.props.pictures;
    this.picturesLength = this.pictures.length;
    this.state = {
      activeIndex: 0,
    };
  }

  goNextPicture() {
    this.state.activeIndex === this.picturesLength - 1
      ? this.setState({ activeIndex: 0 })
      : this.setState({ activeIndex: this.state.activeIndex + 1 });
  }

  goPreviousPicture() {
    this.state.activeIndex === 0
      ? this.setState({ activeIndex: this.picturesLength - 1 })
      : this.setState({ activeIndex: this.state.activeIndex - 1 });
  }

  render() {
    if (!Array.isArray(this.pictures) || this.pictures.length === 0) {
      return null;
    }

    return (
      <div className="carrousel">
        <div className="carrousel-image">
          {this.pictures.map((picture, index) => {
            return (
              <div
                className={
                  index === this.state.activeIndex ? "slide active" : "slide"
                }
                key={index}
              >
                {index === this.state.activeIndex && (
                  <img src={picture} alt={picture} key={index} />
                )}
              </div>
            );
          })}
        </div>
        <div className="chevron-left" onClick={() => this.goPreviousPicture()}>
          <svg
            width="16"
            height="10"
            viewBox="0 0 16 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.3705 0.736755L0.0120851 2.10285L7.61003 9.69312L15.208 2.09518L13.8495 0.736756L7.61003 6.97628L1.3705 0.736755Z"
              fill="white"
            />
          </svg>
        </div>
        <div className="chevron-right" onClick={() => this.goNextPicture()}>
          <svg
            width="16"
            height="10"
            viewBox="0 0 16 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.3705 0.736755L0.0120851 2.10285L7.61003 9.69312L15.208 2.09518L13.8495 0.736756L7.61003 6.97628L1.3705 0.736755Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
    );
  }
}

export default Carrousel;
