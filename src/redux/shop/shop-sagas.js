import { call, put, takeLatest } from "redux-saga/effects";

import shopActionTypes from "./shop-action-types";

import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "../../firebase/firebaseUtilities";
import {
  fetchCollectionsFailure,
  fetchCollectionsSuccess,
} from "./shop-actions";

export function* fetchCollectionsAsync() {
  try {
    let collectionsRef = firestore.collection("collections");
    let snapshot = yield collectionsRef.get();
    let collections = yield call(convertCollectionsSnapshotToMap, snapshot);
    yield put(fetchCollectionsSuccess(collections));
  } catch (error) {
    yield put(fetchCollectionsFailure(error.message));
  }
}

export function* fetchCollectionsStart() {
  yield takeLatest(
    shopActionTypes.FETCH_COLLECTIONS_START,
    fetchCollectionsAsync
  );
}
