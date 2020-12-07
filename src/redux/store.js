import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import rootReducer from "./root-reducer";

let middlewares = [logger];

let store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;
