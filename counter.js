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


// Hamburger Menu Toggle Function
function toggleMenu() {
    const menu = document.getElementById('menu');
    const hamburgerBtn = document.querySelector('.hamburger-btn');
    
    menu.classList.toggle('show');
    hamburgerBtn.classList.toggle('active');
}

// Close menu when clicking outside
document.addEventListener('click', function(event) {
    const menu = document.getElementById('menu');
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    
    if (!hamburgerMenu.contains(event.target) && menu.classList.contains('show')) {
        menu.classList.remove('show');
        document.querySelector('.hamburger-btn').classList.remove('active');
    }
});

//smart counter section
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
  if (count > 0) value.style.color = "#27ae60"; // Green
  else if (count < 0) value.style.color = "#e74c3c"; // Red
  else value.style.color = "#2c3e50"; // Dark Grey
}