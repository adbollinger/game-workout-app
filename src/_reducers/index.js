import { combineReducer, combineReducers } from "redux";
import authReducer from "./authReducer";
import userReducer from './userReducer';

export default combineReducers({
    users: userReducer,
    auth: authReducer
});