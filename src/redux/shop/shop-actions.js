import shopActionTypes from "./shop-action-types";

let fetchCollectionsStart = () => ({
  type: shopActionTypes.FETCH_COLLECTIONS_START,
});

let fetchCollectionsSuccess = (collections) => ({
  type: shopActionTypes.FETCH_COLLECTIONS_SUCESS,
  payload: collections,
});

let fetchCollectionsFailure = (errorMessage) => ({
  type: shopActionTypes.FETCH_COLLECTIONS_FAILURE,
  payload: errorMessage,
});

export {
  fetchCollectionsStart,
  fetchCollectionsSuccess,
  fetchCollectionsFailure,
};
