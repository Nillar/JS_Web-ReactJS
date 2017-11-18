import React, {Component} from 'react';
import reqHandler from "../utils/reqHandler";

class Details extends Component{
    constructor(props){
        super(props);

        this.state={
            hotel:''
        }
    }

    componentDidMount(){
        this.getData()
    }

    async getData(){
        let hotelId = this.props.match.params.id;
        let res = await reqHandler.getDetails(hotelId);

        // if(!hotel.success){
        //     console.log('Error');
        //     return;
        // }
        this.setState({hotel:res});
        console.log(this.state.hotel)
    }

    render(){
        return(
            <div className="hotel-card">
                <img src={this.state.hotel.image}/>
                <div className="description">
                    <h1>{this.state.hotel.name}</h1>
                    <h2>{this.state.hotel.location}</h2>
                    <h3>{this.state.hotel.description}</h3>
                    <p>{this.state.hotel.numberOfRooms} Rooms</p>
                    <p>{this.state.hotel.parkingSlots} Parking Slots</p>
                </div>

            </div>
        )
    }
}

export default Details