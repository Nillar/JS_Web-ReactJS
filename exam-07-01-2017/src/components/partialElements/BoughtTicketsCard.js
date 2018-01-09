import React, {Component} from 'react';
import {withRouter, Link} from 'react-router-dom';
import trainImage from '../../img/train-station.jpg'


class BoughtTicketsCard extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <section className="purchased-ticket">
                <div className="purchased-left">
                    <img src={trainImage} />
                </div>
                <div className="purchased-right">
                    <div>
                        <h3>{this.props.props.destination}</h3><span>{this.props.props.date}</span>
                    </div>
                    <div>
                        from {this.props.props.origin} <span>{this.props.props.time}</span>
                    </div>
                    <div>
                        arrives <span>{this.props.props.arrives}</span>
                    </div>
                    <div>
                        duration <span>{this.props.props.duration}</span>
                    </div>
                    <p>{this.props.props.count} x {this.props.props.price}$ ({this.props.props.class}) </p>
                </div>
            </section>

        )
    }
}

export default withRouter(BoughtTicketsCard)
