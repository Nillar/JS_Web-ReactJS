import React, {Component} from 'react';
import reqHandler from './../utils/reqHandler';

class CreateHotel extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            location: '',
            description: '',
            numberOfRooms: '',
            image: '',
            parkingSlots: ''
        };

        this.onSubmitHandler = this.onSubmitHandler.bind(this);
        this.onChangeHandler = this.onChangeHandler.bind(this);
    }

    onChangeHandler(e) {
        this.setState({[e.target.name]: e.target.value});

    }

    async onSubmitHandler(e) {
        e.preventDefault();
        const res = await reqHandler.createHotel({
            name: this.state.name,
            location: this.state.location,
            description: this.state.description,
            numberOfRooms: Number(this.state.numberOfRooms),
            image: this.state.image,
            parkingSlots: Number(this.state.parkingSlots)
        });
        if(!res.success){
            console.log('Error');
            return;
        }
        this.props.history.push('/');
    }


    render() {
        return (
            <div>
                <h1>Create Hotel</h1>
                <form onSubmit={this.onSubmitHandler}>
                    <input
                        label="name"
                        name="name"
                        placeholder="name"
                        value={this.state.name}
                        onChange={this.onChangeHandler}
                    />
                    <input
                        label="location"
                        name="location"
                        placeholder="location"
                        value={this.state.location}
                        onChange={this.onChangeHandler}
                    />
                    <input
                        label="description"
                        name="description"
                        placeholder="description"
                        value={this.state.description}
                        onChange={this.onChangeHandler}
                    />
                    <input
                        label="numberOfRooms"
                        name="numberOfRooms"
                        placeholder="number of rooms"
                        value={this.state.numberOfRooms}
                        onChange={this.onChangeHandler}
                    />
                    <input
                        label="image"
                        name="image"
                        placeholder="image"
                        value={this.state.image}
                        onChange={this.onChangeHandler}
                    />
                    <input
                        label="parkingSlots"
                        name="parkingSlots"
                        placeholder="number of parking slots"
                        value={this.state.parkingSlots}
                        onChange={this.onChangeHandler}
                    />

                    <input className="submit-btn" type="submit" value="Create"/>
                </form>
            </div>
        )
    }
}

export default CreateHotel;