document.addEventListener('DOMContentLoaded', () => {
    // Optional: JavaScript for bait and switch behavior
    document.getElementById('premiumLink').addEventListener('click', (e) => {
        e.preventDefault();
        // Redirect or show premium offer
    });

    // Show the 'Continue' button after 10 seconds
    setTimeout(() => {
        document.getElementById('continueButton').style.display = 'block';
    }, 10000);

    // Redirect to the next page when the 'Continue' button is clicked
    document.getElementById('continueButton').addEventListener('click', () => {
        window.location.href = '../page7/page7.html'; // Modify for correct redirection
    });
});
