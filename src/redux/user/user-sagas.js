import { takeLatest, all, put, call } from "redux-saga/effects";

import userActionTypes from "./user-action-types";

import { signInFailure, signInSuccess } from "./user-actions";

import {
  auth,
  googleProvider,
  createUserDocument,
} from "../../firebase/firebaseUtilities";

function* getSnapshotFromUserAuth(userAuth) {
  try {
    let userRef = yield call(createUserDocument, userAuth);
    let snapShot = yield userRef.get();
    yield put(signInSuccess({ id: snapShot.id, ...snapShot.data() }));
  } catch (error) {
    put(signInFailure(error.message));
  }
}

function* signInWithGoogle() {
  try {
    let { user } = yield auth.signInWithPopup(googleProvider);
    yield getSnapshotFromUserAuth(user);
  } catch (error) {
    put(signInFailure(error.message));
  }
}

function* onGoogleSignInStart() {
  yield takeLatest(userActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

function* signInWithEmail({ payload: { email, password } }) {
  try {
    let { user } = yield auth.signInWithEmailAndPassword(email, password);
    yield getSnapshotFromUserAuth(user);
  } catch (error) {
    put(signInFailure(error.message));
  }
}

function* onEmailSignInStart() {
  yield takeLatest(userActionTypes.EMAIL_SIGN_IN_START, signInWithEmail);
}

function* userSagas() {
  yield all([call(onGoogleSignInStart), call(onEmailSignInStart)]);
}

export default userSagas;
