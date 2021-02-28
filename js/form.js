const form = document.getElementById('form');

const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

function showError(input, message){
    const formControl = input.parentElement;
    formControl.classList = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText =  message;
}

function showSuccess(input){
    const formControl = input.parentElement;
    formControl.classList = 'form-control success';
}

// check email is valid
function isValidEmail(email){
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function checkRequired(inputArr){
    inputArr.forEach(function(input){
        if(input.value.trim() === ''){
            if (input.id === 'password2') {
                showError(input, `Confirm Password is required`);
        }else{
            showError(input, `${getFieldName(input)} is required`);
        }
           
        }else{
            showSuccess(input);
        }
        

        console.log(input.id);
    });
}

function checkLength(input, min, max){
    if (input.value.length < min) {
        showError(input, `${getFieldName(input)} must be atleast ${min} character`);
    }else if(input.value.length > max){
        showError(input, `${getFieldName(input)} must be less than ${max} character`);
    }
}

function checkPasswordMatch(input1, input2){
    if (input1.value !== input2.value) {
        showError(input2, `Password is not matching` );
    }
}

function isValidEmail(input){
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if(re.test(input.value.trim())) {
        showSuccess(input);
    }else{
        showError(input, `Email is not valid`);
    }
}


function getFieldName(input){
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}




form.addEventListener('submit', function(e) {
    e.preventDefault();

    checkRequired([username, email, password, password2]);
    checkLength(username, 3, 15);
    checkLength(password, 6, 25);
    checkPasswordMatch(password, password2);
    isValidEmail(email);

});