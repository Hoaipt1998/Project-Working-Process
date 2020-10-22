export const setUser = (user) => {
    console.log('setuser', user);
    if (user) {
        localStorage.setItem('user', JSON.stringify(user));
    }
};

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