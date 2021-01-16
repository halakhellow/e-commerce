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

<<<<<<< HEAD
    case userActionTypes.SIGN_OUT_SUCCESS:
      return { ...state, currentUser: null, errorMessage: "" };

    case userActionTypes.SIGN_IN_FAILURE:
    case userActionTypes.SIGN_OUT_FAILURE:
=======
    case userActionTypes.SIGN_IN_FAILURE:
>>>>>>> 4d9006d9109e35ee65a24a81706614f4cf592f85
      return {
        ...state,
        errorMessage: action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;
