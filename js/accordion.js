const menuList = document.querySelector('.menu-container');
const menuItem = document.querySelectorAll('.menu__item');

function accordeon(menuContainer, menuTarget) {
    menuContainer.addEventListener('click', function(e) {

        for(let item of menuTarget){
            if(item.classList.contains('active') && item != e.target.parentNode.parentNode){
                item.classList.remove('active');
            }
        }
    
        e.target.parentNode.parentNode.classList.toggle('active');
    });    
};

accordeon(menuList, menuItem);