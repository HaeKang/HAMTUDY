import { combineReducers } from "redux";
import testReducer from "./userService";
import authUser from "./authService";

const rootReducer = combineReducers({
  testReducer,
  authUser,
});

export default rootReducer;
