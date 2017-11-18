import React, {Component} from 'react';
import reqHandler from "../utils/reqHandler";
import HotelCard from './../appElements/partials/HotelCard'

class HotelsList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            hotels: []
        };

        this.getData = this.getData.bind(this);
    }

    async getData() {
        let hotels = await reqHandler.listHotels();
        this.setState({hotels: hotels});
    }

    componentDidMount() {
        this.getData();
    }

    render() {
        return (
            <div>
                {this.state.hotels.map((hotel, index) => {
                    return <HotelCard
                        key={index}
                        // name={hotel.name}
                        // image={hotel.image}
                        // description={hotel.description}
                        props={hotel}
                    />
                })}
            </div>
        )
    }
}

export default HotelsList;