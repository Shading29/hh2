import React from "react"
import { connect } from "react-redux"
import UsersTable from "./UsersTable";
import { loadUsers, filterUsers } from "../../store/UsersTable/actions";
import {Loader} from "./loader/Loader";


class UsersTableContainer extends React.Component {

    async componentDidMount() {
        const response = await fetch("http://www.filltext.com/?rows=500&id={index}&name={firstName}&surname={lastName}&city={city}&fullname={firstName}~{lastName}&lastloginfromip={ip}")
        const data = await response.json()
        this.props.loadUsers(data)
    }

    render() {
        const { users, filterUsers } = this.props
        return (
            <React.Fragment>
                { this.props.isLoading
                ? <Loader/>
                : <UsersTable
                        users={users}
                        filterUsers={filterUsers}
                    /> }
            </React.Fragment>
        )
    }
}

const setStateToProps = state => {
    return {
        users: state.userstable.users,
        isLoading: state.userstable.isLoading
    }
}

const setDispatchToProps = {
    loadUsers,
    filterUsers
}

export default connect(setStateToProps, setDispatchToProps)(UsersTableContainer)