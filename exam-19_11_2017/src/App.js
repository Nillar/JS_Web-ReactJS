import React, {Component} from 'react';
import {Switch, Route, withRouter} from 'react-router-dom'
import './App.css';
import PrivateRoute from './components/common/PrivateRoute';

import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import YearPlan from "./components/YearPlan";
import MonthlyPlan from "./components/MonthlyPlan";
import AddExpense from "./components/AddExpense";

class App extends Component {
    constructor(props) {
        super(props);

        this.onLogout = this.onLogout.bind(this);
        this.loggedIn = this.loggedIn.bind(this);
    }

    // componentDidMount() {
    //     console.log(this.loggedIn());
    // }

    onLogout() {
        localStorage.clear();
        this.props.history.push('/');
    }

    loggedIn() {
        if (localStorage.length === 0) {
            return false;
        }
        return true;
    }

    render() {
        return (
           <div className="App">
                <Header loggedIn={this.loggedIn} onLogout={this.onLogout}/>
                <Switch>
                    <Route exact path="/" component={Login}/>
                    <Route path="/register" component={Register}/>
                    <PrivateRoute path="/plan/:id/:month/expense" component={AddExpense}/>
                    <PrivateRoute path="/plan/:id/:month" component={MonthlyPlan}/>
                    <PrivateRoute path="/plan/:id" component={YearPlan}/>
                </Switch>
               <Footer />
            </div>
        );
    }
}

export default withRouter(App);
