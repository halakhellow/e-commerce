import React from "react";
import "./CheckoutPage.css";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectCartItems,
  selectItemsTotalPrice,
} from "../../redux/cart/cart-selectors";

let CheckoutPage = ({ cartItems, total }) => (
  <div className="CheckoutPage">
    <div className="CheckoutPage-header">
      <div className="header-block">
        <span>Product</span>
      </div>
      <div className="header-block">
        <span>Description</span>
      </div>
      <div className="header-block">
        <span>Quantity</span>
      </div>
      <div className="header-block">
        <span>Price</span>
      </div>
      <div className="header-block">
        <span>Remove</span>
      </div>
    </div>
    {cartItems.map((item) => item.name)}
    <div className="total-price">Total Price : ${total}</div>
  </div>
);

let mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectItemsTotalPrice,
});

export default connect(mapStateToProps)(CheckoutPage);
