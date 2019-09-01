import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./index.scss";
import { auth } from "../../firebase"

import { ReactComponent as Logo } from "../../assets/images/crown.svg";

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <Link className="logo-container" to="/">
          <Logo className="logo" />
        </Link>
        <div className="userName">
          <div className="displayName">
            {this.props.currentUser ? <span>Welcome, <b>{this.props.currentUser.displayName}</b></span> : ""}
          </div>
        </div>

        <div className="options">
          <Link className="option" to="/shop">
            Shop
          </Link>
          <Link className="option" to="/shop">
            Contact
          </Link>
          {this.props.currentUser ? <div onClick={() => auth.signOut()}><Link>Sign Out</Link></div> : <Link to="/signin"> Sign IN</Link>}
        </div>
      </div>
    );
  }
}
