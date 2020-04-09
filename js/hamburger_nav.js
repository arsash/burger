const hamburger = document.querySelector('.hamburger');
const hamburgerNav = document.querySelector('.hamburger__nav');
const nav = document.querySelector('.nav');
const navLink = document.querySelectorAll('.nav__link');

hamburger.addEventListener('click', function () {
    hamburgerNav.classList.toggle('hamburger__nav--active');
    nav.classList.toggle('nav__show');
});


for(let link of navLink){
    link.addEventListener('click', function(){ 
        hamburgerNav.classList.toggle('hamburger__nav--active');
        nav.classList.toggle('nav__show');
    });
}