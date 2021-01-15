import userActionTypes from "./user-action-types";

let INITIAL_STATE = {
  currentUser: null,
  errorMessage: "",
};

let userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case userActionTypes.GOOGLE_SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        errorMessage: "",
      };

    case userActionTypes.GOOGLE_SIGN_IN_FAILURE:
      return {
        ...state,
        errorMessage: action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;
