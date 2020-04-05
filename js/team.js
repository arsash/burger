$(document).ready(function(){
    $('.team__person').on('click', function(){
        $(this).toggleClass('team__person-active');
        $(this).next().toggleClass('team__person-about-active');
    })
});