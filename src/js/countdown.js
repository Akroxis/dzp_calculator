const countdownSpan = document.getElementById('time_countdown');

const countDownDate = new Date().getTime() + 15 * 60 * 1000;

const countDown = setInterval(function() {
    const now = new Date().getTime();

    let distance = countDownDate - now;

    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    const formattedMinutes = minutes >= 10 ? minutes : `0${minutes}`;
    const formattedSeconds = seconds >= 10 ? seconds : `0${seconds}`;
    countdownSpan.innerHTML = formattedMinutes + ":" + formattedSeconds;

    if (distance < 0) {
        distance = countDownDate - now;
    }
}, 1000);