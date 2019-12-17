import React from 'react';
import './App.css';
import "./css/style.css"
import { connect } from "react-redux"
import AuthContainer from "./components/Auth/AuthContainer";





class App extends React.Component{
    render() {
        return (
            <div className="container">
                {!this.props.isLogged
                    ? <AuthContainer/>
                    : null
                }
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        isLogged: state.auth.isLogged
    }
}


export default connect(mapStateToProps)(App);

