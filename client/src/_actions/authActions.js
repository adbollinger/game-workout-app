import { authConstants } from "../_constants";
import { authService } from "../_services";

export const authActions = {
    login,
    logout,
    getUser
}

function login(username, password) {        
    return dispatch => {
        dispatch(request());
        authService.login(username, password)
            .then(
                data => {
                    dispatch(success(data));
                },
                error => {
                    dispatch(failure(error.toString()));
                }
            );
    }

    function request() { return { type: authConstants.LOGIN_LOADING } }
    function success(data) { return { type: authConstants.LOGIN_SUCCESS, data } }
    function failure(error) { return { type: authConstants.LOGIN_FAILURE, error } }
}

function logout() {
    return dispatch => {
        dispatch(request());
        authService.logout()
            .then(
                data => {
                    dispatch(success());
                },
                error => {
                    dispatch(failure(error.toString()));
                }
            );
    }

    
    function request() { return { type: authConstants.LOGOUT_LOADING } }
    function success() { return { type: authConstants.LOGOUT_SUCCESS } }
    function failure(error) { return { type: authConstants.LOGOUT_FAILURE, error } }
}

function getUser() {
    return dispatch => {
        dispatch(request());
        authService.getUser()
            .then(
                data => {
                    dispatch(success(data));
                },
                error => {
                    dispatch(failure(error.toString()));
                }
            );
    }

    
    function request() { return { type: authConstants.GETUSER_LOADING } }
    function success(data) { return { type: authConstants.GETUSER_SUCCESS, data } }
    function failure(error) { return { type: authConstants.GETUSER_FAILURE, error } }
}