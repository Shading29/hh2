import React from 'react';
import './App.css';
import "./css/style.css"
import { connect } from "react-redux"
import Nav from "./components/Nav/Nav"
import { Route } from "react-router-dom"
import Homepage from "./components/Homepage/Homepage";
import UsersTableContainer from "./components/UsersTable/UsersTableContainer";
import ReduxAuthForm from "./components/Auth/ReduxAuthForm";

const navs = {
    Home: "/",
    Registration: "/registration",
    Users: "/users"
}



class App extends React.Component{

    render() {
        return (
            <div className="container">
                <Nav navs={navs}/>
                <Route path="/" exact component={Homepage}/>
                <Route path="/registration" component={ !this.props.isLogged
                                                        ? ReduxAuthForm
                                                        : null} />
                <Route path="/users"  component={ UsersTableContainer } />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        isLogged: state.auth.isLogged,
    }
}
const mapDispatchToProps = {

}


export default connect(mapStateToProps, mapDispatchToProps)(App);



