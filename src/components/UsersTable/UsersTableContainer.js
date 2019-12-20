import React from "react"
import { connect } from "react-redux"
import UsersTable from "./UsersTable";
import {    loadUsers,
            filterUsers,
            changeSortColumn,
            changeCurrentPage
            } from "../../store/UsersTable/actions";
import {Loader} from "./loader/Loader";
import _ from "lodash"
import ReactPaginate from 'react-paginate'


class UsersTableContainer extends React.Component {

    async componentDidMount() {
        const response = await fetch("http://www.filltext.com/?rows=500&id={index}&name={firstName}&surname={lastName}&city={city}&fullname={firstName}~{lastName}&lastloginfromip={ip}")
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

    handlePageClick = page => {
        // this.props.changeCurrentPage(page)
        this.props.changeCurrentPage(page.selected)
    }



    render() {
        const { filterUsers,
                searchValue,
                changeSortColumn,
                sortcolumn,
                sortway,
                countUsersPerPage,
                currentpage } = this.props

        const displayUsers = _.orderBy(this.filteredUsers(), sortcolumn, sortway )


        const chunkedUsers = _.chunk(displayUsers, countUsersPerPage)[currentpage]

        return (
            <React.Fragment>
                { this.props.isLoading
                ? <Loader/>
                : <UsersTable
                        users={chunkedUsers}
                        filterUsers={filterUsers}
                        searchValue={searchValue}
                        // changeSortWay={changeSortWay}
                        changeSortColumn={changeSortColumn}
                    /> }
                {   displayUsers.length > countUsersPerPage
                    ?   <ReactPaginate
                        previousLabel={'Назад'}
                        nextLabel={'Вперед'}
                        breakLabel={'...'}
                        breakClassName={'break-me'}
                        pageCount={Math.ceil(displayUsers.length / countUsersPerPage)}
                        marginPagesDisplayed={999}
                        pageRangeDisplayed={999}
                        onPageChange={this.handlePageClick}
                        containerClassName={'pagination'}
                        pageLinkClassName={'page-link'}
                        pageClassName={'page-item'}
                        activeClassName={'active'}
                        previousClassName={'page-item'}
                        nextClassName={'page-item'}
                        nextLinkClassName={'page-link'}
                        previousLinkClassName={'page-link'}
                        disabledClassName={'disabled'}
                        // subContainerClassName={'pages pagination'}
                        // activeClassName={'active'}
                    />
                    : null
                }
            </React.Fragment>
        )
    }
}

const setStateToProps = state => {
    return {
        users: state.userstable.users,
        isLoading: state.userstable.isLoading,
        search: state.userstable.search,
        /*Сортировка*/
        sortway: state.userstable.sortway,
        sortcolumn: state.userstable.sortcolumn,
        /*Пагинация*/
        countUsersPerPage: state.userstable.countUsersPerPage,
        currentpage: state.userstable.currentpage
    }
}

const setDispatchToProps = {
    loadUsers,
    filterUsers,
    changeSortColumn,
    changeCurrentPage,
    // changeSortWay,
}

export default connect(setStateToProps, setDispatchToProps)(UsersTableContainer)