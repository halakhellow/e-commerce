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

export let selectCartHidden = createSelector(
  [selectCart],
  (cart) => cart.hidden
);

export let selectItemsTotalPrice = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce(
      (itemsAccumulator, item) => itemsAccumulator + item.quantity * item.price,
      0
    )
);
