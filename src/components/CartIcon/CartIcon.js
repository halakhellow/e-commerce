import React from "react";
import ShoppingIcon from "../../images/cart.png";
import "./CartIcon.css";

let CartIcon = () => (
  <div className="CartIcon">
    <img src={ShoppingIcon} className="ShoppingIcon" />
    <span className="ItemsNum">0</span>
  </div>
);

export default CartIcon;
