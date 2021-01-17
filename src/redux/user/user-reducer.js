import userActionTypes from "./user-action-types";

let INITIAL_STATE = {
  currentUser: null,
  errorMessage: "",
};

let userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case userActionTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        errorMessage: "",
      };

    case userActionTypes.SIGN_OUT_SUCCESS:
      return { ...state, currentUser: null, errorMessage: "" };

    case userActionTypes.SIGN_IN_FAILURE:
    case userActionTypes.SIGN_OUT_FAILURE:
    case userActionTypes.SIGN_UP_FAILURE:
      return {
        ...state,
        errorMessage: action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;
