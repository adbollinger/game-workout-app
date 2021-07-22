import { authService } from ".";

export const workoutService = {
    getCurrentUser,
    getById,
    updateWorkout,
    getList
};

const baseUrl = 'http://localhost:4200/api/workout';

function getCurrentUser() {
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include' 
    };

    return fetch(`${baseUrl}`, requestOptions).then(handleResponse);
}

function getById(id) {
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include'
    };

    return fetch(`${baseUrl}/${id}`, requestOptions).then(handleResponse);
}

function updateWorkout(workout) {
    const requestOptions = {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify(workout)
    };

    return fetch(`${baseUrl}`, requestOptions).then(handleResponse);
}

function getList(list) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify(list)
    };

    return fetch(`${baseUrl}/list`, requestOptions).then(handleResponse);
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