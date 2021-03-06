import React, {Component} from 'react';
import {withRouter, Link} from 'react-router-dom';
import {deleteExpense} from "../utils/reqHandler";
import toastr from 'toastr';

class Expenses extends Component{
    constructor(props){
        super(props);

        this.onClickHandler = this.onClickHandler.bind(this);
    }

    async onClickHandler(id){
        let res = await deleteExpense(id);

        // if(!res.success){
        //     toastr.error('Delete failed');
        //     return;
        // }
        toastr.success('Expense deleted.');
        this.props.history.push(`/plan/${this.props.match.params.id}/${this.props.match.params.month}`)
    }


    render(){
        return(
            <tr>
                <td>{this.props.props.name}</td>
                <td>{this.props.props.category}</td>
                <td>{this.props.props.amount.toFixed(2)}</td>
                <td>{this.props.props.date}-11-2017</td>
                <td>
                    <Link to={'/'} onClick={()=>(this.onClickHandler(this.props.props.id))} className="btn btn-secondary">Delete</Link>
                </td>
            </tr>
        )
    }
}

export default withRouter(Expenses);