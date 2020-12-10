import React from "react";
import "./CheckoutItem.css";

let CheckoutItem = ({ item: { name, imageUrl, price, quantity } }) => (
  <div className="CheckoutItem">
    <div className="img-container">
      <img src={imageUrl} alt={name} />
    </div>
    <span className="name">{name}</span>
    <span className="quantity">{quantity}</span>
    <span className="price">${price}</span>
    <div className="remove-button">&#10005;</div>
  </div>
);

export default CheckoutItem;
