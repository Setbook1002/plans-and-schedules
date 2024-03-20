// script.js
document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var formData = new FormData(this);

    fetch('register.php', {
        method: 'POST',
        body: formData
    })
    .then(response => {
        if (response.ok) {
            // Registration successful, redirect to login page
            window.location.href = 'login.html';
        } else {
            // Display error message
            console.error('Registration failed');
        }
    })
    .catch(error => console.error('Error:', error));
});
