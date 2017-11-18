const host = 'http://localhost:5000/';

async function register(payload) {
    console.log('register request');
    const res = await fetch(host + 'auth/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    });
    return await res.json();
}

async function login(payload) {
    console.log('login request');
    const res = await fetch(host + 'auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    });
    return await res.json();
}

async function createHotel(payload) {
    console.log('create hotel request');
    console.log({body: {
        name: payload.name,
            location: payload.location,
            description: payload.description,
            numberOfRooms: Number(payload.numberOfRooms),
            image: payload.image,
            parkingSlots: Number(payload.parkingSlots)
    }});
    const res = await fetch(host + 'hotels/create', {
        method: 'POST',
        headers: {
            Authorization: 'bearer ' + localStorage.getItem('authToken'),
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: payload.name,
            location: payload.location,
            description: payload.description,
            numberOfRooms: Number(payload.numberOfRooms),
            image: payload.image,
            parkingSlots: Number(payload.parkingSlots)
        })
    });
    return await res.json();
}

async function listHotels() {
    const res = await fetch(host + 'hotels/all', {
        method: 'GET'
    });
    return await res.json();
}

async function getDetails(hotelId) {
    console.log(host + 'hotels/details/' + hotelId);
    const res = await fetch(host + 'hotels/details/' + hotelId, {
        method: 'GET',
        headers: {
            Authorization: 'bearer ' + localStorage.getItem('authToken'),
            'Content-Type': 'application/json'
        }

    });
    return await res.json();
}

export default {register, login, createHotel, listHotels, getDetails};