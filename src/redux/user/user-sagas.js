import { takeLatest, all, put, call } from "redux-saga/effects";

import userActionTypes from "./user-action-types";

import {
  signInFailure,
  signInSuccess,
  signOutFailure,
  signOutSuccess,
} from "./user-actions";

import {
  auth,
  googleProvider,
  createUserDocument,
  getCurrentUser,
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

function* isUserAuthenticated() {
  try {
    let userAuth = yield getCurrentUser();
    if (!userAuth) return;
    yield getSnapshotFromUserAuth(userAuth);
  } catch (error) {
    yield put(signInFailure(error.message));
  }
}

function* onCheckUserSession() {
  yield takeLatest(userActionTypes.CHECK_USER_SESSION, isUserAuthenticated);
}

function* signOut() {
  try {
    yield auth.signOut();
    yield put(signOutSuccess());
  } catch (error) {
    yield put(signOutFailure(error.message));
  }
}

function* onSignOutStart() {
  yield takeLatest(userActionTypes.SIGN_OUT_START, signOut);
}

function* userSagas() {
  yield all([
    call(onGoogleSignInStart),
    call(onEmailSignInStart),
    call(onCheckUserSession),
    call(onSignOutStart),
  ]);
}

export default userSagas;
