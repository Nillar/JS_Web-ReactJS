import React, {Component} from 'react';
import {withRouter, Link} from 'react-router-dom';

class Expenses extends Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){

    }


    render(){
        return(
            <tr>
                <td>Snacks</td>
                <td>Non-essential</td>
                <td>15.00</td>
                <td>30-11-2017</td>
                <td>
                    <a href="#" className="btn btn-secondary">Delete</a>
                </td>
            </tr>
        )
    }
}

export default withRouter(Expenses);