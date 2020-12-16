import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { persistStore } from "redux-persist";
import rootReducer from "./root-reducer";

let middlewares = [logger];

let store = createStore(rootReducer, applyMiddleware(...middlewares));

let persistor = persistStore(store);

export { store, persistor };
