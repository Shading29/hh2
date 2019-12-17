export const AUTH_CHANGE_LOGIN_INPUT = 'AUTH_CHANGE_LOGIN_INPUT'
export const AUTH_CHANGE_PASSWORD_INPUT = 'AUTH_CHANGE_PASSWORD_INPUT'
export const AUTH_REGISTER_USER = 'AUTH_REGISTER_USER'
export const AUTH_AUTHORIZATION_USER = 'AUTH_AUTHORIZATION_USER'


export const setLoginInput = login => ({
    type: AUTH_CHANGE_LOGIN_INPUT,
    payload: login
});

export const setPasswordInput = password => ({
    type: AUTH_CHANGE_PASSWORD_INPUT,
    payload: password
});

export const registerUser = (...payload) => ({
    type: AUTH_REGISTER_USER,
    payload
})

export const authUser = (...payload) => ({
    type: AUTH_AUTHORIZATION_USER,
    payload
})

