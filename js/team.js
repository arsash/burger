const menuList = document.querySelector('.team__list');
const menuItem = document.querySelectorAll('.team__item');

menuList.addEventListener('click', function(e) {
    if(e.target.classList.contains('team__person')){
        for(let item of menuItem){
            if(item.classList.contains('active') && item != e.target.parentNode){
                item.classList.remove('active');
            }
        }
    }
    
    e.target.parentNode.classList.toggle('active');
});