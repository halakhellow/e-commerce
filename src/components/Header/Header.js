import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

class Header extends Component {
  render() {
    return (
      <div>
        <NavLink to="/">HOME</NavLink>
        <div>
          <NavLink to="/shop">SHOP</NavLink>
          <NavLink to="/sign-in">SIGN IN</NavLink>
        </div>
      </div>
    );
  }
}

export default Header;
