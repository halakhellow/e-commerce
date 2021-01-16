import userActionTypes from "./user-action-types";

export let googleSignInStart = () => ({
  type: userActionTypes.GOOGLE_SIGN_IN_START,
});

export let emailSignInStart = (emailAndPassword) => ({
  type: userActionTypes.EMAIL_SIGN_IN_START,
  payload: emailAndPassword,
<<<<<<< HEAD
});

export let signInSuccess = (user) => ({
  type: userActionTypes.SIGN_IN_SUCCESS,
  payload: user,
});

export let signInFailure = (error) => ({
  type: userActionTypes.SIGN_IN_FAILURE,
  payload: error,
});

export let checkUserSession = () => ({
  type: userActionTypes.CHECK_USER_SESSION,
});

export let signOutStart = () => ({
  type: userActionTypes.SIGN_OUT_START,
});

export let signOutSuccess = () => ({
  type: userActionTypes.SIGN_OUT_SUCCESS,
});

export let signOutFailure = (error) => ({
  type: userActionTypes.SIGN_OUT_FAILURE,
=======
});

export let signInSuccess = (user) => ({
  type: userActionTypes.SIGN_IN_SUCCESS,
  payload: user,
});

export let signInFailure = (error) => ({
  type: userActionTypes.SIGN_IN_FAILURE,
>>>>>>> 4d9006d9109e35ee65a24a81706614f4cf592f85
  payload: error,
});
