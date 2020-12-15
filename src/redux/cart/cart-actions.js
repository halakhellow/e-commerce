import cartActionTypes from "./cart-action-types";

let toggleCartHidden = () => ({
  type: cartActionTypes.TOGGLE_CART_HIDDEN,
});

let addItem = (item) => ({
  type: cartActionTypes.ADD_ITEM,
  payload: item,
});

let removeItem = (item) => ({
  type: cartActionTypes.REMOVE_ITEM,
  payload: item,
});

let decreaseQuantity = (item) => ({
  type: cartActionTypes.DECREASE_ITEM_QUANTITY,
  payload: item,
});

let updateCartItems = (items) => ({
  type: cartActionTypes.UPDATE_CART_ITEMS,
  payload: items,
});

export {
  toggleCartHidden,
  addItem,
  removeItem,
  decreaseQuantity,
  updateCartItems,
};
