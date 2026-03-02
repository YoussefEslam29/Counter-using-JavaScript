//1) Level 1: Basic Counter Section

let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");

let count = 0;

function increment(){
    count += 1;
    countEl.innerText = count;
}

function save(){
    let countStr = count + " - ";
    saveEl.textContent += countStr;
}
function reset(){
    count = 0;
    countEl.innerText = count;
}
function clearEntries(){
    saveEl.textContent = "Previous entires: ";
}


//2)level 2: smart counter section


// 1. Initialize count from localStorage OR start at 0
count = parseInt(localStorage.getItem("myCount")) || 0;

const value = document.querySelector("#value");
const stepInput = document.querySelector("#step");
const btns = document.querySelectorAll(".btn");

// Initial UI update to show saved value
updateUI();

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const action = e.currentTarget.dataset.action;
    const step = parseInt(stepInput.value) || 1;

    if (action === "increase") count += step;
    else if (action === "decrease") count -= step;
    else count = 0;

    // 2. Save new count to localStorage
    localStorage.setItem("myCount", count);
    
    updateUI();
  });
});

function updateUI() {
  value.textContent = count;

  // 3. Dynamic Styling Logic
  if (count > 0) value.style.color = "#27ae60"; 
  else if (count < 0) value.style.color = "#e74c3c";
  else value.style.color = "#2c3e50"; 
}

//3) Level 3: The Productivity Timer (Pomodoro)
let timeLeft = 1500; // 25 minutes in seconds
let timerId = null;

const display = document.querySelector('#timer-display');
const timerInput = document.querySelector('#timer-minutes');
const startBtn = document.querySelector('#start');
const pauseBtn = document.querySelector('#pause');
const resetBtn = document.querySelector('#reset');

// Function to get timer duration from input
function getTimerDuration() {
  const minutes = parseInt(timerInput.value) || 25;
  return minutes * 60; // Convert to seconds
}

function updateDisplay() {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  
  // String Padding: Ensures "9" seconds shows as "09"
  const displaySeconds = seconds < 10 ? `0${seconds}` : seconds;
  const displayMinutes = minutes < 10 ? `0${minutes}` : minutes;
  
  display.textContent = `${displayMinutes}:${displaySeconds}`;
}

startBtn.addEventListener('click', () => {
  if (timerId !== null) return; // Prevent multiple timers starting at once

  timerId = setInterval(() => {
    timeLeft--;
    updateDisplay();

    if (timeLeft === 0) {
      clearInterval(timerId);
      timerId = null;
      alert("Time's up! Take a break.");
    }
  }, 1000);
});

pauseBtn.addEventListener('click', () => {
  clearInterval(timerId);
  timerId = null;
});

resetBtn.addEventListener('click', () => {
  clearInterval(timerId);
  timerId = null;
  timeLeft = getTimerDuration();
  updateDisplay();
});

// Update timer when input value changes
timerInput.addEventListener('input', () => {
  if (timerId === null) { // Only update if timer is not running
    timeLeft = getTimerDuration();
    updateDisplay();
  }
});

// Initialize display with default value
timeLeft = getTimerDuration();
updateDisplay();