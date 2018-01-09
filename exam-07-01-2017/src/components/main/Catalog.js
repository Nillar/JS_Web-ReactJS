import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {getAllTrips, getSearchResults} from '../utils/reqHandler';
import TrainTripsCard from '../partialElements/TrainTripsCard';
import toastr from 'toastr';

class Catalog extends Component {
    constructor(props) {
        super(props);

        this.state = {
            trips: [],
            origin: '',
            destination: '',
            date: ''
        };

        this.getData = this.getData.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
        this.onChangeHandler = this.onChangeHandler.bind(this);
    }

    componentDidMount() {
        this.getData();
    }


    async getData() {
        const res = await getAllTrips();

        if (res.success === false) {
            toastr.error('Loading failed');
            return;
        }

        this.setState({trips: res});
    }

    onChangeHandler(e) {
        this.setState({[e.target.name]: e.target.value})
    }

    async onSubmitHandler(e) {
        e.preventDefault();

        if(this.state.destination === '' || this.state.origin === '' || this.state.date === ''){
            toastr.error('All fields must be filled');
            return;
        }

        const res = await getSearchResults(this.state.origin, this.state.destination, this.state.date);

        if(res.error){
            toastr.info('No trips for the day');
            return;
        }

        this.setState({trips: res});
        if(this.state.trips.length === 0){
            toastr.error('No trips for the day');
            return;
        }
        toastr.success(`Trips for ${this.state.date} loaded`);

    }


    render() {
        return (
            <main>
                <div className="train-logo">
                </div>
                <form onSubmit={this.onSubmitHandler} className="search-form">
                    <label>Destination:</label>
                    <input onChange={this.onChangeHandler} type="text" name="destination" placeholder="Destination"/>
                    <label>Origin:</label>
                    <input onChange={this.onChangeHandler} type="text" name="origin" placeholder="Origin"/>
                    <label>Departure:</label>
                    <input onChange={this.onChangeHandler} type="text" name="date" placeholder="Departure"/>
                    <input type="submit" className="search" defaultValue="Search"/>
                </form>
                <section className="added-trains">
                    {this.state.trips.length >0 ?[...this.state.trips].map((singleTrip, index) => {
                        return <TrainTripsCard key={index} props={singleTrip} id={singleTrip._id}/>
                    }): <div>No trips available</div>}
                </section>
            </main>

        )
    }
}

export default withRouter(Catalog)