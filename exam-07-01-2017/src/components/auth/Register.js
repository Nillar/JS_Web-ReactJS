import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import toastr from 'toastr';
import {register} from "../utils/reqHandler";

class Register extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            password: '',
            repeatPass: ''
        };

        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
    }

    onChangeHandler(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    async onSubmitHandler(e) {
        e.preventDefault();

        if (this.state.password !== this.state.repeatPass) {
            toastr.error('Passwords do not match');
            return;
        }
        if (this.state.name === '' || this.state.email === '' || this.state.password === '' || this.state.repeatPass === '') {
            toastr.error('All fields must be filled');
            return;
        }

        const res = await register(this.state.name, this.state.email, this.state.password);

        if (res.success === false) {
            toastr.error('Email already exists');
            return;
        }

        toastr.success('Register Successful');
        this.props.history.push('/');
    }

    render() {
        return (
            <main>
                <h2>Create your account:</h2>
                <form className="register-form" onSubmit={this.onSubmitHandler}>
                    <label>Name:</label>
                    <input type="text" placeholder="Name" name="name" onChange={this.onChangeHandler}/>
                    <label>Email:</label>
                    <input type="email" placeholder="Email" name="email" onChange={this.onChangeHandler} />
                    <label>Password:</label>
                    <input type="password" placeholder="Password" name="password" onChange={this.onChangeHandler} />
                    <label>Repeat Password:</label>
                    <input type="password" placeholder="Repeat Password" name="repeatPass" onChange={this.onChangeHandler} />
                    <input type="submit" className="register" defaultValue="Register" />
                </form>
            </main>
        )
    }

}

export default withRouter(Register)