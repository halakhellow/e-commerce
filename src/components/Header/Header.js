import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { auth } from "../../firebase/firebaseUtilities";
import { connect } from "react-redux";
import "./Header.css";
import CartIcon from "../CartIcon/CartIcon";
import CartDropdown from "../CartDropdown/CartDropdown";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../redux/user/user-selectors";
import { selectCartHidden } from "../../redux/cart/cart-selectors";

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <NavLink className="option" activeClassName="active" to="/shop">
          SHOP
        </NavLink>
        <NavLink className="option logo" to="/">
          Home
        </NavLink>
        <div className="last-options">
          {this.props.currentUser ? (
            <span className="option" onClick={() => auth.signOut()}>
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

export default connect(mapStateToProps)(Header);
