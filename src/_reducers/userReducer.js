import { userConstants } from "../_constants";

const initialState = {
    users: [
        {
            _id: 1,
            name: "Adam",
            pushups: 10,
            situps: 20,
            squats: 30
        },
        {
            _id: 2,
            name: "Delun",
            pushups: 15,
            situps: 25,
            squats: 35
        }
    ]
}

export default function (state = initialState, action) {
    switch (action.type) {
        case userConstants.GET_USERS_SUCCESS:
            return {
                users: action.users
            };
        case userConstants.GET_USERS_FAILURE:
            return {
                error: action.error
            };
        case userConstants.GET_USER_SUCCESS:
            return {
                user: action.user
            };
        case userConstants.GET_USER_FAILURE:
            return {
                error: action.error
            };
        case userConstants.ADD_USER_SUCCESS:
            return {
                user: action.user
            };
        case userConstants.ADD_USER_FAILURE:
            return {
                error: action.error
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