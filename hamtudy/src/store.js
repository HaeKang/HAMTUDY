import { applyMiddleware, createStore } from "redux";
import rootReducer from "./modules/index";
import thunk from "redux-thunk";
import promiseMiddleware from "redux-promise";
import { composeWithDevTools } from "redux-devtools-extension";

const store = () => {
  return createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(promiseMiddleware, thunk))
  );
};

export default store;
