import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCurrentUser } from "../../redux/user/user-selectors";
import { selectCartHidden } from "../../redux/cart/cart-selectors";
import { signOutStart } from "../../redux/user/user-actions";

import logo from "../../images/logo.png";

import CartIcon from "../CartIcon/CartIcon";
import CartDropdown from "../CartDropdown/CartDropdown";

import "./Header.css";

class Header extends Component {
  render() {
    let { signOutStart } = this.props;
    return (
      <div className="Header">
        <NavLink className="option" activeClassName="active" to="/shop">
          SHOP
        </NavLink>
        <NavLink className="option logo" to="/">
          <img src={logo} alt="logo" />
        </NavLink>
        <div className="last-options">
          {this.props.currentUser ? (
            <span className="option" onClick={signOutStart}>
              SIGN OUT
            </span>
          ) : (
            <div>
              <NavLink
                className="option"
                activeClassName="active"
                to="/sign-in"
              >
                SIGN IN
              </NavLink>
              <NavLink
                className="option"
                activeClassName="active"
                to="/register"
              >
                Register
              </NavLink>
            </div>
          )}
          <CartIcon />
        </div>
        {this.props.hidden ? null : <CartDropdown />}
      </div>
    );
  }
}

let mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

let mapDispatchToProps = (dispatch) => ({
  signOutStart: () => dispatch(signOutStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
