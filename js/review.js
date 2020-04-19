$(document).ready(function(){

  const revBtn = $('.review__detail-link');

  revBtn.on('click', (e) => {
    e.preventDefault();
    const btnParent = e.target.parentNode;
    const revText = btnParent.previousElementSibling;
    const revName = revText.previousElementSibling;
    
    $('.modal__review').css({
      'display': 'flex',
      'color': 'white'
    })

    $('.modal__text-head').text(revName.innerText);
    $('.modal__text-content').text(revText.innerText);

  });

  $('.modal__btn').on('click', () => {
    $('.modal__review').css({
      'display': 'none'
    })
  });

});