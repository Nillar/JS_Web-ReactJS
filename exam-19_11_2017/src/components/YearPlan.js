import React, {Component} from 'react';
import {withRouter, Link} from 'react-router-dom';
import {getYearBalance} from "./utils/reqHandler";
import toastr from 'toastr';

import BalanceSheet from './partials/BalanceSheet';

class YearPlan extends Component {
    constructor(props) {
        super(props);

        this.state = {
            months: []
        }
    }

    componentDidMount() {
        this.getData()
    }

    async getData() {
        const res = await getYearBalance(this.props.match.params.id);
        let arrResult = [];

        for (let elem in res) {
            arrResult.push(res[elem]);
        }

        this.setState({months: arrResult});
        // toastr.success('Yearly Balance loaded');

    }

    render() {
        return (
            <div className="container">
                <div className="row space-top">
                    <div className="col-md-12">
                        <h1>Yearly Balance</h1>
                    </div>
                </div>
                <div className="row space-top col-md-12">
                    {
                        [...this.state.months].map((month, index) => {

                            return <BalanceSheet
                                key={index}
                                id={index + 1}
                                props={month}
                                currentMonth={month.id}
                            />
                        })}
                </div>
            </div>

        )
    }

}

export default withRouter(YearPlan);