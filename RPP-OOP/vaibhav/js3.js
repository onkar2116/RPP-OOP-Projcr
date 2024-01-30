document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');
    const resetLoginButton = document.getElementById('resetLogin');
    const resetSignupButton = document.getElementById('resetSignup');
    const infoContainer = document.getElementById('infoContainer');

    // Function to save user information in localStorage
    function saveUserInfo(name, email, password) {
        const user = {
            name: name,
            email: email,
            password: password,
        };
        localStorage.setItem('user', JSON.stringify(user));
    }

    // Function to get user information from localStorage
    function getUserInfo() {
        const userString = localStorage.getItem('user');
        return userString ? JSON.parse(userString) : null;
    }

    // Function to display user information
    function displayUserInfo() {
        const user = getUserInfo();
        if (user) {
            infoContainer.innerHTML = `
                <h2>User Information:</h2>
                <p><strong>Name:</strong> ${user.name}</p>
                <p><strong>Email:</strong> ${user.email}</p>
            `;
        } else {
            infoContainer.innerHTML = '<p>No user information available. Please sign up or log in.</p>';
        }
    }

    // Event listener for sign-up form submission
    signupForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const name = document.getElementById('signupName').value;
        const email = document.getElementById('signupEmail').value;
        const password = document.getElementById('signupPassword').value;

        saveUserInfo(name, email, password);
        displayUserInfo();
    });

    // Event listener for login form submission
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const email = document.getElementById('loginEmail').value;
        const password = document.getElementById('loginPassword').value;

        const user = getUserInfo();
        if (user && user.email === email && user.password === password) {
            displayUserInfo();
        } else {
            alert('Invalid login credentials. Please try again.');
        }
    });

    // Event listener for reset buttons
    resetLoginButton.addEventListener('click', function() {
        loginForm.reset();
    });

    resetSignupButton.addEventListener('click', function() {
        signupForm.reset();
    });

    // Display user information on page load
    displayUserInfo();
});
