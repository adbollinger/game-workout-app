import { combineReducers } from "redux";
import authReducer from "./authReducer";
import userReducer from './userReducer';
import workoutReducer from './workoutReducer';

export default combineReducers({
    userReducer,
    authReducer,
    workoutReducer
});