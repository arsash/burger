const menuTeamList = document.querySelector('.team__list');
const menuTeamItem = document.querySelectorAll('.team__item');

menuTeamList.addEventListener('click', function(e) {
    if(e.target.classList.contains('team__person')){
        for(let item of menuTeamItem){
            if(item.classList.contains('active') && item != e.target.parentNode){
                item.classList.remove('active');
            }
        }
        e.target.parentNode.classList.toggle('active');
    }
});