import React from "react"
import { connect } from "react-redux"
import UsersTable from "./UsersTable";
import { loadUsers } from "../../store/UsersTable/actions";


class UsersTableContainer extends React.Component {

    async componentDidMount() {
        const response = await fetch("http://www.filltext.com/?rows=500&id={index}&name={firstName}&surname={lastName}&city={city}&fullname={firstName}~{lastName}&lastloginfromip={ip}")
        const data = await response.json()
        this.props.loadUsers(data)
    }

    render() {
        const { users, loadUsers } = this.props
        return (
            <React.Fragment>
                <UsersTable
                    users={users}
                    loadUsers={loadUsers}
                />
            </React.Fragment>
        )
    }
}

const setStateToProps = state => {
    return {
        users: state.userstable.users
    }
}

const setDispatchToProps = {
    loadUsers
}

export default connect(setStateToProps, setDispatchToProps)(UsersTableContainer)