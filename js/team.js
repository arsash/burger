const member = document.querySelector('.team__person-about');
const personBtn = document.querySelector('.team__person');

personBtn.addEventListener('click', function (e) {
    member.classList.toggle('team__person-about-active');
    personBtn.classList.toggle('team__person-active');
});