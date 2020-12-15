import React from "react";
import "./CheckoutPage.css";
import HrWithText from "../../components/HrWithText/HrWithText";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectCartItems,
  selectItemsTotalPrice,
} from "../../redux/cart/cart-selectors";
import CheckoutItem from "../../components/CheckoutItem/CheckoutItem";
import { updateCartItems } from "../../redux/cart/cart-actions";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

let CheckoutPage = ({ cartItems, total, updateCartItems }) => {
  function handleOnDragEnd(result) {
    if (!result.destination) return;
    if (
      result.source.droppableId === result.destination.droppableId &&
      result.source.index === result.destination.index
    )
      return;
    let updatedItems = cartItems;
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
