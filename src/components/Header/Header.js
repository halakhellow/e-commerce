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
