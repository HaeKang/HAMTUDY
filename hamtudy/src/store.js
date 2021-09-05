import { applyMiddleware, createStore } from "redux";
import rootReducer from "./modules/index";
import thunk from "redux-thunk";
import promiseMiddleware from "redux-promise";

const store = () => {
  return createStore(rootReducer, applyMiddleware(promiseMiddleware, thunk));
};

// const store = createStore(rootReducer, composeWithDevTools());

export default store;
