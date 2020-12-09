import { createSelector } from "reselect";

let selectCart = (state) => state.cart;

export let selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export let selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce(
      (itemsAccumulator, item) => itemsAccumulator + item.quantity,
      0
    )
);
