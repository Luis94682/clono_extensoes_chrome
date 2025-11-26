/* const iconMoon = document.querySelector("#icon-moon");
const iconSun = document.querySelector("#icon-sun");

const darkTargets = document.querySelectorAll(
    "body, .form-group, #input, .extension-navbar p, .menu h4, .card, .card-content p, .card-content p span, .card-btn button"
);

function toggleTheme() {
    darkTargets.forEach(el => el.classList.toggle("dark-mode"));
}

iconMoon.addEventListener("click", toggleTheme);
iconSun.addEventListener("click", toggleTheme);
 */


const iconMoon = document.querySelector("#icon-moon");
const iconSun = document.querySelector("#icon-sun");

const darkTargets = document.querySelectorAll(
    "body, .form-group, #input, .extension-navbar p, .menu h4, .card, .card-content p, .card-content p span, .card-btn button"
);

function toggleTheme() {
    darkTargets.forEach(el => el.classList.toggle("dark-mode"));
}

iconMoon.addEventListener("click", toggleTheme);
iconSun.addEventListener("click", toggleTheme);
