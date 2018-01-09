import React, {Component} from 'react';
import {Switch, Route, withRouter, NavLink} from 'react-router-dom'
import './index.css';
// import './bootstrap.min.css';
import './App.css';
import PrivateRoute from './components/utils/PrivateRoute';
import Header from "./components/common/Header";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";

import Catalog from "./components/main/Catalog";
import MyTickets from "./components/main/MyTickets";
import Details from "./components/main/Details";
import Cart from "./components/main/Cart";
// import Profile from "./components/main/Profile";



class App extends Component {
    constructor() {
        super();

        this.isLoggedIn = this.isLoggedIn.bind(this);
        this.onLogout = this.onLogout.bind(this);
    }

    isLoggedIn(){
        return localStorage.length !== 0;

    }

    onLogout(){
        localStorage.clear();
        this.props.history.push('/');
    }

    render() {
        return (
            <div className="App">
                <Header loggedIn={this.isLoggedIn} onLogout={this.onLogout}/>
                <Switch>
                    <Route exact path='/' component={Login}/>
                    <Route path='/register' component={Register}/>
                    <Route path='/catalog' component={Catalog}/>

                    <PrivateRoute path='/profile' component={MyTickets}/>
                    <PrivateRoute path='/trips/:id' component={Details}/>
                    <PrivateRoute path='/cart' component={Cart}/>
                    {/*<PrivateRoute path='/profile' component={Profile}/>*/}

                </Switch>
            </div>
        );
    }
}

export default withRouter(App);
