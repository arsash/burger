const accMenu = document.querySelectorAll('.menu__item');
const menu = document.querySelector('.menu-container');

function accordeon(acc, team) {
    // menu.addEventListener('click', function(e) {

    //     for(let item of accMenu){
    //         if(item.classList.contains('active') && item != e.target.parentNode.parentNode){
    //             item.classList.remove('active');
    //         }
    //     }
    
    //     e.target.parentNode.parentNode.classList.toggle('active');
    // });    
}

menu.addEventListener('click', function(e) {

    for(let item of accMenu){
        if(item.classList.contains('active') && item != e.target.parentNode.parentNode){
            item.classList.remove('active');
        }
    }

    e.target.parentNode.parentNode.classList.toggle('active');
});