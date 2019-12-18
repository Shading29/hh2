export const USERSTABLE_LOAD_USERS = 'USERSTABLE_LOAD_USERS'
export const USERTABLE_FILTER_USERS = 'USERTABLE_FILTER_USERS'



export const loadUsers = payload => ({
    type: USERSTABLE_LOAD_USERS,
    payload: payload
})

export const filterUsers = search => ({
    type: USERTABLE_FILTER_USERS,
    payload: search
})







