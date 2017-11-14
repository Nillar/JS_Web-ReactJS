import React, {Component} from 'react';
import {BrowserRouter} from 'react-router-dom'
import './App.css';
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import GuestHome from './components/auth/GuestHome';
import notification from './components/utils/notificationHandler';

import ViewComponentWrapper from './components/common/ViewComponentWrapper'

class App extends Component {
    constructor() {
        super();

        this.state = {
            token: ''
        }
    }

    componentDidMount() {
        if(localStorage.getItem('token')){
            this.setState({token: localStorage.getItem('token')})
        }
    }

    render() {
        return (
            <BrowserRouter>
                <div id="container">
                    <Header/>
                    {this.state.token ===''? <GuestHome/> : <ViewComponentWrapper/>}
                    <Footer/>
                    <div id="notifications">
                        <div id="loadingBox" className="notification"/>
                        <div id="infoBox" className="notification"/>
                        <div id="errorBox" className="notification"/>
                    </div>
                </div>


            </BrowserRouter>
        );
    }
}

export default App;
