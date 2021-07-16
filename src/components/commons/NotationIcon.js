import React, { Component } from "react";

export class NotationIcon extends Component {
  render() {
    console.log(this.props);
    const { fill } = this.props;

    // check if rating is more than index, then add className 'fill'

    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="15"
        height="15"
        viewBox="0 0 24 24"
        className={fill}
      >
        <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" />
      </svg>
    );
  }
}

export default NotationIcon;
