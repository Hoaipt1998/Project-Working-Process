export const setUserRegistered = (user) => {
    if (user) {
        localStorage.setItem('user', JSON.stringify(user));
    }
};

export const setUserLogged = (data) => {
    if (data) {
        localStorage.setItem('user', JSON.stringify(data.user));
        localStorage.setItem('token', data.token);
    }
}

export const getUser = () => {
    const userJSON = localStorage.getItem('user');

    if (userJSON) {
        return JSON.parse(userJSON);
    }

    return undefined;
}

export const removeUser = () => {
    localStorage.removeItem('user');
}