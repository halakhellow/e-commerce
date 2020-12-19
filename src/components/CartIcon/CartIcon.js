import React from "react";
import ShoppingIcon from "../../images/cart.png";
import { connect } from "react-redux";
import "./CartIcon.css";
import { toggleCartHidden } from "../../redux/cart/cart-actions";
import { createStructuredSelector } from "reselect";
import { selectCartItemsCount } from "../../redux/cart/cart-selectors";

let CartIcon = (props) => (
  <div className="CartIcon" onClick={props.toggleCartHidden}>
    <img src={ShoppingIcon} className="ShoppingIcon" alt="shopping-cart" />
    <span className="ItemsCount">{props.itemsCount}</span>
  </div>
);

let mapStateToProps = createStructuredSelector({
  itemsCount: selectCartItemsCount,
});

let mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
