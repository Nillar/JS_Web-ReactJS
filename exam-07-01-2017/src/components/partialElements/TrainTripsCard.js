import React, {Component} from 'react';
import {withRouter, Link} from 'react-router-dom';
import trainImage from '../../img/train-station.jpg'
import toastr from 'toastr';

class TrainTripsCard extends Component {
    constructor(props) {
        super(props)

        this.id = this.props.id;
    }


    render() {
        return (

            <Link to={`/trips/${this.id}`} className="added-train">
                <img src={trainImage} className="picture-added-train"/>
                <h3>{this.props.props.destination}</h3>
                <span>from {this.props.props.origin}</span>
                <span>departs {this.props.props.time}</span>
                <span>arrives {this.props.props.arrives}</span>
                <span>duration {this.props.props.duration}</span>
            </Link>


        )
    }
}

export default withRouter(TrainTripsCard)