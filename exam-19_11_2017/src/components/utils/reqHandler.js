const baseUrl = 'http://localhost:5000';

async function register(name, email, password) {
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
    console.log(budget);
    console.log(income);
    const res = await fetch(`${baseUrl}/plan/${year}/${month}`, {
        method: 'POST',
        headers: {
            Authorization: 'bearer ' + localStorage.getItem('token'),
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            income: Number(income),
            budget: Number(budget)
        })
    });
    return await res.json();
}

async function addExpense(name, category, cost, date, uri) {
    const payload = {
        amount: Number(cost),
        category: category,
        date: Number(date),
        name: name
    };

    console.log(payload);
    console.log(`${baseUrl}/plan/${uri}/expense`);

    const res = await fetch(`${baseUrl}/plan/${uri}/expense`,{
        method: 'POST',
        headers:{
            Authorization: 'bearer ' + localStorage.getItem('token'),
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({payload})
    });
    return await res.json();
}
export {login, register, getYearBalance, getMonthlyBalance, addBudget, addExpense}