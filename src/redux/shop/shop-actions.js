import shopActionTypes from "./shop-action-types";

import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "../../firebase/firebaseUtilities";

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

let fetchCollectionsAsync = () => {
  return (dispatch) => {
    let collectionsRef = firestore.collection("collections");
    dispatch(fetchCollectionsStart());
    collectionsRef.onSnapshot(
      (snapshot) => {
        let collections = convertCollectionsSnapshotToMap(snapshot);
        dispatch(fetchCollectionsSuccess(collections));
      },
      (error) => dispatch(fetchCollectionsFailure(error))
    );
  };
};

export { fetchCollectionsAsync };
