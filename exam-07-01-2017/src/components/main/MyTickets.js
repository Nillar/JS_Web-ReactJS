import React, {Component} from 'react';
import {withRouter, Link} from 'react-router-dom';
import BoughtTicketsCard from "../partialElements/BoughtTicketsCard";
import trainImage from '../../img/train-station.jpg'
import {myTicketsHistory} from '../utils/reqHandler';
import toastr from 'toastr';

class MyTickets extends Component {
    constructor(props){
        super(props);

        this.state={
            myTickets: []
        }

        this.getData=this.getData.bind(this);
    }

    componentDidMount(){
        this.getData();
    }

    async getData(){
        const res = await myTicketsHistory();
        
        this.setState({myTickets: res})

    }

    render(){
        return(
            <main>
                <h2>Your Trains</h2>
                {this.state.myTickets.length > 0 ? [...this.state.myTickets].map((ticket, index)=>{
                    return <Link key={index} to={`/trips/${ticket.tripId}`}>
                        <BoughtTicketsCard key={index} props={ticket}/>
                    </Link>
                }): <div>You have no tickets</div>
                }


            </main>

        )
    }
}

export default withRouter(MyTickets)