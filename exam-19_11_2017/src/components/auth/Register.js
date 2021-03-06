import React, {Component} from 'react'
import {withRouter} from "react-router-dom";
import {register} from "../utils/reqHandler";
import toastr from 'toastr'

class Register extends Component{
    constructor(props){
        super(props);

        this.state={
            name: '',
            email: '',
            password: '',
            repeatPass: ''
        };

        this.onChangeHandler=this.onChangeHandler.bind(this);
        this.onSubmitHandler=this.onSubmitHandler.bind(this);

    }

    onChangeHandler(e){
        console.log(this.state);
        this.setState({[e.target.name]:e.target.value})
    }

    async onSubmitHandler(e){
        e.preventDefault();

        if(this.state.password !== this.state.repeatPass){
            toastr.error('Passwords do not match');
            return;
        }
        if(this.state.name === '' || this.state.email === '' || this.state.password === '' || this.state.repeatPass === ''){
            toastr.error('All fields must be filled');
            return;
        }

        const res = await register(this.state.name, this.state.email, this.state.password);

        if(!res.success){
            toastr.error('Invalid Credentials');
            return;
        }

        toastr.success('Register successful');
        this.props.history.push('/');
    }

    render(){
        return(
            <main>
                <div className="container">
                    <div className="row space-top">
                        <div className="col-md-12">
                            <h1>Register</h1>
                            <p>Please fill all fields.</p>
                        </div>
                    </div>
                    <form onSubmit={this.onSubmitHandler}>
                        <div className="row">
                            <div className="col-md-3">
                                <div className="form-group">
                                    <label className="form-control-label " htmlFor="new-username">Username</label>
                                    <input onChange={(e)=>(this.onChangeHandler(e))} className="form-control" id="new-username" name="name" type="text" />
                                </div>
                                <div className="form-group has-success">
                                    <label className="form-control-label" htmlFor="new-email">E-mail</label>
                                    <input onChange={this.onChangeHandler} className="form-control is-valid" id="new-email" name="email" type="text" />
                                    {/*<div className="form-control-feedback">This input value is valid</div>*/}
                                </div>
                                <div className="form-group has-danger">
                                    <label className="form-control-label" htmlFor="new-password">Password</label>
                                    <input onChange={this.onChangeHandler} className="form-control is-invalid" id="new-password" name="password" type="password" />
                                    {/*<div className="form-control-feedback">This input value is invalid</div>*/}
                                </div>
                                <div className="form-group has-danger">
                                    <label className="form-control-label" htmlFor="new-repeat-password">Repeat password</label>
                                    <input onChange={this.onChangeHandler} className="form-control is-invalid" id="new-repeat-password" name="repeatPass" type="password" />
                                    {/*<div className="form-control-feedback">This input value is invalid</div>*/}
                                </div>
                                <input type="submit" className="btn btn-secondary" defaultValue="Register" />
                            </div>
                        </div>
                    </form>
                </div>
            </main>

        )
    }
}

export default withRouter(Register)