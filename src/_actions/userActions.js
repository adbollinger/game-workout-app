import { userConstants } from "../_constants"

export const userActions = {
    getUser,
    getUsers,
    addUser
}

function getUsers() {
    return {
        type: userConstants.GET_USERS_SUCCESS
    };
}

function getUser() {
    return {
        type: userConstants.GET_USER_SUCCESS
    };
}

function addUser() {
    return {
        type: userConstants.ADD_USER_SUCCESS
    };
}