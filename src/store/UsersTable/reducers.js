import {
    USERSTABLE_LOAD_USERS,
    USERTABLE_FILTER_USERS
} from "./actions";

const defaultState = {
    users: [],
    isLoading: true,
    search: '',
}



export const userstableReducer = (state = defaultState, action) => {

        switch(action.type) {
            case USERSTABLE_LOAD_USERS:
                return {
                    ...state,
                    users: action.payload,
                    isLoading: false
                }
            case USERTABLE_FILTER_USERS:
                return {
                    ...state,
                    search: action.payload,
                    // users: filteredUsers()
                }
            default: return state
        }

}

