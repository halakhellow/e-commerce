import React from "react";
import CustomBtn from "../CustomBtn/CustomBtn";
import { connect } from "react-redux";
import "./CartDropdown.css";
import CartItem from "../CartItem/CartItem";
import { selectCartItems } from "../../redux/cart/cart-selectors";

let CartDropdown = ({ cartItems }) => (
  <div className="CartDropdown">
    <div className="CartItems">
      {cartItems.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
    </div>
    <CustomBtn>CHECKOUT</CustomBtn>
  </div>
);

let mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
});

export default connect(mapStateToProps)(CartDropdown);
