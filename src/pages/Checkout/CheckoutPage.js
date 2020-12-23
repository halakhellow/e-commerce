import React from "react";
import { connect } from "react-redux";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { createStructuredSelector } from "reselect";

import HrWithText from "../../components/HrWithText/HrWithText";
import CheckoutItem from "../../components/CheckoutItem/CheckoutItem";
import StripeButton from "../../components/stripe/StripeButton";

import { updateCartItems } from "../../redux/cart/cart-actions";
import {
  selectCartItems,
  selectItemsTotalPrice,
} from "../../redux/cart/cart-selectors";

import "./CheckoutPage.css";

let CheckoutPage = ({ cartItems, total, updateCartItems }) => {
  function handleOnDragEnd(result) {
    if (!result.destination) return;
    if (
      result.source.droppableId === result.destination.droppableId &&
      result.source.index === result.destination.index
    )
      return;
    let updatedItems = Array.from(cartItems);
    let [reorderedItem] = updatedItems.splice(result.source.index, 1);
    updatedItems.splice(result.destination.index, 0, reorderedItem);

    updateCartItems(updatedItems);
  }
  return (
    <div className="CheckoutPage">
      <HrWithText content="Your Shopping Cart" />
      <div className="CheckoutPage-header">
        <div className="header-block">
          <span>Product</span>
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
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="checkout-items">
          {(provided) => (
            <ul {...provided.droppableProps} ref={provided.innerRef}>
              {cartItems.map((item, index) => {
                return (
                  <Draggable
                    key={item.id}
                    draggableId={item.name}
                    index={index}
                  >
                    {(provided) => (
                      <CheckoutItem
                        item={item}
                        innerRef={provided.innerRef}
                        provided={provided}
                      />
                    )}
                  </Draggable>
                );
              })}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </DragDropContext>

      <div className="total-price">Total Price : ${total}</div>
      <StripeButton price={total} />
      <div className="test-card">
        *Please use the following test credit card for payments*
        <br />
        5555 5555 5555 4444 - Exp: 07/21 - CVV: 123 &nbsp;
      </div>
    </div>
  );
};

let mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectItemsTotalPrice,
});

let mapDispatchToProps = (dispatch) => ({
  updateCartItems: (items) => dispatch(updateCartItems(items)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutPage);
