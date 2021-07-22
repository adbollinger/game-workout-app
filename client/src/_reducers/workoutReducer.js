import { workoutConstants } from "../_constants";

const initialState = {
    loading: false,
    workout: {},
    list: [],
    error: ''
}

export default function workoutReducer(state = initialState, action) {
    switch (action.type) {
        // GET CURRENT USER
        case workoutConstants.GET_USER_WORKOUT_LOADING:
            return {
                ...state,
                loading: true
            };
        case workoutConstants.GET_USER_WORKOUT_SUCCESS:
            return {
                ...state,
                loading: false,
                workout: action.workout
            };
        case workoutConstants.GET_USER_WORKOUT_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error
            };
        // GET USER BY ID
        case workoutConstants.GET_SPECIFIC_USER_LOADING:
            return {
                ...state,
                loading: true
            };
        case workoutConstants.GET_SPECIFIC_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                workout: action.workout
            };
        case workoutConstants.GET_SPECIFIC_USER_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error
            };
        // GET LIST OF WORKOUTS
        case workoutConstants.GET_LIST_LOADING:
            return {
                ...state,
                loading: true
            };
        case workoutConstants.GET_LIST_SUCCESS:
            return {
                ...state,
                loading: false,
                list: action.list
            };
        case workoutConstants.GET_LIST_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error
            };
        // UPDATE WORKOUT
        case workoutConstants.UPDATE_WORKOUT_LOADING:
            return {
                ...state,
                loading: true
            };
        case workoutConstants.UPDATE_WORKOUT_SUCCESS:
            return {
                ...state,
                loading: false,
                workout: action.workout
            };
        case workoutConstants.UPDATE_WORKOUT_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error
            };
        default:
            return state;
    }
} 