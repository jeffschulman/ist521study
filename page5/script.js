document.addEventListener('DOMContentLoaded', () => {
    // Sneak into Basket after a certain interaction or after some time
    setTimeout(() => {
        document.getElementById('hiddenSubscription').style.display = 'block';
    }, 5000); // Adjust timing as needed

    // Show the 'Continue' button after 10 seconds
    setTimeout(() => {
        document.getElementById('continueButton').style.display = 'block';
    }, 10000);

    // Redirect to the next page when the 'Continue' button is clicked
    document.getElementById('continueButton').addEventListener('click', () => {
        window.location.href = '../page6/page6.html'; // Modify for correct redirection
    });

    // Optional: Add additional JavaScript for interactive elements
});
