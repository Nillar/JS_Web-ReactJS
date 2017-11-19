const baseUrl = 'http://localhost:5000';

async function register(name, email, password) {
    console.log(`${baseUrl}/auth/signup`);
    const res = await fetch(`${baseUrl}/auth/signup`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "name": name,
            "email": email,
            "password": password
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
    return await res.json();
}

async function getYearBalance(id) {
    const res = await fetch(`${baseUrl}/plan/${id}`, {
        method: 'GET',
        headers: {
            Authorization: 'bearer ' + localStorage.getItem('token')
        }
    });
    return await res.json();
}

async function getMonthlyBalance(uri) {
    const res = await fetch(`${baseUrl}/plan/${uri}`, {
        method: 'GET',
        headers: {
            Authorization: 'bearer ' + localStorage.getItem('token')
        }
    });
    return await res.json();
}

async function addBudget(income, budget, year, month) {
    const res = await fetch(`${baseUrl}/plan/${year}/${month}`, {
        method: 'POST',
        headers: {

            Authorization: 'bearer ' + localStorage.getItem('token'),
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            income:income,
            budget:budget
        })
    });
    return await res.json();
}

export {login, register, getYearBalance, getMonthlyBalance, addBudget}