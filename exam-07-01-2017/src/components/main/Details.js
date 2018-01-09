import React, {Component} from 'react';
import {withRouter, Link} from 'react-router-dom';
import trainImage from '../../img/train-station.jpg';
import {getTripDetails, addTicketToCart} from '../utils/reqHandler';
import toastr from 'toastr';

class Details extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentTrip: {},
            firstClassPrice: 0,
            secondClassPrice: 0,
            firstClassSeats: -1,
            secondClassSeats: -1
        };


        this.getData = this.getData.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
        this.onChangeHandler = this.onChangeHandler.bind(this);

    }

    onChangeHandler(e) {
        this.setState({[e.target.name]: e.target.value})
    }

    componentDidMount() {
        this.getData();
    }

    async onSubmitHandler(e) {
        e.preventDefault();

        let date = new Date;
        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getYear();

        if (day < 10) {
            day = `0${day}`;
        }
        if (year < 100) {
            year = `0${year}`;
        }
        if (month < 10) {
            month = `0${month}`
        }
        let tripId = this.props.match.params.id;
        let currentDate = `${day}-${month}-${year - 100}`;
        let classSeatsName = '';
        let classSeatsCount = 0;

        if(this.state.firstClassSeats > 0){
            classSeatsName = 'firstClass';
            classSeatsCount = Number(this.state.firstClassSeats);
        }

        if(this.state.secondClassSeats > 0){
            classSeatsName = 'secondClass';
            classSeatsCount = Number(this.state.secondClassSeats);
        }


        const res = await addTicketToCart(tripId.toString(), currentDate, classSeatsName, Number(classSeatsCount));
        document.getElementById("inputForm").reset();

    }

    async getData() {
        const res = await getTripDetails(this.props.match.params.id);



        this.setState({
            currentTrip: res,
            firstClassPrice: res.tickets.firstClass,
            secondClassPrice: res.tickets.secondClass
        });

        toastr.success('Details loaded');


    }

    render() {
        return (
            <main>
                <section className="ticket-area">
                    <div className="ticket-area-left">
                        <img style={{'maxWidth': '350px'}} src={trainImage}/>
                    </div>
                    <div className="ticket-area-right">
                        <h3>{this.state.currentTrip.destination}</h3>
                        <div>from <strong>{this.state.currentTrip.origin}</strong></div>
                        <div>departs on <strong>{this.state.currentTrip.time}</strong></div>
                        <div>arrives <strong>{this.state.currentTrip.arrives}</strong></div>
                        <div>duration <strong>{this.state.currentTrip.duration}</strong></div>
                    </div>
                </section>
                <section className="train-details">
                    <form onSubmit={this.onSubmitHandler} className="seat-form" id='inputForm'>
                        <span>{this.state.firstClassPrice}</span><span>First Class</span>
                        <input type="text" onChange={this.onChangeHandler} name="firstClassSeats" placeholder="Add Number"/>
                        <input type="submit"
                               className="create-seat" defaultValue="Add to Cart"/>
                    </form>
                </section>
                <section className="train-details">
                    <form onSubmit={this.onSubmitHandler} className="seat-form" id='inputForm'>
                        <span>{this.state.secondClassPrice}</span><span>Second Class</span>
                        <input onChange={this.onChangeHandler} type="text" name="secondClassSeats" placeholder="Add Number"/>
                        <input type="submit" className="create-seat" defaultValue="Add to Cart"/>
                    </form>
                </section>
                <footer>SoftUni RailWays</footer>
            </main>

        )
    }
}

export default withRouter(Details)