import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <NavLink to="/">HOME</NavLink>
        <div className="Header-options">
          <NavLink activeClassName="active" to="/shop">
            SHOP
          </NavLink>
          <NavLink activeClassName="active" to="/sign-in">
            SIGN IN
          </NavLink>
        </div>
      </div>
    );
  }
}

export default Header;
