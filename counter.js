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

