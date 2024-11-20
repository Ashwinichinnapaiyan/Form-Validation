
function validateForm() {
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const message = document.getElementById('message').value;
    const contact = document.getElementById('contact').value;

    // Username validation
    if (username.trim() === "") {
        alert("Username cannot be empty!");
        return false;
    }

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address!");
        return false;
    }

    // Password validation (At least 8 characters, 1 uppercase, 1 lowercase, and 1 number)
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/;

    if (!passwordPattern.test(password)) {
        alert("Password must be at least 8 characters long, contain one special character,one uppercase letter, one lowercase letter, and one number!");
        return false;
    }

    // Contact number validation (exactly 10 digits)
    if (!/^\d{10}$/.test(contact)) {
        alert("Contact number must be exactly 10 digits!");
        return false;
    }

    alert("Registration successful!");
    return true;
}