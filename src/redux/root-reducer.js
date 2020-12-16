import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import cartReducer from "./cart/cart-reducer";
import menuReducer from "./menu/menu-reducer";
import userReducer from "./user/user-reducer";

let persistConfig = {
  key: "root",
  storage,
  whitelist: "cart",
};

let rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  menu: menuReducer,
});

export default persistReducer(persistConfig, rootReducer);
