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

        const { search } = state

        const filteredUsers = data => {
            return data.filter(user => {
                    return user.name.toUpperCase().includes(search.toUpperCase())
                        || user.surname.toUpperCase().includes(search.toUpperCase())
                        || user.city.toUpperCase().includes(search.toUpperCase())
                        || user.lastloginfromip.toUpperCase().includes(search.toUpperCase())
                })

        }
        switch(action.type) {
            case USERSTABLE_LOAD_USERS:
                return {
                    ...state,
                    users: filteredUsers(action.payload),
                    isLoading: false
                }
            case USERTABLE_FILTER_USERS:
                return {
                    ...state,
                    search: action.payload
                }
            default: return state
        }

}

