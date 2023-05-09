// // -------------------------------this is validation part for popup fields end-------------------------------
document.querySelectorAll('input[type="number"]').forEach((element) => {
    element.addEventListener('keydown', (e) => {
        var codeKey = e.keyCode;
        if (!((codeKey >= 48 && codeKey <= 57) || (codeKey >= 96 && codeKey <= 105) || codeKey == 8 || codeKey == 9)) {
            e.preventDefault();
            return false;
        }
    });
});
function phoneValidate(input) {
    if (input.length == 11 && input[0] == "0" && input[1] == "9")
        return false;
    return true;
}
// we have two conter interval
let registerCountdownSpan = document.getElementById("o-register-countdown-timer");
var registerCountdownTime = 120000;
var registerCountdownBegan = false;
var registerCountdown = () => {
    var y = setInterval(function () {
        registerCountdownBegan = true;
        registerCountdownTime = registerCountdownTime - 1000;

        var minutes = Math.floor((registerCountdownTime % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((registerCountdownTime % (1000 * 60)) / 1000);

        if (minutes.toString().length == 1)
            minutes = `0${minutes}`;
        if (seconds.toString().length == 1)
            seconds = `0${seconds}`;

        registerCountdownSpan.innerHTML = minutes + ":" + seconds;

        if (registerCountdownTime < 0) {
            clearInterval(y);
            registerCountdownSpan.innerHTML = "02:00";
            inpRegisterPhone.readOnly = false;
            groupRegisterDigit.classList.add("d-none");
            btnRegister.innerText = "ارسال کد فعالسازی";
            btnRegister.disabled = false;
            registerCountdownBegan = false;
            registerCountdownTime = 120000;
            inpRegisterDigit.value = "";

        }
    }, 1000);
};
let forgotPassCountdownSpan = document.getElementById("o-forgot-countdown-timer");
var forgotPassCountdownTime = 120000;
var forgotPassCountdownBegan = false;
var forgotPassCountdown = () => {
    var x = setInterval(function () {
        forgotPassCountdownBegan = true;
        forgotPassCountdownTime = forgotPassCountdownTime - 1000;

        var minutes = Math.floor((forgotPassCountdownTime % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((forgotPassCountdownTime % (1000 * 60)) / 1000);

        if (minutes.toString().length == 1)
            minutes = `0${minutes}`;
        if (seconds.toString().length == 1)
            seconds = `0${seconds}`;

        forgotPassCountdownSpan.innerHTML = minutes + ":" + seconds;

        if (forgotPassCountdownTime < 0) {
            clearInterval(x);
            forgotPassCountdownSpan.innerHTML = "02:00";
            inpForgotPhone.readOnly = false;
            groupForgotDigit.classList.add("d-none");
            btnForgot.innerText = "ارسال کد فعالسازی";
            btnForgot.disabled = false;
            forgotPassCountdownBegan = false;
            forgotPassCountdownTime = 120000;
            inpForgotDigit.value = "";

        }
    }, 1000);
};
// this is for section
// let userItemSection = document.querySelector("#user-login-register .user-item-section");
let registerFormSection = document.querySelector("#user-login-register .register-form-section");
let loginFormSection = document.querySelector("#user-login-register .login-form-section");
let forgotPassSection = document.querySelector("#user-login-register .forgot-password-section");
// this is switch between sections
document.querySelector("#user-login-register .login-form-section form#login-user-form .o-user-submition p .open-register").addEventListener("click", (e) => {
    e.preventDefault();
    loginFormSection.classList.add("d-none");
    registerFormSection.classList.remove("d-none");
});
document.querySelector("#user-login-register .register-form-section form#register-form .o-register-form-submition p:first-of-type .open-login").addEventListener("click", (e) => {
    e.preventDefault();
    registerFormSection.classList.add("d-none");
    loginFormSection.classList.remove("d-none");
});
document.querySelector("#user-login-register .login-form-section form#login-user-form .o-user-field .o-user-meta .forgot-password").addEventListener("click", (e) => {
    e.preventDefault();
    loginFormSection.classList.add("d-none");
    forgotPassSection.classList.remove("d-none");
});
document.querySelector("#user-login-register .forgot-password-section .o-user-image .back-btn").addEventListener("click", (e) => {
    forgotPassSection.classList.add("d-none");
    loginFormSection.classList.remove("d-none");
});
document.querySelector("#user-login-register .user-item-section .o-user-image .back-btn").addEventListener("click", (e) => {
    window.history.back();
});
document.querySelector("#user-login-register .login-form-section form#login-user-form .o-user-image .back-btn").addEventListener("click", (e) => {
    window.history.back();
});
document.querySelector("#user-login-register .register-form-section form#register-form .back-btn").addEventListener("click", (e) => {
    window.history.back();
});
// this is prevent submit for validation check LOGIN FORM
let inpLoginUsername = document.querySelector("#user-login-register .login-form-section form#login-user-form .o-user-field .o-input-group:first-child input");
let inpLoginPassword = document.querySelector("#user-login-register .login-form-section form#login-user-form .o-user-field .o-input-group:nth-child(2) input");
document.querySelector("#user-login-register .login-form-section form#login-user-form").addEventListener("submit", (e) => {
    //  this should be form last to first because of focus periority
    if (inpLoginPassword.value.trim() == '') {
        inpLoginPassword.nextElementSibling.style.display = "block";
        inpLoginPassword.focus();
        e.preventDefault();
    }
    if (phoneValidate(inpLoginUsername.value.trim())) {
        inpLoginUsername.nextElementSibling.style.display = "block";
        inpLoginUsername.focus();
        e.preventDefault();
    }
});
inpLoginPassword.addEventListener('input', () => {
    inpLoginPassword.nextElementSibling.style.display = "none";
});
inpLoginUsername.addEventListener('input', () => {
    inpLoginUsername.nextElementSibling.style.display = "none";
});
// this is prevent submit for validation check REGISTER FORM
let inpRegisterName = document.querySelector("#user-login-register .register-form-section form#register-form > div .o-input-group:nth-child(2) input");
let inpRegisterPhone = document.querySelector("#user-login-register .register-form-section form#register-form > div .o-input-group:nth-child(3) input");
// let inpRegisterEmail = document.querySelector("#user-login-register .register-form-section form#register-form > div .o-input-group:nth-child(4) input");
let inpRegisterPass = document.querySelector("#user-login-register .register-form-section form#register-form > div .o-input-group:nth-child(5) input");
let inpRegisterDigit = document.querySelector("#user-login-register .register-form-section form#register-form > div .o-input-group:nth-child(6) input");
let groupRegisterDigit = document.querySelector("#user-login-register .register-form-section form#register-form > div .register-six-digit-group");
let btnRegister = document.querySelector("#user-login-register .register-form-section form#register-form .o-register-form-submition button");
// let mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

document.querySelector("#user-login-register .register-form-section form#register-form").addEventListener("submit", (e) => {
    //  this should be form last to first because of focus periority
    if (inpRegisterDigit.value.trim().length != 6) {
        // inpRegisterDigit.nextElementSibling.style.display = "block";
        inpRegisterDigit.focus();
        e.preventDefault();
    }
    if (inpRegisterPass.value.trim() == '') {
        inpRegisterPass.nextElementSibling.style.display = "block";
        inpRegisterPass.focus();
        e.preventDefault();
    }
    // if (!inpRegisterEmail.value.match(mailformat)) {
    //     inpRegisterEmail.nextElementSibling.style.display = "block";
    //     inpRegisterEmail.focus();
    //     e.preventDefault();
    // }
    if (phoneValidate(inpRegisterPhone.value.trim())) {
        inpRegisterPhone.nextElementSibling.style.display = "block";
        inpRegisterPhone.focus();
        e.preventDefault();
    }
    if (inpRegisterName.value.trim() == '') {
        inpRegisterName.nextElementSibling.style.display = "block";
        inpRegisterName.focus();
        e.preventDefault();
    }

});
btnRegister.addEventListener("click", (e) => {

    if (inpRegisterDigit.value.trim().length == 6 || groupRegisterDigit.classList.contains("d-none")) {
        inpRegisterDigit.nextElementSibling.style.display = "none";
    } else {
        inpRegisterDigit.nextElementSibling.style.display = "block";
    }
    if (inpRegisterPass.value.trim() != '' && !phoneValidate(inpRegisterPhone.value.trim()) && inpRegisterName.value.trim() != '' && groupRegisterDigit.classList.contains("d-none")) {
        btnRegister.innerText = "ثبت نام";
        btnRegister.disabled = true;
        groupRegisterDigit.classList.remove("d-none");
        inpRegisterPhone.readOnly = true;
        if (!registerCountdownBegan)
            registerCountdown();
    }
    if (phoneValidate(inpRegisterPhone.value.trim())) {
        inpRegisterPhone.nextElementSibling.style.display = "block";
        inpRegisterPhone.focus();
    }

});
inpRegisterDigit.addEventListener("keydown", (e) => {
    var val = e.target.value;
    setTimeout(() => {
        if (val.length >= 6 && e.keyCode != 8) {
            e.target.value = val.substr(0, 6);
            btnRegister.disabled = false;
        }
    });
});
inpRegisterDigit.addEventListener('input', () => {
    if (inpRegisterDigit.value.trim().length == 6) {
        btnRegister.disabled = false;
    } else {
        btnRegister.disabled = true;
    }
    inpRegisterDigit.nextElementSibling.style.display = "none";
});
inpRegisterPass.addEventListener('input', () => {
    inpRegisterPass.nextElementSibling.style.display = "none";
});
// inpRegisterEmail.addEventListener('input', () => {
//     inpRegisterEmail.nextElementSibling.style.display = "none";
// });
inpRegisterPhone.addEventListener('input', () => {
    inpRegisterPhone.nextElementSibling.style.display = "none";
});
inpRegisterName.addEventListener('input', () => {
    inpRegisterName.nextElementSibling.style.display = "none";
});
// this is prevent submit for validation check FORGOT PASSWORD FORM
let inpForgotPhone = document.querySelector("#user-login-register .forgot-password-section .o-user-field .o-input-group #forgot-phone-validation-number");
let inpForgotDigit = document.querySelector("#user-login-register .forgot-password-section .o-user-field .o-input-group input.o-input-six-digit");
let groupForgotDigit = document.querySelector("#user-login-register .forgot-password-section .o-user-field .forgot-six-digit-group");
let btnForgot = document.querySelector("#user-login-register .forgot-password-section .o-user-submition button");

btnForgot.addEventListener("click", (e) => {


    if (inpForgotDigit.value.trim().length == 6 || groupForgotDigit.classList.contains("d-none")) {
        inpForgotDigit.nextElementSibling.style.display = "none";
    } else {
        inpForgotDigit.nextElementSibling.style.display = "block";
        inpForgotDigit.focus();
    }
    if (!phoneValidate(inpForgotPhone.value.trim()) && groupForgotDigit.classList.contains("d-none")) {
        btnForgot.innerText = "ثبت";
        btnForgot.disabled = true;
        inpForgotPhone.readOnly = true;
        groupForgotDigit.classList.remove("d-none");
        if (!forgotPassCountdownBegan)
            forgotPassCountdown();
    }
    if (phoneValidate(inpForgotPhone.value.trim())) {
        inpForgotPhone.nextElementSibling.style.display = "block";
        inpForgotPhone.focus();
    }

});
inpForgotPhone.addEventListener('input', () => {
    inpForgotPhone.nextElementSibling.style.display = "none";
});
inpForgotDigit.addEventListener('input', () => {
    if (inpForgotDigit.value.trim().length == 6) {
        btnForgot.disabled = false;
    } else {
        btnForgot.disabled = true;
    }
    inpForgotDigit.nextElementSibling.style.display = "none";
});
inpForgotDigit.addEventListener("keydown", (e) => {
    var val = e.target.value;
    setTimeout(() => {
        if (val.length >= 6 && e.keyCode != 8) {
            e.target.value = val.substr(0, 6);
            btnForgot.disabled = false;
        }
    });
});