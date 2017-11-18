import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
import reqHandler from './../utils/reqHandler';

class Login extends Component {
    constructor(props){
        super();

        this.state={
            email:'',
            password: ''
        };

        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
    }

    onChangeHandler(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    async onSubmitHandler(e) {
        e.preventDefault();
        const res = await reqHandler.login(this.state);
        if (!res.success) {
            this.setState({error: res});
            return;
        }
        localStorage.setItem('authToken', res.token);
        this.props.history.push('/');
    }


    render(){
        return(
            <form onSubmit={this.onSubmitHandler}>
                <input
                    label="Email"
                    name="email"
                    value={this.state.name}
                    onChange={this.onChangeHandler}
                />
                <input
                    label="Password"
                    type="password"
                    name="password"
                    value={this.state.password}
                    onChange={this.onChangeHandler}
                />
                <input className="submit-btn" type="submit" value="Login"/>
            </form>
        )
    }
}

export default withRouter(Login);