document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get user input
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Hardcoded credentials (for demonstration purposes)
    const validUsername = 'Max_Dev';
    const validPassword = 'Mau2012';

    // Validate credentials
    if (username === validUsername && password === validPassword) {
        // Redirect to the dashboard page
        window.location.href = '/File_Login/3_FL/5566787776545653223345677534445441248374654.html';
    } else {
        // Show error message
        const errorMessage = document.getElementById('error-message');
        errorMessage.textContent = 'Invalid username or password.';
        errorMessage.classList.remove('hidden');
    }
});
