function increment(){
    console.log("A7A");
    let countEl = document.getElementById("count-el");
    let count = parseInt(countEl.innerText);
    count += 1;
    countEl.innerText = count;
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