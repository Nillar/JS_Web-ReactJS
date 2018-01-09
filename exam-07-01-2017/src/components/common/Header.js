import React, {Component} from 'react';
import { withRouter, NavLink, Link} from 'react-router-dom';
import cartPic from '../../img/cart.png';

class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <header>
                <nav>
                    <div className="left-container">
                        <ul>
                            <li><NavLink to={'/catalog'}>Trains</NavLink></li>
                            {!this.props.loggedIn() && <li><NavLink to={'/'}>Login</NavLink></li>}
                            {!this.props.loggedIn() &&
                            <li><NavLink to={'/register'}>Register</NavLink></li>}
                            {this.props.loggedIn() &&
                            <li><NavLink to={'/profile'}>My Tickets</NavLink></li>}
                        </ul>
                    </div>
                    <div className="right-container">

                        {this.props.loggedIn() && <span>Welcome, {localStorage.getItem('username')} |</span>}
                        {this.props.loggedIn() &&
                        <a href="javascript:void(0)" onClick={this.props.onLogout}>Logout</a>}
                        {this.props.loggedIn() && <NavLink to={'/cart'}><img src={cartPic} className="cart"/></NavLink>}

                    </div>

                </nav>
            </header>
        )
    }
}

export default withRouter(Header)