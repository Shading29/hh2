export const USERSTABLE_LOAD_USERS = 'USERSTABLE_LOAD_USERS'
export const USERTABLE_FILTER_USERS = 'USERTABLE_FILTER_USERS'
export const USERTABLE_CHANGE_SORTCOLUMN = 'USERTABLE_CHANGE_SORTCOLUMN'
export const USERTABLE_CHANGE_CURRENTPAGE = 'USERTABLE_CHANGE_CURRENTPAGE'





export const loadUsers = payload => ({
    type: USERSTABLE_LOAD_USERS,
    payload: payload
})

export const filterUsers = search => ({
    type: USERTABLE_FILTER_USERS,
    payload: search,
})

export const changeSortColumn = sortcolumn => ({
    type: USERTABLE_CHANGE_SORTCOLUMN,
    payload: sortcolumn,
})

export const changeCurrentPage = currentpage => ({
    type: USERTABLE_CHANGE_CURRENTPAGE,
    payload: currentpage,
})







