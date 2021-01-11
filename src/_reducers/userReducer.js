import { userConstants } from "../_constants";

const initialState = {
    loading: false,
    users: [],
    user: {}
}

export default function userReducer(state = initialState, action) {
    switch (action.type) {
        // GET USERS
        case userConstants.GET_USERS_LOADING:
            return {
                loading: true
            };
        case userConstants.GET_USERS_SUCCESS:
            return {
                loading: false,
                users: action.users
            };
        case userConstants.GET_USERS_FAILURE:
            return {
                loading: false,
                error: action.error
            };
        // GET USER
        case userConstants.GET_USER_LOADING:
            return {
                loading: true
            };
        case userConstants.GET_USER_SUCCESS:
            return {
                user: action.user
            };
        case userConstants.GET_USER_FAILURE:
            return {
                error: action.error
            };
        // ADD USER
        case userConstants.ADD_USER_LOADING:
            return {
                loading: true
            };
        case userConstants.ADD_USER_SUCCESS:
            return {
                user: action.user
            };
        case userConstants.ADD_USER_FAILURE:
            return {
                error: action.error
            };
        // UPDATE WORKOUT
        case userConstants.UPDATE_WORKOUT_LOADING:
            return {
                loading: true
            };
        case userConstants.UPDATE_WORKOUT_SUCCESS:
            return {
                user: action.user
            };
        case userConstants.UPDATE_WORKOUT_FAILURE:
            return {
                error: action.error
            };
        default:
            return state;
    }
} 