// Fake user database
let users = [];

function signupUser(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Check if the user already exists
    if (users.find(user => user.email === email)) {
        alert('User already exists!');
        return;
    }

    users.push({ name, email, password });
    alert('Signup successful! Please login.');
    window.location.href = 'login.html';
}

function loginUser(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Validate user credentials
    const user = users.find(user => user.email === email && user.password === password);
    if (user) {
        alert(`Welcome, ${user.name}!`);
        window.location.href = 'index.html';
    } else {
        alert('Invalid credentials!');
    }
}

function orderPizza(pizzaType) {
    alert(`You have ordered a ${pizzaType} pizza!`);
}
