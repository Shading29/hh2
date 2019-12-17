import {
    AUTH_AUTHORIZATION_USER,
    AUTH_CHANGE_LOGIN_INPUT,
    AUTH_CHANGE_PASSWORD_INPUT,
    AUTH_REGISTER_USER
} from "./actions";

const defaultState = {
    users: [
        {login: "admin", password: "admin"},
        {login: "admin3", password: "admin"},
        {login: "admin4", password: "admin"},
        {login: "admin5", password: "admin"}
        ],
    login: '',
    password: '',
    isLogged: false
}

export const authReducer = (state = defaultState, action) => {
    switch(action.type) {
        case AUTH_CHANGE_LOGIN_INPUT:
            return {
                ...state,
                login: action.payload
            }
        case AUTH_CHANGE_PASSWORD_INPUT:
            return {
                ...state,
                password: action.payload
            }

        case AUTH_REGISTER_USER:
            return {
                ...state,
                users: [...state.users, action.payload]
            }

        case AUTH_AUTHORIZATION_USER:
            console.log(action.payload)
            state.users.forEach(user => {
                if(user.login === action.payload[0] && user.password === action.payload[1]) {
                    console.log("+")
                } else console.log("-")

            })
    }

    return state
}