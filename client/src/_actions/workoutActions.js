import { workoutConstants } from "../_constants";
import { workoutService } from "../_services"

export const workoutActions = {
    getCurrentUser,
    getById,
    updateWorkout,
    getList
};

function getCurrentUser() {
    return dispatch => {
        dispatch(request());

        workoutService.getCurrentUser()
            .then(
                workout => dispatch(success(workout)),
                error => dispatch(failure(error.toString()))
            );
    };

    function request() { return { type: workoutConstants.GET_USER_WORKOUT_LOADING } }
    function success(workout) { return { type: workoutConstants.GET_USER_WORKOUT_SUCCESS, workout } }
    function failure(error) { return { type: workoutConstants.GET_USER_WORKOUT_FAILURE, error } }
}

function getById(id) {
    return dispatch => {
        dispatch(request());

        workoutService.getById(id)
            .then(
                workout => dispatch(success(workout)),
                error => dispatch(failure(error.toString()))
            );
    };

    function request() { return { type: workoutConstants.GET_SPECIFIC_USER_LOADING } }
    function success(workout) { return { type: workoutConstants.GET_SPECIFIC_USER_SUCCESS, workout } }
    function failure(error) { return { type: workoutConstants.GET_SPECIFIC_USER_FAILURE, error } }
}


function getList(list) {
    return dispatch => {
        dispatch(request());

        workoutService.getList(list)
            .then(
                list => dispatch(success(list)),
                error => dispatch(failure(error.toString()))
            );
    };

    function request() { return { type: workoutConstants.GET_LIST_LOADING } }
    function success(list) { return { type: workoutConstants.GET_LIST_SUCCESS, list } }
    function failure(error) { return { type: workoutConstants.GET_LIST_FAILURE, error } }
}

function updateWorkout(values) {
    return dispatch => {
        dispatch(request());

        workoutService.updateWorkout(values)
            .then(
                workout => dispatch(success(workout)),
                error => dispatch(failure(error.toString()))
            );
    };

    function request() { return { type: workoutConstants.UPDATE_WORKOUT_LOADING } }
    function success(workout) { return { type: workoutConstants.UPDATE_WORKOUT_SUCCESS, workout } }
    function failure(error) { return { type: workoutConstants.UPDATE_WORKOUT_FAILURE, error } }
}