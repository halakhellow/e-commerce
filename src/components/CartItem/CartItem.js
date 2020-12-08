import React from "react";
import "./CartItem.css";

let CartItem = ({ item: { imageUrl, name, price, quantity } }) => (
  <div className="CartItem">
    <img src={imageUrl} alt={name} />
    <div className="CartItem-details">
      <span className="CartItem-name">{name}</span>
      <span>Quantity : {quantity}</span>
      <span>Price : ${price}</span>
    </div>
  </div>
);

export default CartItem;
