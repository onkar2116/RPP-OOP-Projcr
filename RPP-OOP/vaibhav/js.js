document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const email = document.getElementById('loginEmail').value;
        const password = document.getElementById('loginPassword').value;
        console.log(`Login submitted. Email: ${email}, Password: ${password}`);
        // Add login logic (e.g., send data to server for authentication)
    });

    signupForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const name = document.getElementById('signupName').value;
        const email = document.getElementById('signupEmail').value;
        const password = document.getElementById('signupPassword').value;
        console.log(`Sign Up submitted. Name: ${name}, Email: ${email}, Password: ${password}`);
        // Add signup logic (e.g., send data to server to create an account)
    });
});
