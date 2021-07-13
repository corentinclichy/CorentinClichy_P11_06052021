import React, { Component } from "react";
import "../style/carrousel.scss";

export class Carrousel extends Component {
  render() {
    return (
      <div className="carrousel">
        <img
          src="https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg"
          alt=""
        />
        <div className="chevron-left">
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
        <div className="chevron-right">
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
