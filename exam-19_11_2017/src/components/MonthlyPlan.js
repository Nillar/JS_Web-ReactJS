import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom'
import {addBudget, getMonthlyBalance} from "./utils/reqHandler";
import Expenses from "./partials/Expenses";
import toastr from 'toastr'

class MonthlyPlan extends Component {
    constructor(props) {
        super(props);

        this.state = {
            month: '',
            expenses: [],
            budget: '',
            income: ''
        };

        this.getData = this.getData.bind(this);
        this.getMonth = this.getMonth.bind(this);
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
    }

    onChangeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value});
    };

    async onSubmitHandler(e) {
        e.preventDefault();

        console.log('budget ' + this.state.budget);
        console.log('income ' + this.state.income);

        const res = await addBudget(this.state.income, this.state.budget, this.props.match.params.id, this.props.match.params.month );
        this.getData();
        // window.location.reload();
        toastr.success('Budget and Income updated');
    }

    getMonth(id) {
        switch (id) {
            case 1:
                return 'January';
            case 2:
                return 'February';
            case 3:
                return 'March';
            case 4:
                return 'April';
            case 5:
                return 'May';
            case 6:
                return 'June';
            case 7:
                return 'July';
            case 8:
                return 'August';
            case 9:
                return 'September';
            case 10:
                return 'October';
            case 11:
                return 'November';
            case 12:
                return 'December';
        }
    }

    async getData() {
        const res = await getMonthlyBalance((this.props.match.params.id + '/' + this.props.match.params.month).toString());

        // console.log(res);
        this.setState({month: res});
        let expensesArray = [];

        [...this.state.month].map(e => {
            expensesArray.push(e.expenses);
        });
        this.setState({
            budget: this.state.month.budget,
            income: this.state.month.income
        });
        this.setState({expenses: expensesArray});

        console.log(this.state.expenses);

    }

    componentDidMount() {
        this.getData();
    }


    render() {
        return (
            <main>
                <div className="container">
                    <div className="row space-top">
                        <div className="col-md-12">
                            <h1>Welcome to Budget Planner</h1>
                        </div>
                    </div>
                    <div className="row space-top ">
                        <div className="col-md-12 ">
                            <div className="card bg-secondary">
                                <div className="card-body">
                                    <blockquote className="card-blockquote">
                                        <h2 id="month">{this.getMonth(Number(this.props.match.params.month))} {this.props.match.params.id}</h2>
                                        <div className="row">
                                            <div className="col-md-3 space-top">
                                                <h4>Planner</h4>
                                                <form onSubmit={this.onSubmitHandler}>
                                                    <div className="form-group">
                                                        <label className="form-control-label"
                                                               htmlFor="income">Income:</label>
                                                        <input onChange={this.onChangeHandler} className="form-control"
                                                               name="income" type="number" value={this.state.income}/>
                                                    </div>
                                                    <div className="form-group">
                                                        <label className="form-control-label"
                                                               htmlFor="budget">Budget:</label>
                                                        <input onChange={this.onChangeHandler} className="form-control"
                                                               name="budget" type="number" value={this.state.budget}/>
                                                    </div>
                                                    <input type="submit" className="btn btn-secondary"
                                                           defaultValue="Save"/>
                                                </form>
                                            </div>
                                            <div className="col-md-8 space-top">
                                                <div className="row">
                                                    <h4 className="col-md-9">Expenses</h4>
                                                    <Link to={'/plan/' + this.props.match.params.id + '/' + this.props.match.params.month + '/expense'} className="btn btn-secondary ml-2 mb-2">Add
                                                        expenses</Link>
                                                </div>
                                                <table className="table">
                                                    <thead>
                                                    <tr>
                                                        <th>Name</th>
                                                        <th>Category</th>
                                                        <th>Cost</th>
                                                        <th>Payment Date</th>
                                                        <th/>
                                                    </tr>
                                                    </thead>
                                                    <tbody>
                                                    {this.state.expenses.length === 0 ? <tr><td>No expenses this month</td></tr> :
                                                    <Expenses props={this.state.expenses}/>}

                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </blockquote>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

        )
    }


}

export default withRouter(MonthlyPlan)