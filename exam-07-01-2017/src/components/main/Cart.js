import React, {Component} from 'react';
import {withRouter, Link} from 'react-router-dom';
import {getAllTicketsFromCart, checkout} from '../utils/reqHandler';
import CartTicketsCard from '../partialElements/CartTicketsCard';
import toastr from 'toastr';

class Cart extends Component {
    constructor(props){
        super(props);

        this.state = {
            cartTickets: [],
            checkoutTotal: 0
        };

        this.checkout = this.checkout.bind(this);
        this.getData = this.getData.bind(this);
    }

    componentDidMount(){
        this.getData();
    }

    async getData(){
        const res = await getAllTicketsFromCart();

        if(res.length === 0){
            toastr.error('No tickets in cart');
            return;
        }
        let totalPrice = 0;

        res.map(obj=>{
            totalPrice+=obj.count * obj.price;
        });
        this.setState({cartTickets: res});
        totalPrice = totalPrice.toFixed(2);
        this.setState({checkoutTotal:totalPrice});

    }

    async checkout(){
        const res = await checkout();

        if(res.success === false){
            toastr.error('No tickets in cart');
            return;
        }
        toastr.success('Checkout Successful');
        // console.log(res);
        this.props.history.push('/profile');
    }

    render(){
        return (
            <main>
                {this.state.cartTickets.length > 0 ? [...this.state.cartTickets].map((ticket, index)=>{
                    return <CartTicketsCard key={index} props={ticket}/>
                }):  <div style={{'minHeight':'65vh'}}>No Tickets in the Cart</div>
                }
                {this.state.cartTickets.length > 0 ? <section className="ticket-checkout">
                    <div className="total">Sub total: {this.state.checkoutTotal}$</div>
                    <Link to={'/profile'} onClick={()=>{this.checkout()}} className="checkout">Checkout</Link>
                    </section> : <div></div>
                }

                <footer>SoftUni RailWays</footer>
            </main>

        )
    }
}

export default withRouter(Cart)