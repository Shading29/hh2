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
        switch(action.type) {
            case USERSTABLE_LOAD_USERS:
                return {
                    ...state,
                    users: !search
                        ? action.payload
                        : action.payload.filter(user => {
                            return user.name.toUpperCase().includes(search.toUpperCase())
                                || user.surname.toUpperCase().includes(search.toUpperCase())
                                || user.city.toUpperCase().includes(search.toUpperCase())
                                || user.lastloginfromip.toUpperCase().includes(search.toUpperCase())
                        }),
                    isLoading: false
                }
            case USERTABLE_FILTER_USERS:
                return {
                    ...state,
                    search: action.payload
                }
        }
    return state
}

const filteredData = (data) => {

}