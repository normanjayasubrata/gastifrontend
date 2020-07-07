const tokenName = process.env.TOKEN || "token_gasti";

export const getToken = () => {
    return localStorage.getItem(tokenName);
}

export const hasToken = () => {
    if (localStorage.getItem(tokenName) === "" || localStorage.getItem(tokenName) == null) {
        return false;
    } else {
        return true;
    }
}

export const setToken = (token) => {
    return localStorage.setItem(tokenName, token)
}

export const removeToken = () => {
    return localStorage.removeItem(tokenName)
}