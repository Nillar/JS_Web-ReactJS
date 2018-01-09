const baseUrl = 'http://localhost:5000';

async function register(name, email, password) {
    const res = await fetch(`${baseUrl}/auth/signup`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: name,
            email: email,
            password: password
        })
    });

    return await res.json();
}

async function login(email, password) {
    const res = await fetch(`${baseUrl}/auth/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: email,
            password: password
        })
    });
    return await res.json()
}

async function getAllTrips() {
    const res = await fetch(`${baseUrl}/trips`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    return await res.json();
}

async function getSearchResults(origin, destination, date) {
    const res = await fetch(`${baseUrl}/search?origin=${origin}&destination=${destination}&date=${date}`, {
        method: 'GET'
    });
    return await res.json();
}

async function getTripDetails(id) {
    const res = await fetch(`${baseUrl}/trips/${id}`, {
        method: 'GET',
        headers: {
            Authorization: 'bearer ' + localStorage.getItem('token')
        }
    });
    return await res.json();
}

async function addTicketToCart(tripId, date, className, count) {
    const res = await fetch(`${baseUrl}/cart`, {
        method: 'POST',
        headers: {
            Authorization: 'bearer ' + localStorage.getItem('token'),
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            tripId: tripId,
            date: date,
            class: className,
            count: count
        })
    });
    return await res.json();
}

async function getAllTicketsFromCart() {
    const res = await fetch(`${baseUrl}/cart`, {
        method: 'GET',
        headers: {
            Authorization: 'bearer ' + localStorage.getItem('token')
        }
    });

    return await res.json();
}

async function removeTicketsFromCart(id) {
    const res = await fetch(`${baseUrl}/cart/${id}`, {
        method: 'DELETE',
        headers: {
            Authorization: 'bearer ' + localStorage.getItem('token')
        }
    });

    return await res.json();
}

async function checkout() {
    const res = await fetch(`${baseUrl}/cart/checkout`, {
        method: 'POST',
        headers: {
            Authorization: 'bearer ' + localStorage.getItem('token')
        }
    });

    return await res.json();
}

async function myTicketsHistory() {
    const res = await fetch(`${baseUrl}/cart/history`, {
        method: 'GET',
        headers: {
            Authorization: 'bearer ' + localStorage.getItem('token')
        }
    });
    return await res.json();
}


export {
    login,
    register,
    getAllTrips,
    getSearchResults,
    getTripDetails,
    addTicketToCart,
    getAllTicketsFromCart,
    removeTicketsFromCart,
    checkout,
    myTicketsHistory
};
