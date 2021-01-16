import cartActionTypes from "./cart-action-types";

export let toggleCartHidden = () => ({
  type: cartActionTypes.TOGGLE_CART_HIDDEN,
});

export let addItem = (item) => ({
  type: cartActionTypes.ADD_ITEM,
  payload: item,
});

export let removeItem = (item) => ({
  type: cartActionTypes.REMOVE_ITEM,
  payload: item,
});

export let decreaseQuantity = (item) => ({
  type: cartActionTypes.DECREASE_ITEM_QUANTITY,
  payload: item,
});

export let updateCartItems = (items) => ({
  type: cartActionTypes.UPDATE_CART_ITEMS,
  payload: items,
});

export let clearCart = () => ({
  type: cartActionTypes.CLEAR_CART,
});
