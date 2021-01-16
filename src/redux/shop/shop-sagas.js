import { call, put, takeLatest, all } from "redux-saga/effects";

import shopActionTypes from "./shop-action-types";

import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "../../firebase/firebaseUtilities";
import {
  fetchCollectionsFailure,
  fetchCollectionsSuccess,
} from "./shop-actions";

function* fetchCollectionsAsync() {
  try {
    let collectionsRef = firestore.collection("collections");
    let snapshot = yield collectionsRef.get();
    let collections = yield call(convertCollectionsSnapshotToMap, snapshot);
    yield put(fetchCollectionsSuccess(collections));
  } catch (error) {
    yield put(fetchCollectionsFailure(error.message));
  }
}

function* onFetchCollectionsStart() {
  yield takeLatest(
    shopActionTypes.FETCH_COLLECTIONS_START,
    fetchCollectionsAsync
  );
}

function* shopSagas() {
  yield all([call(onFetchCollectionsStart)]);
}

export default shopSagas;
