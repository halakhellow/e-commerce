import React from "react";
import ShoppingIcon from "../../images/cart.png";
import { connect } from "react-redux";
import "./CartIcon.css";
import { toggleCartHidden } from "../../redux/cart/cart-actions";

let CartIcon = (props) => (
  <div className="CartIcon" onClick={props.toggleCartHidden}>
    <img src={ShoppingIcon} className="ShoppingIcon" />
    <span className="ItemsNum">{props.itemsNum}</span>
  </div>
);

let mapStateToProps = (state) => ({
  itemsNum: state.cart.cartItems.reduce(
    (itemsAccumulator, item) => itemsAccumulator + item.quantity,
    0
  ),
});

let mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
