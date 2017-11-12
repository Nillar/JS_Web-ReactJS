import React, {Component} from 'react';
import reqHandler from '../utils/reqHandler';
import dataCollector from './../utils/dataCollector';


class LoginForm extends Component {
    constructor() {
        super();

        this.state = {
            loading: false
        };

        this.dataCollector = (e) => {
            this.setState(dataCollector(e));
        };

        this.login = (e) => {
            e.preventDefault();
            this.setState({loading: true, success: false});
            reqHandler.login(this.state)
                .then(res => {
                    localStorage.setItem('token', res._kmd.authtoken);
                    localStorage.setItem('username', res.username);
                    this.setState({loading: false, success: true});
                    window.location.replace('/catalog')
                }).catch((e) =>{
                console.log(e)
            })
        }
    }

    render() {
        return (
            <form id="loginForm" onSubmit={(e) => this.login(e)}>
                <h2>Sign In</h2>
                <label>Username:</label>
                <input onChange={(e) => {
                    this.dataCollector(e)
                }} name="username" type="text"/>
                <label>Password:</label>
                <input onChange={(e) => {
                    this.dataCollector(e)
                }} name="password" type="password"/>
                <input id="btnLogin" value="Sign In" type="submit"/>
            </form>
        )
    }
}

export default LoginForm;