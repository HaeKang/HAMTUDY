import { combineReducers } from "redux";
import userService from "./userService/Reducer"

const rootReducer = combineReducers({
    userService
})

export default rootReducer;  