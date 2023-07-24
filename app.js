let timerInterval;
let timer = 0;
let isRunning = false;

// Function to format time in HH:MM:SS format
function formatTime(time) {
  let hours = Math.floor(time / 3600);
  let minutes = Math.floor((time % 3600) / 60);
  let seconds = time % 60;

  return (
    (hours < 10 ? "0" : "") + hours + ":" +
    (minutes < 10 ? "0" : "") + minutes + ":" +
    (seconds < 10 ? "0" : "") + seconds
  );
}

// Function to start or stop the timer
function startStopTimer() {
  const startStopButton = document.getElementById("startStop");

  if (!isRunning) {
    // Start the timer
    startStopButton.textContent = "Stop";
    isRunning = true;
    timerInterval = setInterval(updateTimer, 1000);
  } else {
    // Stop the timer
    startStopButton.textContent = "Start";
    clearInterval(timerInterval);
    isRunning = false;
  }
}

// Function to stop the timer
function stopTimer() {
  const startStopButton = document.getElementById("startStop");
  startStopButton.textContent = "Start";
  clearInterval(timerInterval);
  isRunning = false;
}

// Function to update the timer every second
function updateTimer() {
  timer++;
  const displayElement = document.getElementById("display");
  displayElement.textContent = formatTime(timer);
}

// Function to reset the timer
function resetTimer() {
  const startStopButton = document.getElementById("startStop");
  startStopButton.textContent = "Start";
  clearInterval(timerInterval);
  isRunning = false;
  timer = 0;
  const displayElement = document.getElementById("display");
  displayElement.textContent = formatTime(timer);
}

// Event listeners for buttons
document.getElementById("startStop").addEventListener("click", startStopTimer);
document.getElementById("stop").addEventListener("click", stopTimer);
document.getElementById("reset").addEventListener("click", resetTimer);
