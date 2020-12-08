import { combineReducers } from "redux";
import cartReducer from "./cart/cart-reducer";
import userReducer from "./user/user-reducer";

let rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
});

export default rootReducer;
