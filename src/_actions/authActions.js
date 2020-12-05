import { authConstants } from "../_constants";
import { userService } from "../_services/userService";

export const authActions = {
    login,
    logout
}

function login(username) {
    /*
    return dispatch => {
        userService.login(username)
            .then(
                user => {
                    dispatch(success(user));
                },
                error => {
                    dispatch(failure(error.toString()));
                }
            );
            
           
    }
    */
    return success(userService.login(username));

    function success(user) { return { type: authConstants.LOGIN_SUCCESS, user } }
    function failure(error) { return { type: authConstants.LOGIN_FAILURE, error } }
}

function logout() {
    userService.logout();
    return {
        type: authConstants.LOGOUT_SUCCESS
    }
}