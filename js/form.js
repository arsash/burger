const orderForm = document.querySelector('.form__inputs');
const sendBtn = document.querySelector('.order__btn');
const formServer = 'https://webdev-api.loftschool.com/sendmail';

sendBtn.addEventListener('click', function (e) {
    e.preventDefault();

    if(validateForm(orderForm)){

        const data = {
            name: orderForm.elements.name.value,
            phone: orderForm.elements.phone.value,
            comment: orderForm.elements.comment.value
        }
        const xhr = new XMLHttpRequest();
        xhr.open('POST', formServer);
        xhr.send(JSON.stringify(data));
        xhr.addEventListener('load', () => {
            if(xhr.response.status){
                alert('Данные отправлены!');
            }else{
                $('.modal').css({
                    'display': 'flex'
                });
                // $('body').css({
                //     'background': '#000',
                //     'opacity': 0.5
                // })
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