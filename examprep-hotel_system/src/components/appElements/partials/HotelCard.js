import React, {Component} from 'react';
import {withRouter, Link} from 'react-router-dom';
class HotelCard extends Component{
    constructor(props){
        super(props);

    }

    componentDidMount (){
        console.log(this.props.props);
    }
    render(){
        return(
            <div className="hotel-card">
                <img src={this.props.props.image}/>
                <div className="description">
                    <h1>{this.props.props.name}</h1>
                    <h2>{this.props.props.location}</h2>
                    <h3>{this.props.props.description}</h3>
                    <Link to={`/hotels/details/${this.props.props.id}`}>Details</Link>
                </div>

            </div>
        )
    }
}

export default withRouter(HotelCard)