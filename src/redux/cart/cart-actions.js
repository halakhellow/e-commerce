import cartActionTypes from "./cart-action-types";

let toggleCartHidden = () => ({
  type: cartActionTypes.TOGGLE_CART_HIDDEN,
});

let addItems = (item) => ({
  type: cartActionTypes.ADD_ITEMS,
  payload: item,
});

export { toggleCartHidden, addItems };
