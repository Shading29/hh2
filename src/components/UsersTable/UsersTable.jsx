import React from "react"
import "./userstable.css"

export default class UsersTable extends React.Component {

    render() {

        const { users, filterUsers, searchValue } = this.props

        return (
            <React.Fragment>
                <input
                    onChange={event => filterUsers(event.target.value)}
                    value={searchValue}
                />
                    <table>
                        <thead>
                            <tr>
                                <th>Имя</th>
                                <th>Фамилия</th>
                                <th>Город</th>
                                <th>IP</th>
                            </tr>
                        </thead>
                        {users.map(user => {
                            return (
                                <tbody key={user.id}>
                                <tr>
                                    <td> {user.name}</td>
                                    <td> {user.surname}</td>
                                    <td> {user.city}</td>
                                    <td> {user.lastloginfromip}</td>
                                </tr>
                                </tbody>

                            )
                        })}
                    </table>
            </React.Fragment>
        )
    }
}