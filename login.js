document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Simple validation for demonstration
    if (email === "" || password === "") {
        alert("Please fill in all fields.");
    } else {
        alert("Login successful.");
        // Here, you can add logic to send the data to the server or redirect.
    }
});

document.getElementById('signup-link').addEventListener('click', function(event) {
    event.preventDefault();
    alert("Redirecting to sign-up page...");
    // Here, you would add logic to redirect to the sign-up page.
});
