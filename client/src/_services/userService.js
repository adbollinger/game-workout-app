import { authService } from ".";

export const userService = {
    getAll,
    getById,
    addUser,
    updateWorkout
};

const baseUrl = 'http://localhost:4000/api';

function getAll() {
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include' 
    };

    return fetch(`${baseUrl}/users`, requestOptions).then(handleResponse);
}

function getById(id) {
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include'
    };

    return fetch(`${baseUrl}/users/${id}`, requestOptions).then(handleResponse);
}

function addUser(user) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify(user)
    };

    return fetch(`${baseUrl}/users`, requestOptions).then(handleResponse);
}

function updateWorkout(user) {
    const requestOptions = {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify(user)
    };

    return fetch(`${baseUrl}/workouts`, requestOptions).then(handleResponse);
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                authService.logout();
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}