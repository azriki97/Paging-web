document.addEventListener('DOMContentLoaded', function() {
    // Login form
    const loginForm = document.getElementById('loginForm');
    const alertDiv = document.getElementById('alert');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        
        if (username === '' || password === '') {
            alertDiv.innerText = 'Username and Password must be filled out';
        } else {
            // Retrieve user data from localStorage
            const users = JSON.parse(localStorage.getItem('users') || '[]');
            const user = users.find(user => user.username === username && user.password === password);
            
            if (user) {
                window.location.href = 'index.html';
            } else {
                alertDiv.innerText = 'Invalid Username or Password';
            }
        }
    });
});
