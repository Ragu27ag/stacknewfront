import { combineReducers } from "redux";
import authreducer from "./auth";
import currentUserReducer from "./currentUser";
import questionReducer from "./questions";

export default combineReducers({
    authreducer,currentUserReducer,questionReducer
})