import { combineReducers } from "redux";
import userService from "./userService/Reducer"
import studyRoom from "./studyroom/Reducer";

const rootReducer = combineReducers({
    userService,
    studyRoom
})

export default rootReducer;  