import React from "react";
import CustomBtn from "../CustomBtn/CustomBtn";
import "./CartDropdown.css";

let CartDropdown = () => (
  <div className="CartDropdown">
    <div className="CartItems"></div>
    <CustomBtn>CHECKOUT</CustomBtn>
  </div>
);

export default CartDropdown;
