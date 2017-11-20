import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {addExpense} from "./utils/reqHandler";
import toastr from 'toastr';

class AddExpense extends Component{
    constructor(props){
        super(props);

        this.state = {
            paymentDate: '',
            name: '',
            category: 'Fixed',
            cost: ''
        };

        this.onSubmitHandler =this.onSubmitHandler.bind(this);
        this.onChangeHandler =this.onChangeHandler.bind(this);

    }

    componentDidMount(){

    }
    onChangeHandler(e){
        this.setState({[e.target.name]:e.target.value});
    }

    async onSubmitHandler(e){
        e.preventDefault();
        const res = await addExpense(this.state.name, this.state.category, this.state.cost, this.state.paymentDate, Number(this.props.match.params.id), Number(this.props.match.params.month));

        if(!res.success){
            toastr.error('Invalid input');
            return;
        }

        toastr.success('Successfully added expense');
        this.props.history.push(`/plan/${this.props.match.params.id}/${this.props.match.params.month}`);
    }

    render(){
        return(
            <main>
                <div className="container">
                    <div className="row space-top">
                        <div className="col-md-12">
                            <h1>Add Expenses</h1>
                            <h3>November 2017</h3>
                        </div>
                    </div>
                    <div className="row space-top">
                        <div className="col-md-10">
                            <form onSubmit={this.onSubmitHandler}>
                                <legend>Add a new expense</legend>
                                <div className="form-group">
                                    <label className="col-md-2" htmlFor="name">Name:</label>
                                    <input onChange={this.onChangeHandler} className="col-md-2" name="name" type="text" />
                                </div>
                                <div className="form-group">
                                    <label className="col-md-2" htmlFor="category">Category:</label>
                                    <select onChange={this.onChangeHandler} className="col-md-2 pl-2" name="category">
                                        <option>Non-essential</option>
                                        <option>Fixed</option>
                                        <option>Variable</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label className="col-md-2" htmlFor="cost">Cost:</label>
                                    <input onChange={this.onChangeHandler} className="col-md-2" name="cost" type="number" />
                                </div>
                                <div className="form-group">
                                    <label className="col-md-2" htmlFor="paymentDate">Payment Date:</label>
                                    <input onChange={this.onChangeHandler} className="col-md-2" name="paymentDate" type="text" />
                                </div>
                                <input type="submit" className="btn btn-secondary" defaultValue="Add" />
                            </form>
                        </div>
                    </div>
                </div>
            </main>
        )
    }
}

export default withRouter(AddExpense);