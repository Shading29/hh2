import {
    USERSTABLE_LOAD_USERS, USERTABLE_CHANGE_SORTCOLUMN, USERTABLE_CHANGE_SORTWAY,
    USERTABLE_FILTER_USERS
} from "./actions";

const defaultState = {
    users: [],
    isLoading: true,
    search: '',
    sortway: 'asc',
    sortcolumn: "name"
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
/*            case USERTABLE_CHANGE_SORTWAY:
                return {
                    ...state,
                    sortway: state.sortway === "asc" ? "desc" : "asc"
                }*/
            case USERTABLE_CHANGE_SORTCOLUMN:
                return {
                    ...state,
                    sortcolumn: action.payload,
                    sortway: state.sortway === "asc" ? "desc" : "asc"
                }
            default: return state
        }

}

