import { authConstants } from "../_constants";

const initialState = {
    loading: false,
    loggedIn: false,
    user: {}
};

export default function authReducer(state = initialState, action) {
    switch (action.type) {
        case authConstants.LOGOUT_LOADING:
        case authConstants.LOGIN_LOADING:
        case authConstants.GETUSER_LOADING:
            return {
                ...state,
                loading: true
            };
        case authConstants.LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
                loggedIn: true,
                user: action.data.user
            };
        case authConstants.GETUSER_SUCCESS:
            return {
                ...state,
                loading: false,
                user: action.data.user
            }
        case authConstants.GETUSER_FAILURE:
        case authConstants.LOGIN_FAILURE:
        case authConstants.LOGOUT_SUCCESS:
            return {
                ...state,
                loading: false,
                loggedIn: false,
                user: {}
            };
        case authConstants.LOGOUT_FAILURE:
            return {
                ...state,
                loading: false,
                loggedIn: true
            }
        default:
            return state;
    }
} 