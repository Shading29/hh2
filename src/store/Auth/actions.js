import axios from "axios"

export const AUTH_AUTHORIZATION_USER = 'AUTH_AUTHORIZATION_USER'


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











