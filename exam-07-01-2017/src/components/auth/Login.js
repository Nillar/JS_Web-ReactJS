import React,{Component} from 'react';
import {withRouter, Link} from 'react-router-dom';
import {login} from '../utils/reqHandler';
import toastr from 'toastr';

class Login extends Component{
    constructor(props){
        super(props);

        this.state={
            email: '',
            password: ''
        };

        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
    }

    onChangeHandler(e){
        this.setState({[e.target.name]: e.target.value});
    }

    async onSubmitHandler(e){
        e.preventDefault();


        if(this.state.email === '' || this.state.password === ''){
            toastr.error('All fields must be filled');
            return;
        }

        const res = await login(this.state.email, this.state.password);

        if(res.success === false){
            toastr.error('Invalid Credentials', 'Error');
            return;
        }

        localStorage.setItem('token', res.token);
        localStorage.setItem('username', res.user.name);
        toastr.success('Login Successful');
        this.props.history.push(`/catalog`);
    }

    render(){
        return(
            <main>
                <h2>Log In:</h2>
                <form onSubmit={this.onSubmitHandler} className="register-form">
                    <label>Email:</label>
                    <input onChange={this.onChangeHandler} name="email" type="email" placeholder="Enter your Email" />
                    <label>Password:</label>
                    <input onChange={this.onChangeHandler} name="password" type="password" placeholder="Enter your Password" />
                    <input type="submit" className="login" defaultValue="Login" />
                </form>
                <footer>SoftUni RailWays</footer>
            </main>

        )
    }
}

export default withRouter(Login)
