import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
import reqHandler from './../utils/reqHandler';

class Register extends Component {
    constructor(props){
        super();

        this.state = {
            name: '',
            email: '',
            password:''
        };

        this.onSubmitHandler = this.onSubmitHandler.bind(this);
        this.onChangeHandler = this.onChangeHandler.bind(this);
    }

    onChangeHandler(e){
        this.setState({[e.target.name]: e.target.value});

    }

    async onSubmitHandler(e){
        e.preventDefault();
        console.log(this.state);
        const res = await reqHandler.register(this.state);
        this.props.history.push('/login');
    }




    render(){
        return(
           <form onSubmit={this.onSubmitHandler}>
                <input
                    label="Name"
                    name="name"
                    value={this.state.name}
                    onChange={this.onChangeHandler}
                />
               <input
                   label="Email"
                   name="email"
                   value={this.state.email}
                   onChange={this.onChangeHandler}
               />
               <input
                   label="Password"
                   type="password"
                   name="password"
                   value={this.state.password}
                   onChange={this.onChangeHandler}
               />
               <input className="submit-btn" type="submit" value="Register"/>
           </form>
        )
    }
}

export default withRouter(Register);