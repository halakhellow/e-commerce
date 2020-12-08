import cartActionTypes from "./cart-action-types";

let INITIAL_STATE = {
  hidden: true,
  cartItems: [],
};

let cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case cartActionTypes.TOGGLE_CART_HIDDEN:
      return { ...state, hidden: !state.hidden };

    case cartActionTypes.ADD_ITEMS:
      return { ...state, cartItems: [...state.cartItems, action.payload] };

    default:
      return state;
  }
};

export default cartReducer;
