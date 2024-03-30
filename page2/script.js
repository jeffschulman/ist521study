document.addEventListener('DOMContentLoaded', () => {
    // Show the 'Next Question' button after 10 seconds
    setTimeout(() => {
        document.getElementById('nextButton').style.display = 'block';
    }, 10000);

    // Redirect to the next page when the 'Next Question' button is clicked
    document.getElementById('nextButton').addEventListener('click', () => {
        window.location.href = '../page3/page3.html'; // Modify as needed for correct redirection
    });
});
