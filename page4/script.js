document.addEventListener('DOMContentLoaded', () => {
    // Show the 'Continue' button after 10 seconds
    setTimeout(() => {
        document.getElementById('continueButton').style.display = 'block';
    }, 10000);

    // Redirect to the next page when the 'Continue' button is clicked
    document.getElementById('continueButton').addEventListener('click', () => {
        window.location.href = '../page5/page5.html'; // Modify for correct redirection
    });

    // Optional: Add logic for nagging prompts or additional interactivity
});
