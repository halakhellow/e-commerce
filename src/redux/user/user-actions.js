import userActionTypes from "./user-action-types";

export let googleSignInStart = () => ({
  type: userActionTypes.GOOGLE_SIGN_IN_START,
});

export let googleSignInSuccess = (user) => ({
  type: userActionTypes.GOOGLE_SIGN_IN_SUCCESS,
  payload: user,
});

export let googleSignInFailure = (error) => ({
  type: userActionTypes.GOOGLE_SIGN_IN_FAILURE,
  payload: error,
});

export let emailSignInStart = (emailAndPassword) => ({
  type: userActionTypes.EMAIL_SIGN_IN_START,
  payload: emailAndPassword,
});

export let emailSignInSuccess = (user) => ({
  type: userActionTypes.EMAIL_SIGN_IN_SUCCESS,
  payload: user,
});

export let emailSignInFailure = (error) => ({
  type: userActionTypes.EMAIL_SIGN_IN_FAILURE,
  payload: error,
});
