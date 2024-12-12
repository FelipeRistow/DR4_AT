export const isLoggedIn = () => {
    return localStorage.getItem("auth-token") !== null;
};

export const login = (token: string) => {
    return localStorage.setItem("auth-token", token);
};

export const logout = () => {
    return localStorage.removeItem("auth-token");
};
