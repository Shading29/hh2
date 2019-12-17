import React from 'react';
import './App.css';
import "./css/style.css"
import { connect } from "react-redux"
import AuthContainer from "./components/Auth/AuthContainer";
import Nav from "./components/Nav/Nav"
import { Route } from "react-router-dom"
import Homepage from "./components/Homepage/Homepage";

const navs = {
    Home: "/",
    Registration: "/registration",
    Info: "/info"
}

class App extends React.Component{
    render() {
        return (
            <div className="container">
                <Nav navs={navs}/>
                <Route path="/" exact component={Homepage}/>
                <Route path="/registration" component={ !this.props.isLogged
                                                        ? AuthContainer
                                                        : null} />
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

