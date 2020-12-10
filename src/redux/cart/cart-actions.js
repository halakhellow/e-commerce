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
export { toggleCartHidden, addItem, removeItem };
