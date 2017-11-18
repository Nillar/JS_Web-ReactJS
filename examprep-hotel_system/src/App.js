import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import Header from './components/common/Header';
import RegisterPage from './components/auth/Register';
import LoginPage from './components/auth/Login';
import HotelList from './components/appElements/HotelsList';
import CreateHotel from './components/appElements/CreateHotel';
import Details from './components/appElements/Details';

class App extends Component {
    constructor(props) {
        super(props);

        this.onLogout = this.onLogout.bind(this);
    }

    onLogout() {
        localStorage.clear();
        this.props.history.push('/');
    }

    render() {
        return (
            <div className="App">
                <Header loggedIn={localStorage.getItem('authToken') != null} onLogout={this.onLogout} />
                <Switch>
                    <Route exact path="/" component={HotelList} />
                    <Route path="/login" component={LoginPage} />
                    <Route path="/register" component={RegisterPage} />
                    <Route path="/create" component={CreateHotel}/>
                    <Route path="/hotels/details/:id" component={Details}/>
                </Switch>
            </div>
        );
    }
}

export default withRouter(App);