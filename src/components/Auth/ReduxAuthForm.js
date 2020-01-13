import React from "react"
import ReduxAuth from "./ReduxAuth";
import {connect} from "react-redux";
import {authUser} from "../../store/Auth/actions";

class ReduxAuthForm extends React.Component {


    onAuthUser = (values) => {
        const {login, password} = values
        this.props.authUser(login, password)
    }

    render() {
        return (
            <React.Fragment>
               <ReduxAuth onSubmit={this.onAuthUser} />
            </React.Fragment>
        )
    }
}


const setStateToProps = state => {
    return {

    }
}

const setDispatchToProps = {
    authUser,
}

export default connect(setStateToProps, setDispatchToProps)(ReduxAuthForm)






