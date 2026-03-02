//========================================
//1) Level 1: Basic Counter Section
//========================================

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


//========================================
//2) Level 2: Smart Counter Section
//========================================

let count2 = parseInt(localStorage.getItem("myCount"), 10) || 0;
const value = document.querySelector("#value");
const stepInput = document.querySelector("#step");
const btns = document.querySelectorAll(".btn");

function updateUI() {
  if (!value) return;
  value.textContent = count2;
  if (count2 > 0) value.style.color = "#27ae60"; 
  else if (count2 < 0) value.style.color = "#e74c3c";
  else value.style.color = "#2c3e50"; 
}

if (value && stepInput && btns.length) {
  updateUI();

  btns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const action = e.currentTarget.dataset.action;
      const step = Math.abs(parseInt(stepInput.value, 10)) || 1;

      if (action === "increase") count2 += step;
      else if (action === "decrease") count2 -= step;
      else if (action === "reset") count2 = 0;
      else return;

      localStorage.setItem("myCount", count2);
      updateUI();
    });
  });
}

//========================================
//3) Level 3: Productivity Timer (Pomodoro)
//========================================

let timeLeft = 1500;
let timerId = null;

const display = document.querySelector('#timer-display');
const timerInput = document.querySelector('#timer-minutes');
const startBtn = document.querySelector('#start');
const pauseBtn = document.querySelector('#pause');
const resetBtn = document.querySelector('#reset');

function getTimerDuration() {
  const minutes = parseInt(timerInput.value) || 25;
  return minutes * 60;
}

function updateDisplay() {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const displaySeconds = seconds < 10 ? `0${seconds}` : seconds;
  const displayMinutes = minutes < 10 ? `0${minutes}` : minutes;
  display.textContent = `${displayMinutes}:${displaySeconds}`;
}

startBtn.addEventListener('click', () => {
  if (timerId !== null) return;
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

timerInput.addEventListener('input', () => {
  if (timerId === null) {
  timeLeft = getTimerDuration();
  updateDisplay();
  }
});

timeLeft = getTimerDuration();
updateDisplay();
