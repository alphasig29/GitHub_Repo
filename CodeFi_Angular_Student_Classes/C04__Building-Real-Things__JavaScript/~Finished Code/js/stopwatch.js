// * ========== HTML Element Selectors ========== * \\
const startButton = document.querySelector("[data-action='start']");
const stopButton = document.querySelector("[data-action='stop']");
const resetButton = document.querySelector("[data-action='reset']");
const minutesDisplay = document.querySelector(".minutes");
const secondsDisplay = document.querySelector(".seconds");

// * ========== Global Variables ========== * \\
let currTime = 0;
let isRunning = false;
let timerInterval;

// * ========== Function Declarations ========== * \\
// FUNCTION: Starts the timer
function startTimer() {
  // If there was a previous timer, don't create another new timer
  if (isRunning) return;

  isRunning = true;
  timerInterval = setInterval(incrementTime, 1000);
}

// FUNCTION: Stops the timer
function stopTimer() {
  // If there wasn't a previous timer, don't do anything
  if (!isRunning) return;

  isRunning = false;
  clearInterval(timerInterval);
}

// FUNCTION: Resets the timer
function resetTimer() {
  stopTimer();

  currTime = 0;
  displayFormattedTime("0 0", "0 0");
}

// FUNCTION: Start an Interval that increases the global timer variable by 1 every second
function incrementTime() {
  // Increment the current time variable
  currTime++;

  // Get the formatted seconds and minutes based on the current time
  const { minutes, seconds } = getFormattedTime(); // { minutes: 1, seconds: 30 }

  // Display the time to the screen
  displayFormattedTime(minutes, seconds);
}

// FUNCTION: Helper Function to format time into proper text
function getFormattedTime() {
  let min = Math.floor(currTime / 60);
  let sec = currTime % 60;

  return {
    minutes: min < 10 ? `0 ${min}` : min,
    seconds: sec < 10 ? `0 ${sec}` : sec,
  };
}

// FUNCTION: Helper function ot display the formatted time to the correct HTML element
function displayFormattedTime(minutes, seconds) {
  minutesDisplay.innerText = minutes;
  secondsDisplay.innerText = seconds;
}

// * ========== Event Listeners ========== * \\
// EVENT LISTENER: Listens for a click on the start button to start the timer
startButton.addEventListener("click", startTimer);

// EVENT LISTENER: TSListens for a click on the stop button to stop the timer
stopButton.addEventListener("click", stopTimer);

// EVENT LISTENER: Listens for a click on the reset button to reset the timer
resetButton.addEventListener("click", resetTimer);
