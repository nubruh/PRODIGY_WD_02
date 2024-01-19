let timer;
let isTimerRunning = false;
let seconds = 0;
let minutes = 0;
let hours = 0;

function startTimer() {
  if (!isTimerRunning) {
    timer = setInterval(updateTimer, 1000);
    isTimerRunning = true;
  }
}

function updateTimer() {
  seconds++;
  if (seconds === 60) {
    seconds = 0;
    minutes++;
    if (minutes === 60) {
      minutes = 0;
      hours++;
    }
  }

  displayTimer();
}

function pauseTimer() {
  clearInterval(timer);
  isTimerRunning = false;
}

function stopTimer() {
  clearInterval(timer);
  isTimerRunning = false;
  seconds = 0;
  minutes = 0;
  hours = 0;
  displayTimer();
}

function displayTimer() {
  const formattedHour = padTime(hours);
  const formattedMin = padTime(minutes);
  const formattedSec = padTime(seconds);
  document.getElementById("hrs").innerText = formattedHour;
  document.getElementById('mns').innerText = formattedMin;
  document.getElementById("sec").innerText = formattedSec;
}

function padTime(time) {
  return time < 10 ? "0" + time : time;
}
