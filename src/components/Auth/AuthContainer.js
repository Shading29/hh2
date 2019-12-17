import React from "react"
import Auth from "./Auth"
import { connect } from "react-redux"
import {setLoginInput, setPasswordInput, registerUser, authUser} from "../../store/Auth/actions";


class AuthContainer extends React.Component {


    render() {
        return (
            <React.Fragment>
                <Auth
                    setLoginInput={this.props.setLoginInput}
                    setPasswordInput={this.props.setPasswordInput}
                    registerUser={this.props.authUser}
                    authUser={this.props.authUser}
                    login={this.props.login}
                    password={this.props.password}
                />
            </React.Fragment>
        )
    }
}

const setStateToProps = state => {
    return {
        login: state.auth.login,
        password: state.auth.password,
    }
}

const setDispatchToProps = {
    setLoginInput,
    setPasswordInput,
    registerUser,
    authUser
}

export default connect(setStateToProps, setDispatchToProps)(AuthContainer)