import React, {Component} from 'react';
import {withRouter, Link} from 'react-router-dom';
import trainImage from '../../img/train-station.jpg'
import {removeTicketsFromCart} from '../utils/reqHandler';
import toastr from 'toastr';

class CartTicketsCard extends Component {
    constructor(props) {
        super(props);

       this.state = {
            className: ''
       };

       this.removeTicket = this.removeTicket.bind(this);

    }

    componentDidMount(){
        if(this.props.props.class === 'firstClass'){
            this.setState({className: 'First Class'});
        }
        if(this.props.props.class === 'secondClass'){
            this.setState({className: 'Second Class'});
        }
    }

    async removeTicket(id){
        console.log(id);

        const res = await removeTicketsFromCart(id);

        if(!res.success){
            toastr.error('Could not find ticket with this id');
            return;
        }
        toastr.success('Ticket Removed');
        this.props.history.push('/catalog');
        this.props.history.push('/cart');
    }


    render() {
        return (
            <section className="single-ticket">
                <div className="left-ticket-container">
                    <img src={trainImage} className="destination-img" />
                    <div className="train-parameters">
                        <span className="ticket-price">Price: {this.props.props.price}</span>
                        <span className="ticket-class">{this.state.className}</span>
                    </div>
                </div>
                <div className="right-ticket-container">
                    <h2>{this.props.props.destination}</h2>
                    <p>from {this.props.props.origin}</p>
                    <p>{this.props.props.date} {this.props.props.time}</p>
                    <p>arrives {this.props.props.arrives} (duration {this.props.props.duration})</p>
                    <p />
                    <div>
                        <span className="number-of-tickets">Tickets: {this.props.props.count}</span>
                        <button type="button" onClick={()=>{this.removeTicket(this.props.props._id)}}>REMOVE</button>
                    </div>
                </div>
            </section>


        )
    }
}

export default withRouter(CartTicketsCard)