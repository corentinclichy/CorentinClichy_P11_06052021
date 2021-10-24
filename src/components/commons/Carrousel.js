import React, { Component } from "react";
import "../../style/carrousel.scss";

export class Carrousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
    };
  }

  goNextPicture() {
    this.state.activeIndex === this.props.pictures.length - 1
      ? this.setState({ activeIndex: 0 })
      : this.setState({ activeIndex: this.state.activeIndex + 1 });
  }

  goPreviousPicture() {
    this.state.activeIndex === 0
      ? this.setState({ activeIndex: this.props.pictures.length - 1 })
      : this.setState({ activeIndex: this.state.activeIndex - 1 });
  }

  render() {
    if (
      !Array.isArray(this.props.pictures) ||
      this.props.pictures.length === 0
    ) {
      return null;
    }

    const { pictures } = this.props;
    const { activeIndex } = this.state;

    return (
      <div className="carrousel">
        <div className="carrousel-image">
          {pictures.map((picture, index) => {
            return (
              <div
                className={index === activeIndex ? "slide active" : "slide"}
                key={index}
              >
                {index === activeIndex && (
                  <img src={picture} alt={picture} key={index} />
                )}
              </div>
            );
          })}
        </div>

        {pictures.length > 1 && (
          <>
            <div
              className="chevron-left"
              onClick={() => this.goPreviousPicture()}
            >
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
          </>
        )}
      </div>
    );
  }
}

export default Carrousel;
