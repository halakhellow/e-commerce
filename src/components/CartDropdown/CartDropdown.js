import React from "react";
import CustomBtn from "../CustomBtn/CustomBtn";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import "./CartDropdown.css";
import CartItem from "../CartItem/CartItem";
import { selectCartItems } from "../../redux/cart/cart-selectors";
import { createStructuredSelector } from "reselect";
import emptyCart from "../../images/empty-cart.png";

let CartDropdown = ({ cartItems, history }) => (
  <div className="CartDropdown">
    <div className="CartItems">
      {cartItems.length ? (
        cartItems.map((item) => <CartItem key={item.id} item={item} />)
      ) : (
        <div className="empty-cart">
          <img src={emptyCart} alt="empty-cart" />
          <span>Cart is empty</span>
        </div>
      )}
    </div>
    <CustomBtn
      disabled={!cartItems.length}
      onClick={() => history.push("/checkout")}
    >
      CHECKOUT
    </CustomBtn>
  </div>
);

let mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
