import {
    AUTH_AUTHORIZATION_USER,
} from "./actions";

const defaultState = {
    isLogged: false,
    currentUserID: ''
}


export const authReducer = (state = defaultState, action) => {
        switch(action.type) {
            case AUTH_AUTHORIZATION_USER:
                return {
                    ...state,
                    currentUserID: action.payload,
                    isLogged: true
                }
            default: return state;

        }
}