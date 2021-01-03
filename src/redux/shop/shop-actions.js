import shopActionTypes from "./shop-action-types";

let updateCollections = (collections) => ({
  type: shopActionTypes.UPDATE_COLLECTIONS,
  payload: collections,
});

export { updateCollections };
