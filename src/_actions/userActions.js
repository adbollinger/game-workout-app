import { userConstants } from "../_constants"
import { userService } from "../_services"

export const userActions = {
    getUser,
    getUsers,
    addUser,
    updateWorkout
}

function addUser(user) {
    return dispatch => {
        dispatch(request(user));

        userService.addUser(user)
            .then(
                user => {
                    dispatch(success(user));
                    userService.login(user.name);
                },
                error => dispatch(failure(error.toString()))
            );
    };

    function request() { return { type: userConstants.ADD_USER_LOADING } }
    function success(user) { return { type: userConstants.ADD_USER_SUCCESS, user } }
    function failure(error) { return { type: userConstants.ADD_USER_FAILURE, error } }
}

function getUsers() {
    return dispatch => {
        dispatch(request());

        userService.getAll()
            .then(
                users => dispatch(success(users)),
                error => dispatch(failure(error.toString()))
            );
    };

    function request() { return { type: userConstants.GET_USERS_LOADING } }
    function success(users) { return { type: userConstants.GET_USERS_SUCCESS, users } }
    function failure(error) { return { type: userConstants.GET_USERS_FAILURE, error } }
}


function getUser(id) {
    return dispatch => {
        dispatch(request(id));

        userService.getById(id)
            .then(
                user => dispatch(success(user)),
                error => dispatch(failure(error.toString()))
            );
    };

    function request() { return { type: userConstants.GET_USER_LOADING } }
    function success(user) { return { type: userConstants.GET_USER_SUCCESS, user } }
    function failure(error) { return { type: userConstants.GET_USER_FAILURE, error } }
}

function updateWorkout(values) {
    return dispatch => {
        dispatch(request());

        userService.updateWorkout(values)
            .then(
                user => dispatch(success(user)),
                error => dispatch(failure(error.toString()))
            );
    };

    function request() { return { type: userConstants.UPDATE_WORKOUT_LOADING } }
    function success(user) { return { type: userConstants.UPDATE_WORKOUT_SUCCESS, user } }
    function failure(error) { return { type: userConstants.UPDATE_WORKOUT_FAILURE, error } }
}