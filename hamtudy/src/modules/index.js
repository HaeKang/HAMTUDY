import { combineReducers } from "redux";
import authReducer from "./userService";

const rootReducer = combineReducers({
  authReducer,
});

export default rootReducer;
