const accMenuBtn = document.querySelector('.menu__item-btn');
const descBlock = document.querySelector('.menu__desc');
console.log(descBlock);
accMenuBtn.addEventListener('click', function(e) {
    e.preventDefault();
    descBlock.classList.toggle('menu__desc--active');
});