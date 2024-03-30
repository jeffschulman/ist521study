document.addEventListener('DOMContentLoaded', (event) => {
    // Countdown Timer Logic
    let countdownTime = 15 * 60 * 1000; // 15 minutes in milliseconds
    let endTime = new Date().getTime() + countdownTime;
    let countdownElement = document.querySelector('.countdown');

    let interval = setInterval(() => {
        let now = new Date().getTime();
        let distance = endTime - now;

        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);

        countdownElement.innerHTML = minutes + ":" + (seconds < 10 ? "0" : "") + seconds;

        if (distance < 0) {
            clearInterval(interval);
            countdownElement.innerHTML = "EXPIRED";
        }
    }, 1000);

    // Display Next Question Button After 10 Seconds
    setTimeout(() => {
        document.getElementById('nextButton').style.display = 'block';
    }, 10000);
});

// Event Listener for Next Question Button
document.getElementById('nextButton').addEventListener('click', () => {
    window.location.href = '../page2/page2.html'; // Modify as needed for correct redirection
});
