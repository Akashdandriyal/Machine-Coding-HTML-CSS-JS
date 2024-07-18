const progress = document.getElementById("progress");
const actionButtons = document.querySelector(".buttons");
const startButton = document.getElementById("start"),
  stopButton = document.getElementById("stop"),
  resetButton = document.getElementById("reset");
let width = 0,
  interval;

stopButton.setAttribute("disabled", "true");
actionButtons.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target === startButton && !startButton.disabled) {
    startProgress();
  } else if (e.target === stopButton && !stopButton.disabled) {
    stopProgress();
  } else if (e.target === resetButton) {
    resetProgress();
  }
});

const startProgress = () => {
  interval = setInterval(() => {
    if (width >= 100) {
      clearInterval(interval);
      stopButton.setAttribute("disabled", "true");
    }
    width += 0.1;
    progress.style.width = width + "%";
  }, 10);
  startButton.setAttribute("disabled", "true");
  stopButton.removeAttribute("disabled");
};

const stopProgress = () => {
  clearInterval(interval);
  stopButton.setAttribute("disabled", "true");
  startButton.removeAttribute("disabled");
};

const resetProgress = () => {
  clearInterval(interval);
  width = 0;
  progress.style.width = width + "%";
  startButton.removeAttribute("disabled");
  stopButton.setAttribute("disabled", "true");
};
