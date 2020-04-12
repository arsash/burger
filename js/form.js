const orderForm = document.querySelector('#myForm');
const sendBtn = document.querySelector('.order__btn');
const formServer = 'https://webdev-api.loftschool.com/sendmail';

orderForm.addEventListener('submit', function (e) {
    e.preventDefault();

    if(validateForm(orderForm)){

        const data = new FormData();
              data.append('name', orderForm.elements.name.value);
              data.append('phone', orderForm.elements.phone.value);
              data.append('comment', orderForm.elements.comment.value);
              data.append('to', 'a.aslanyan2020@gmail.com');
        
        const xhr = new XMLHttpRequest();
        xhr.open('POST', formServer);
        xhr.send(data);
        xhr.addEventListener('load', () => {
            if(xhr.response.status = 200){
                $('.modal').css({
                    'display': 'flex'
                });
                $('.modal__text-succes').text('заказ успешно отправлен');
            }else{
                $('.modal').css({
                    'display': 'flex'
                });
                $('.modal__text-error').text('ошибка отправки заказа');
            }
            
        })
    }
    
});

function validateForm(form) {
    let valid = true;

    if(!validateField(orderForm.elements.name)){
        valid = false;
    }

    if(!validateField(orderForm.elements.phone)){
        valid = false;
    }

    if(!validateField(orderForm.elements.comment)){
        valid = false;
    }

    return valid;
};

function validateField(field){
    console.log(field.validationMessage);
    return field.checkValidity();
};