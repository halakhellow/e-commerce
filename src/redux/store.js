import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { persistStore } from "redux-persist";
import rootReducer from "./root-reducer";

let middlewares = [thunk];

if (process.env.NODE_ENV === "development") middlewares.push(logger);

let store = createStore(rootReducer, applyMiddleware(...middlewares));

let persistor = persistStore(store);

export { store, persistor };
