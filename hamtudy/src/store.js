import { applyMiddleware, createStore } from "redux";
import rootReducer from "./modules/index";
import thunk from "redux-thunk";
import promiseMiddleware from "redux-promise";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
};

const persisted = persistReducer(persistConfig, rootReducer);

const store = createStore(
  persisted,
  composeWithDevTools(applyMiddleware(promiseMiddleware, thunk))
);

export default store;
