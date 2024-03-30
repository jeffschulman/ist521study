document.addEventListener('DOMContentLoaded', () => {
    // Show the 'Continue' button after 10 seconds
    setTimeout(() => {
        document.getElementById('continueButton').style.display = 'block';
    }, 10000);

    // Redirect to the next page when the 'Continue' button is clicked
    document.getElementById('continueButton').addEventListener('click', () => {
        window.location.href = '../page4/page4.html'; // Modify for correct redirection
    });

    // Optional: Add form submission logic and manipulation
});
