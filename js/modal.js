$(document).ready(function(){
    const closeModal = $('.modal__btn');
    const modal = $('.modal');


    closeModal.on('click', function(e) {
        e.preventDefault();
        modal.css({
            'display': 'none'
        })
    })
});

