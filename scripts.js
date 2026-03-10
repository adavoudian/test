let timerSeconds = 25 * 60;
let timerInterval = null;

const timerDisplay = document.getElementById("timerDisplay");
const playBtn = document.getElementById("playBtn");
const pauseBtn = document.getElementById("pauseBtn");

function updateDisplay() {
  const minutes = Math.floor(timerSeconds / 60);
  const seconds = timerSeconds % 60;
  timerDisplay.textContent =
    String(minutes).padStart(2, "0") + ":" + String(seconds).padStart(2, "0");
}

function startTimer() {
  if (timerInterval) return;

  timerInterval = setInterval(() => {
    if (timerSeconds > 0) {
      timerSeconds--;
      updateDisplay();
    } else {
      clearInterval(timerInterval);
      timerInterval = null;
      alert("Pomodoro session complete!");
    }
  }, 1000);
}

function pauseTimer() {
  clearInterval(timerInterval);
  timerInterval = null;
}

playBtn.addEventListener("click", startTimer);
pauseBtn.addEventListener("click", pauseTimer);

updateDisplay();