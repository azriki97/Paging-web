document.addEventListener('DOMContentLoaded', function() {
    // Register form
    const registerForm = document.getElementById('registerForm');
    const registerAlert = document.getElementById('registerAlert');

    registerForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const regUsername = document.getElementById('regUsername').value;
        const regId = document.getElementById('regId').value;
        const regPassword = document.getElementById('regPassword').value;
        const confirmPassword = document.getElementById('confirmPassword').value;

        if (regUsername === '' || regId === '' || regPassword === '' || confirmPassword === '') {
            registerAlert.innerText = 'All fields must be filled out';
        } else if (regPassword !== confirmPassword) {
            registerAlert.innerText = 'Passwords do not match';
        } else {
            // Save user data to localStorage
            const users = JSON.parse(localStorage.getItem('users') || '[]');
            users.push({ username: regUsername, id: regId, password: regPassword });
            localStorage.setItem('users', JSON.stringify(users));
            window.location.href = 'login.html';
        }
    });
});
