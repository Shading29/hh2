import React from "react"
import Auth from "./Auth"
import { connect } from "react-redux"
import {setLoginInput, setPasswordInput, registerUser, authUser} from "../../store/Auth/actions";


class AuthContainer extends React.Component {


    render() {

        const {setLoginInput,
                setPasswordInput,
                authUser,
                authUser2,
                registerUser,
                login,
                password} = this.props

        return (
            <React.Fragment>
                <Auth
                    setLoginInput={setLoginInput}
                    setPasswordInput={setPasswordInput}
                    registerUser={registerUser}
                    authUser={authUser}
                    login={login}
                    password={password}
                    authUser2={authUser2}
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
    authUser,
}

export default connect(setStateToProps, setDispatchToProps)(AuthContainer)