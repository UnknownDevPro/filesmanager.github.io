document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get user input
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Hardcoded credentials (for demonstration purposes)
    const validUsername = 'admin';
    const validPassword = 'CTFA2020';

    // Validate credentials
    if (username === validUsername && password === validPassword) {
        // Redirect to the dashboard page
        window.location.href = '/File_Login/2_FL/47377547758675835786573973583.html';
    } else {
        // Show error message
        const errorMessage = document.getElementById('error-message');
        errorMessage.textContent = 'Invalid username or password.';
        errorMessage.classList.remove('hidden');
    }
});
