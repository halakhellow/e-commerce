import { takeLatest, all, put, call } from "redux-saga/effects";

import userActionTypes from "./user-action-types";

import { googleSignInFailure, googleSignInSuccess } from "./user-actions";

import {
  auth,
  googleProvider,
  createUserDocument,
} from "../../firebase/firebaseUtilities";

function* signInWithGoogle() {
  try {
    let { user } = yield auth.signInWithPopup(googleProvider);
    let userRef = yield call(createUserDocument, user);
    let snapShot = yield userRef.get();
    yield put(googleSignInSuccess({ id: snapShot.id, ...snapShot.data() }));
  } catch (error) {
    put(googleSignInFailure(error.message));
  }
}

function* onGoogleSignInStart() {
  yield takeLatest(userActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

function* userSagas() {
  yield all([call(onGoogleSignInStart)]);
}

export default userSagas;
