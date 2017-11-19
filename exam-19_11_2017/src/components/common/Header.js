import React, {Component} from 'react';
import {withRouter, Link} from "react-router-dom";

class Header extends Component {
    constructor(props) {
        super(props);

        this.getDate = this.getDate.bind(this);
    }

    componentDidMount() {
        this.getDate()
    }

    getDate() {
        let date = new Date();
        let year = date.getYear();
        let month = date.getMonth();
        const uri = `20${year - 100}/${month + 1}`;
        console.log(typeof(uri));
        return uri;


    }


    render() {
        return (
            <header>
                <nav className="navbar navbar-dark bg-secondary">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                {this.props.loggedIn() &&
                                <Link className="nav-link" to={`/plan/${this.getDate()}`}>Monthly Balance</Link>}
                                {this.props.loggedIn() &&
                                <Link className="nav-link" to="/plan/2017">Yearly Balance</Link>}
                                {this.props.loggedIn() &&
                                <a href="javascript:void(0)" onClick={this.props.onLogout}>Logout</a>}

                                {!this.props.loggedIn() &&
                                <Link className="nav-link" to="/">Login</Link>}
                                {!this.props.loggedIn() &&
                                <Link className="nav-link active" to="/register">Register</Link>}
                            </div>
                        </div>
                    </div>
                </nav>
            </header>

        )
    }
}

export default withRouter(Header)