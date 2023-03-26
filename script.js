// Burger menu for mobile screen
let sidenav = document.getElementById("mySidenav");
let openBtn = document.getElementById("openBtn");
let closeBtn = document.getElementById("closeBtn");

openBtn.onclick = openNav;
closeBtn.onclick = closeNav;

/* Open the side navigation */
function openNav() {
    sidenav.classList.add("active");
}

/* Close the side navigation with width = 0 */
function closeNav() {
    sidenav.classList.remove("active");
}