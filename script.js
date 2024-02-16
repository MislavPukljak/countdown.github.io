window.onload = function() {
    let countdownDate = new Date("08/29/2024");

    let countdownElement = document.getElementById('countdown');

    let countdownInterval = setInterval(function() {
        let now = new Date();
        let distance = countdownDate - now;

        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);

        if (days < 100) {
            days = "0" + days;
        } else if (days < 10) {
            days = "00" + days;
        }
        if (hours < 10) {
            hours = "0" + hours;
        }
        if (minutes < 10) {
            minutes = "0" + minutes;
        }
        if (seconds < 10) {
            seconds = "0" + seconds;
        }
        countdownElement.innerHTML = `${days} : ${hours} : ${minutes} : ${seconds}`;

        if (distance < 0) {
            clearInterval(countdownInterval);
            countdownElement.innerHTML = 'Countdown finished!';
        }
    }, 1000);
}