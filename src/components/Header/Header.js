import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { auth } from "../../firebase/firebaseUtilities";
import { connect } from "react-redux";
import "./Header.css";
import CartIcon from "../CartIcon/CartIcon";

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <NavLink className="option" to="/">
          HOME
        </NavLink>
        <div className="Header-options">
          <NavLink className="option" activeClassName="active" to="/shop">
            SHOP
          </NavLink>
          {this.props.currentUser ? (
            <span className="option" onClick={() => auth.signOut()}>
              SIGN OUT
            </span>
          ) : (
            <NavLink className="option" activeClassName="active" to="/sign-in">
              SIGN IN
            </NavLink>
          )}
          <CartIcon />
        </div>
      </div>
    );
  }
}

let mapStateToProps = (state) => ({ currentUser: state.user.currentUser });

export default connect(mapStateToProps)(Header);
