document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('passwordForm');
    const passwordInput = document.getElementById('password');
    const errorMessage = document.getElementById('error-message');

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const enteredCode = passwordInput.value;

        // The correct code (you can change this to whatever code you want)
        const correctCode = '4957';

        if (enteredCode === correctCode) {
            // Redirect to success page if code is correct
            window.location.href = '5792759228790629856368349683967396287276934u69396377685259369268267276289636396937689gkguieighe34.html';
        } else {
            // Show error message if code is incorrect
            errorMessage.textContent = 'Incorrect code. Please try again.';
        }
    });
});
