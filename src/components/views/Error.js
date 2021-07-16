import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../style/error.scss";

export class Error extends Component {
  render() {
    return (
      <div className="error">
        <div className="wrap">
          <h1>404</h1>
          <p>Oups! La page que vous demandez n'existe pas.</p>
        </div>

        <Link className="error__link" to="/">
          Retourner sur la page d’accueil
        </Link>
      </div>
    );
  }
}

export default Error;
