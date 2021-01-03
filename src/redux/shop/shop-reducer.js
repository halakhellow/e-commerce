import shopActionTypes from "./shop-action-types";
import ShopData from "./ShopData";

let INITIAL_STATE = {
  collections: ShopData,
};

let shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case shopActionTypes.UPDATE_COLLECTIONS:
      return {
        ...state,
        collections: action.payload,
      };
    default:
      return state;
  }
};

export default shopReducer;
