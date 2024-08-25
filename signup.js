document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const role = document.getElementById('role').value;

    // Simple validation for demonstration
    if (name === "" || email === "" || password === "" || role === "") {
        alert("Please fill in all fields.");
    } else {
        alert(`Welcome, ${name}! Your account has been created.`);
        // Here, you can add logic to send the data to the server.
    }
});

document.getElementById('login-link').addEventListener('click', function(event) {
    event.preventDefault();
    alert("Redirecting to login page...");
    // Here, you would add logic to redirect to the login page.
});
