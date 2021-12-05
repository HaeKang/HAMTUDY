import { combineReducers } from "redux";
import userService from "./userService";

const rootReducer = combineReducers({
    userService,
})

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>