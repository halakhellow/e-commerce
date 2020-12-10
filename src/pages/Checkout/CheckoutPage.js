import React from "react";
import "./CheckoutPage.css";

let CheckoutPage = () => (
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
    <div className="total-price"></div>
  </div>
);

export default CheckoutPage;
