import {
        USERSTABLE_LOAD_USERS
} from "./actions";

const defaultState = {
    users: [],
    isLoading: true
}



export const userstableReducer = (state = defaultState, action) => {
        switch(action.type) {
            case USERSTABLE_LOAD_USERS:
                return {
                    ...state,
                    users: action.payload,
                    isLoading: false
                }
        }
    return state
}