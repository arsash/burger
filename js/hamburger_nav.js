const hamburger = document.querySelector('.hamburger');
const hamburgerNav = document.querySelector('.hamburger__nav');
const nav = document.querySelector('.nav');

hamburger.addEventListener('click', function () {
    hamburgerNav.classList.toggle('hamburger__nav--active');
    nav.classList.toggle('nav__show');
});