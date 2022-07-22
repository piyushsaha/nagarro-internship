const usernameInput = document.querySelector('#usernameInput');
const emailInput = document.querySelector('#emailInput');
const phoneInput = document.querySelector('#phoneInput');
const passwordInput = document.querySelector('#passwordInput');
const confirmPasswordInput = document.querySelector('#confirmPasswordInput');
const submitBtn = document.querySelector('#submitBtn');

const checkUsername = () => {
    const usernameRegex = /^[a-zA-Z0-9_]*$/i;
    if(usernameInput.value.length < 5) {
        document.querySelector('#usernameError').innerHTML = 'The length of username must be at least 5';
        return false;
    }
    if(!usernameRegex.test(usernameInput.value)) {
        document.querySelector('#usernameError').innerHTML = 'Username can contain alphabets, numbers and underscore only';
        return false;
    }
    else {
        document.querySelector('#usernameError').innerHTML = '';
        return true;
    }
}

const checkEmail = () => {
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i;
    if(!emailRegex.test(emailInput.value)) {
        document.querySelector('#emailError').innerHTML = 'Invalid email address';
        return false;
    }
    else {
        document.querySelector('#emailError').innerHTML = '';
        return true;
    }
    
}

const checkPhoneNumber = () => {
    if(phoneInput.value.length !== 10) {
        document.querySelector('#phoneError').innerHTML = 'Invalid phone number';
        return false;
    }
    else {
        document.querySelector('#phoneError').innerHTML = '';
        return true;
    }
}

const checkPassword = () => {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if(!passwordRegex.test(passwordInput.value)) {
        document.querySelector('#passwordError').innerHTML = 'Password must be at least eight characters having at least one letter and one number';
        return false;
    }
    else {
        document.querySelector('#passwordError').innerHTML = '';
        return true;
    }
}

const checkConfirmPassword = () => {
    if(confirmPasswordInput.value !== passwordInput.value) {
        document.querySelector('#confirmPasswordError').innerHTML = 'Passwords don\'t match!';
        return false;
    }
    else {
        document.querySelector('#confirmPasswordError').innerHTML = '';
        return true;
    }
}



usernameInput.addEventListener('keyup', () => {
    checkUsername();
});
emailInput.addEventListener('keyup', () => {
    checkEmail();
})
phoneInput.addEventListener('keyup', () => {
    checkPhoneNumber();
})
passwordInput.addEventListener('keyup', () => {
    checkPassword();
})
confirmPasswordInput.addEventListener('keyup', () => {
    checkConfirmPassword();
})

submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if(checkUsername() && checkEmail() && checkPhoneNumber() && checkPassword() && checkConfirmPassword()) {
        alert('Form values are correct and submission is successful!');
    }
    else {
        alert('Please fill the form correctly!');
    }
})