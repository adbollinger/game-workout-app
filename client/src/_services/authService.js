export const authService = {
    login,
    logout,
    getUser
};

const baseUrl = 'http://localhost:4100/api/auth';

function login(name, password) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ name, password })
    };

    return fetch(`${baseUrl}/login`, requestOptions)
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

    return fetch(`${baseUrl}/logout`, requestOptions).then(handleResponse);
}

function getUser() {
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include'
    };

    return fetch(`${baseUrl}/user`, requestOptions).then(handleResponse);
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