import axios from "axios"

export const AUTH_CHANGE_LOGIN_INPUT = 'AUTH_CHANGE_LOGIN_INPUT'
export const AUTH_CHANGE_PASSWORD_INPUT = 'AUTH_CHANGE_PASSWORD_INPUT'
export const AUTH_REGISTER_USER = 'AUTH_REGISTER_USER'
export const AUTH_AUTHORIZATION_USER = 'AUTH_AUTHORIZATION_USER'
export const AUTH_AUTHORIZATION_USER2 = 'AUTH_AUTHORIZATION_USER'




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

// export const authUser = (...payload) => ({
//     type: AUTH_AUTHORIZATION_USER,
//     payload
// })

export const authUser = (log, pass) => dispatch =>
    axios
        .post("https://mysterious-reef-29460.herokuapp.com/api/v1/validate", {
                    email: log,
                    password: pass,
                },)
        .then(response => {
            if(response.data.status !== "err") {
                dispatch({
                        type: AUTH_AUTHORIZATION_USER,
                        payload: response.data.data.id
                    }
                )
            } else { console.log("net")}
})











