import React from "react";
import "./CheckoutItem.css";
import { connect } from "react-redux";
import { removeItem } from "../../redux/cart/cart-actions";

let CheckoutItem = ({ item, dispatch }) => {
  let { name, imageUrl, price, quantity } = item;
  return (
    <div className="CheckoutItem">
      <div className="img-container">
        <img src={imageUrl} alt={name} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <span className="fas fa-minus"></span>
        <span className="value">{quantity}</span>
        <span className="fas fa-plus"></span>
      </span>
      <span className="price">${price}</span>
      <div onClick={() => dispatch(removeItem(item))} className="remove-button">
        &#10005;
      </div>
    </div>
  );
};

export default connect()(CheckoutItem);
