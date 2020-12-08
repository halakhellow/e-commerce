import React from "react";
import ShoppingIcon from "../../images/cart.png";
import { connect } from "react-redux";
import "./CartIcon.css";
import { toggleCartHidden } from "../../redux/cart/cart-actions";

let CartIcon = (props) => (
  <div className="CartIcon" onClick={props.toggleCartHidden}>
    <img src={ShoppingIcon} className="ShoppingIcon" />
    <span className="ItemsNum">0</span>
  </div>
);

let mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(null, mapDispatchToProps)(CartIcon);
