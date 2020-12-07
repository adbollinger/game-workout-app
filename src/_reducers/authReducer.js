import { authConstants } from "../_constants";


//let user = JSON.parse(localStorage.getItem('user'));
let user = localStorage.getItem('user');
const initialState = user ? { 
    loading: false,
    loggedIn: true, 
    user 
} : { 
    loading: false,
    loggedIn: false, 
    user: null 
};

export default function (state = initialState, action) {
    switch (action.type) {
        case authConstants.LOGIN_SUCCESS:
            return {
                loggedIn: true,
                user: action.user
            };
        case authConstants.LOGIN_FAILURE:
        case authConstants.LOGOUT_SUCCESS:
            return {
                loggedIn: false,
                user: null
            };
        default:
            return state;
    }
} 