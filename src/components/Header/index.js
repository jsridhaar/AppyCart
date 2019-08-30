import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./index.scss";

import { ReactComponent as Logo } from "../../assets/images/crown.svg";

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <Link className="logo-container" to="/">
          <Logo className="logo" />
        </Link>
        <div className="options">
          <Link className="option" to="/shop">
            Shop
          </Link>
          <Link className="option" to="/shop">
            Contact
          </Link>
        </div>
      </div>
    );
  }
}
