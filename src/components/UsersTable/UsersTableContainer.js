import React from "react"
import { connect } from "react-redux"
import UsersTable from "./UsersTable";
import { loadUsers, filterUsers, changeSortColumn } from "../../store/UsersTable/actions";
import {Loader} from "./loader/Loader";
import _ from "lodash"


class UsersTableContainer extends React.Component {

    async componentDidMount() {
        const response = await fetch("http://www.filltext.com/?rows=50&id={index}&name={firstName}&surname={lastName}&city={city}&fullname={firstName}~{lastName}&lastloginfromip={ip}")
        const data = await response.json()
        this.props.loadUsers(data)
    }


    filteredUsers = () => {
        const {users, search} = this.props
        if(!search) {
            return users
        } else {
            return users.filter(user => {
                const fullname = `${user.name} ${user.surname}`
                return fullname.toUpperCase().includes(search.toUpperCase())
/*                  user.name.toUpperCase().includes(search.toUpperCase())
                    || user.surname.toUpperCase().includes(search.toUpperCase())
                    || user.city.toUpperCase().includes(search.toUpperCase())
                    || user.lastloginfromip.toUpperCase().includes(search.toUpperCase())*/
            })
        }
    }



    render() {
        const {filterUsers, searchValue, changeSortColumn, sortcolumn, sortway } = this.props

        const displayUsers = _.orderBy(this.filteredUsers(), sortcolumn, sortway )
        return (
            <React.Fragment>
                { this.props.isLoading
                ? <Loader/>
                : <UsersTable
                        users={displayUsers}
                        filterUsers={filterUsers}
                        searchValue={searchValue}
                        // changeSortWay={changeSortWay}
                        changeSortColumn={changeSortColumn}
                    /> }
            </React.Fragment>
        )
    }
}

const setStateToProps = state => {
    return {
        users: state.userstable.users,
        isLoading: state.userstable.isLoading,
        search: state.userstable.search,
        sortway: state.userstable.sortway,
        sortcolumn: state.userstable.sortcolumn,
    }
}

const setDispatchToProps = {
    loadUsers,
    filterUsers,
    changeSortColumn,
    // changeSortWay,
}

export default connect(setStateToProps, setDispatchToProps)(UsersTableContainer)