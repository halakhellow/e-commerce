import userActionTypes from "./user-action-types";

export let setCurrentUser = (user) => ({
  type: userActionTypes.SET_CURRENT_USER,
  payload: user,
});

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
