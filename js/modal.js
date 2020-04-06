const rewBlock = document.querySelector('.reviews__list');
const wrapper = document.querySelector('.wrapper');

const modal = document.createElement('div');
const modalName = document.createElement('h3');
const modalText = document.createElement('p');
const modalBtn = document.createElement('button');

modal.classList.add('modal');
modalName.classList.add('modal__name');
modalText.classList.add('modal__text');
modalBtn.classList.add('modal__btn')

modalBtn.textContent = 'Закрыть'

modal.appendChild(modalName);
modal.appendChild(modalText);
modal.appendChild(modalBtn);



rewBlock.addEventListener('click', function(e) {
if (e.target.classList.contains('review__detail-link')) {
  //открытие модального окна
  wrapper.appendChild(modal);
  
  //наполнение нужным контентом
 const innerName = e.target.parentNode.querySelector('.review__user').textContent;
  const innerText = e.target.parentNode.querySelector('.review__text').textContent;
  modalName.textContent = innerName;
  modalText.textContent = innerText;
}
})

modalBtn.addEventListener('click', function(){
   modalName.textContent = '';
   modalText.textContent = '';
   wrapper.removeChild(modal);
})