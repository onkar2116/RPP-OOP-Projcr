document.addEventListener('DOMContentLoaded', function () {
    // Function to validate the form
    function validateForm() {
        var firstName = document.getElementById('firstName').value;
        var username = document.getElementById('username').value;
        var email = document.getElementById('email').value;

        // Basic validation, you can add more as needed
        if (firstName === '' || username === '' || email === '') {
            alert('Please fill in all required fields.');
            return false;
        }

        return true;
    }

    // Function to display information
    function displayInfo() {
        var displayDiv = document.getElementById('displayInfo');
        var firstName = document.getElementById('firstName').value;
        var middleName = document.getElementById('middleName').value;
        var lastName = document.getElementById('lastName').value;
        var username = document.getElementById('username').value;
        var email = document.getElementById('email').value;
        var phoneNumber = document.getElementById('phoneNumber').value;
        var gender = document.querySelector('input[name="gender"]:checked');
        var subscribe = document.getElementById('subscribe').checked;
        var role = document.getElementById('role').value;
        var details = document.getElementById('details').value;

        var infoString = `
            <h2>User Information:</h2>
            <p><strong>First Name:</strong> ${firstName}</p>
            <p><strong>Middle Name:</strong> ${middleName}</p>
            <p><strong>Last Name:</strong> ${lastName}</p>
            <p><strong>Username:</strong> ${username}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone Number:</strong> ${phoneNumber}</p>
            <p><strong>Gender:</strong> ${gender ? gender.value : 'Not specified'}</p>
            <p><strong>Subscribe:</strong> ${subscribe ? 'Yes' : 'No'}</p>
            <p><strong>Role:</strong> ${role}</p>
            <p><strong>Details:</strong> ${details}</p>
        `;

        displayDiv.innerHTML = infoString;
    }

    // Add an event listener for the Save button click
    document.getElementById('saveButton').addEventListener('click', function () {
        if (validateForm()) {
            displayInfo();
            // Optionally, you can add code here to save the information or perform other actions.
        }
    });
});
