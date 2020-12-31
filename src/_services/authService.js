export const authService = {
    login,
    logout
};

const baseUrl = 'http://localhost:4000/api';

function login(name, password) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ name, password })
    };

    return fetch(`${baseUrl}/auth/login`, requestOptions)
        .then(handleResponse)
        .then(res => {
            return res;
        });
}

function logout() {
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include'
    };

    return fetch(`${baseUrl}/auth/logout`, requestOptions).then(handleResponse);
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                logout();
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}