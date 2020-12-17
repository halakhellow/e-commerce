import ShopData from "./ShopData";

let INITIAL_STATE = {
  collections: ShopData,
};

let shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default shopReducer;
