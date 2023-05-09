

// this is for forgot inputs
let forgotPhoneInput = document.getElementById("forgot-phone-validation-number");
let forgotSubmitBtn = document.getElementById("forgot-btn-validation-code");
let forgotSixDigitGroup = document.querySelector(".o-user-field .forgot-six-digit-group");
let forgotSixDigitInput = document.querySelector('.forgot-six-digit-group input');


forgotSixDigitInput.addEventListener('keydown', (e) => {
    var val = e.target.value;
    setTimeout(() => {
        if (val.length >= 6 && e.keyCode != 8) {
            e.target.value = val.substr(0, 6);
            forgotSubmitBtn.disabled = false;
        }
    });
});

forgotSixDigitInput.addEventListener("input", (e) => {
    if (forgotSixDigitInput.value.trim().length == 6) {
        forgotSubmitBtn.disabled = false;
    } else {
        forgotSubmitBtn.disabled = true;
    }
    forgotSixDigitInput.nextElementSibling.style.display = "none";
});

// this is forgot submition btn event
if (forgotSubmitBtn)
    forgotSubmitBtn.addEventListener("click", (e) => {
        // this is for 6-digit - if a hacker remove disable from btn and submit it 
        if (forgotSixDigitInput.value.trim().length == 6 || forgotSixDigitGroup.classList.contains("d-none")) {
            forgotSixDigitInput.nextElementSibling.style.display = "none";
        } else {
            forgotSixDigitInput.nextElementSibling.style.display = "block";
            forgotSixDigitInput.focus();
        }
        // this is for phone input
        if (validationProcess(forgotPhoneInput.value.trim(), "PhoneInput") && forgotSixDigitGroup.classList.contains("d-none")) {
            forgotSubmitBtn.innerText = "ثبت";
            forgotSubmitBtn.disabled = true;
            forgotPhoneInput.readOnly = true;
            forgotSixDigitGroup.classList.remove("d-none");
            if (!isCounterBeganForgot)
                startCountDownForgot();
        }
        if (!validationProcess(forgotPhoneInput.value.trim(), "PhoneInput")) {
            forgotPhoneInput.nextElementSibling.style.display = "block";
            forgotPhoneInput.focus();
        }
    });

// this is for countdown forgot
let spanCounterForgot = document.getElementById("o-forgot-countdown-timer");
var countDownDateForgot = 120000;
var isCounterBeganForgot = false;
// this is countdown interval function forgot
var startCountDownForgot = () => {
    var x = setInterval(function () {
        isCounterBeganForgot = true;
        countDownDateForgot = countDownDateForgot - 1000;

        var minutes = Math.floor((countDownDateForgot % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((countDownDateForgot % (1000 * 60)) / 1000);

        if (minutes.toString().length == 1)
            minutes = `0${minutes}`;
        if (seconds.toString().length == 1)
            seconds = `0${seconds}`;

        spanCounterForgot.innerHTML = minutes + ":" + seconds;

        if (countDownDateForgot < 0) {
            clearInterval(x);
            spanCounterForgot.innerHTML = "02:00";
            isCounterBeganForgot = false;
            countDownDateForgot = 120000;
            forgotSixDigitGroup.classList.add("d-none");
            forgotPhoneInput.readOnly = false;
            forgotSubmitBtn.innerText = "ارسال کد فعالسازی";
            forgotSubmitBtn.disabled = false;
            forgotSixDigitInput.value = "";

        }
    }, 1000);
}
// ------------------------------this is validation part for popup fields start------------------------------
function validationProcess(input, type) {
    if (type == "PhoneInput") {
        if (input.length == 11 && input[0] == "0" && input[1] == "9")
            return true;
    }
    return false;
}
if (forgotPhoneInput)
    forgotPhoneInput.addEventListener("input", (e) => {
        forgotPhoneInput.nextElementSibling.style.display = "none";
    });

// this is for user login form
let inpLoginUsername = document.querySelector('#login-user-form .o-input-group input[type=number]');
let inpLoginPassword = document.querySelector('#login-user-form .o-input-group input[type=password]');
if(document.getElementById('login-user-form'))
document.getElementById('login-user-form').addEventListener("submit", (e) => {
    // this should be form last to first because of focus periority
    if (inpLoginPassword.value.trim() == '') {
        inpLoginPassword.nextElementSibling.style.display = "block";
        inpLoginPassword.focus();
        e.preventDefault();
    }
    if (inpLoginUsername.value.trim() == '') {
        inpLoginUsername.nextElementSibling.style.display = "block";
        inpLoginUsername.focus();
        e.preventDefault();
    }
});
if(inpLoginUsername)
inpLoginUsername.addEventListener('input', () => {
    inpLoginUsername.nextElementSibling.style.display = "none";
});
if(inpLoginPassword)
inpLoginPassword.addEventListener('input', () => {
    inpLoginPassword.nextElementSibling.style.display = "none";
});
// this is for user register form
let inpRegisterUsername = document.querySelector('#register-form .o-input-group:first-of-type input');
let inpRegisterPassword = document.querySelector('#register-form .o-input-group input[type=password]');
let inpRegisterMobileNum = document.querySelector('#register-form .o-input-group:nth-of-type(2) input');
let inpRegisterEmail = document.querySelector('#register-form .o-input-group:nth-of-type(3) input');
let inpRegisterDigit = document.querySelector('#register-form .o-input-group .o-input-six-digit');
let mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
// this is for countdown register
let spanCounterRegister = document.getElementById("o-register-countdown-timer");
var countDownDateRegister = 120000;
var isCounterBeganRegister = false;
// this is countdown interval function register
var startCountDownRegister = () => {
    var y = setInterval(function () {
        isCounterBeganRegister = true;
        countDownDateRegister = countDownDateRegister - 1000;

        var minutes = Math.floor((countDownDateRegister % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((countDownDateRegister % (1000 * 60)) / 1000);

        if (minutes.toString().length == 1)
            minutes = `0${minutes}`;
        if (seconds.toString().length == 1)
            seconds = `0${seconds}`;

        spanCounterRegister.innerHTML = minutes + ":" + seconds;

        if (countDownDateRegister < 0) {
            clearInterval(y);
            spanCounterRegister.innerHTML = "02:00";
            inpRegisterMobileNum.readOnly = false;
            registerSixDigitGroup.classList.add("d-none");
            registerSubmitBtn.innerText = "ارسال کد فعالسازی";
            registerSubmitBtn.disabled = false;
            isCounterBeganRegister = false;
            countDownDateRegister = 120000;
            inpRegisterDigit.value = "";

        }
    }, 1000);
}

// this is for register inputs
let registerSubmitBtn = document.getElementById("register-btn-validation-code");
let registerSixDigitGroup = document.querySelector("#register-form .register-six-digit-group");
if (inpRegisterDigit)
    inpRegisterDigit.addEventListener("input", (e) => {
        if (inpRegisterDigit.value.trim().length == 6) {
            registerSubmitBtn.disabled = false;
        } else {
            registerSubmitBtn.disabled = true;
        }
        inpRegisterDigit.nextElementSibling.style.display = "none";
    });
// this is register submition btn event
if (registerSubmitBtn)
    registerSubmitBtn.addEventListener("click", (e) => {
        // this is for 6-digit - if a hacker remove disable from btn and submit it 
        if (inpRegisterDigit.value.trim().length == 6 || registerSixDigitGroup.classList.contains("d-none")) {
            inpRegisterDigit.nextElementSibling.style.display = "none";
        } else {
            inpRegisterDigit.nextElementSibling.style.display = "block";
        }
        // this is for phone input
        if (validationProcess(inpRegisterMobileNum.value.trim(), "PhoneInput") && registerSixDigitGroup.classList.contains("d-none") && inpRegisterUsername.value.trim() != '' && inpRegisterPassword.value.trim() != '') {
            registerSubmitBtn.innerText = "ثبت نام";
            registerSubmitBtn.disabled = true;
            registerSixDigitGroup.classList.remove("d-none");
            inpRegisterMobileNum.readOnly = true;
            if (!isCounterBeganRegister)
                startCountDownRegister();
        }
        if (!validationProcess(inpRegisterMobileNum.value.trim(), "PhoneInput")) {
            inpRegisterMobileNum.nextElementSibling.style.display = "block";
        }
    });


document.getElementById('register-form').addEventListener("submit", (e) => {
    // this should be form last to first because of focus periority
    if (inpRegisterDigit.value.trim().length != 6) {
        inpRegisterDigit.nextElementSibling.style.display = "block";
        inpRegisterDigit.focus();
        e.preventDefault();
    }
    if (inpRegisterPassword.value.trim() == '') {
        inpRegisterPassword.nextElementSibling.style.display = "block";
        inpRegisterPassword.focus();
        e.preventDefault();
    }
    // if (inpRegisterEmail.value.trim() == '' || !inpRegisterEmail.value.match(mailformat)) {
    //     inpRegisterEmail.nextElementSibling.style.display = "block";
    //     inpRegisterEmail.focus();
    //     e.preventDefault();
    // }
    if (inpRegisterMobileNum.value.trim() == '' || !validationProcess(inpRegisterMobileNum.value.trim(), "PhoneInput")) {
        inpRegisterMobileNum.nextElementSibling.style.display = "block";
        inpRegisterMobileNum.focus();
        e.preventDefault();
    }
    if (inpRegisterUsername.value.trim() == '') {
        inpRegisterUsername.nextElementSibling.style.display = "block";
        inpRegisterUsername.focus();
        e.preventDefault();
    }
});

inpRegisterUsername.addEventListener('input', () => {
    inpRegisterUsername.nextElementSibling.style.display = "none";
});
inpRegisterPassword.addEventListener('input', () => {
    inpRegisterPassword.nextElementSibling.style.display = "none";
});
inpRegisterMobileNum.addEventListener('input', () => {
    inpRegisterMobileNum.nextElementSibling.style.display = "none";
});
// inpRegisterEmail.addEventListener('input', () => {
//     inpRegisterEmail.nextElementSibling.style.display = "none";
// });

inpRegisterDigit.addEventListener('keydown', (e) => {
    var val = e.target.value;
    setTimeout(() => {
        if (val.length >= 6 && e.keyCode != 8) {
            e.target.value = val.substr(0, 6);
            registerSubmitBtn.disabled = false;
        }
    });
});

document.querySelectorAll('input[type="number"]').forEach((element) => {
    element.addEventListener('keydown', (e) => {
        var codeKey = e.keyCode;
        if (!((codeKey >= 48 && codeKey <= 57) || (codeKey >= 96 && codeKey <= 105) || codeKey == 8 || codeKey == 9)) {
            e.preventDefault();
            return false;
        }
    });
});
// -------------------------------this is validation part for popup fields end-------------------------------
// ------------------------- close register popup by click outside ---------------------
let registerForm = document.querySelector("section.register-form-container .c-register-form");
let registerSection = document.querySelector("section.register-form-container");
let openRegisterBtn = document.querySelector(".o-user-submition .open-register");
document.addEventListener("click", function (e) {
    if (!registerForm.contains(e.target) && registerSection.classList.contains("register-form-show") && !openRegisterBtn.contains(e.target))
        registerSection.classList.toggle("register-form-show");
});
if(openRegisterBtn)
openRegisterBtn.addEventListener("click", (e) => {
    e.preventDefault();
    registerSection.classList.toggle("register-form-show");
    document.querySelectorAll(".drop_container .open_drop_menu").forEach((element) => {
        element.classList.remove("open_drop_menu");
    });
});
// this is for change password toggle
let forgotInnerPopup = document.querySelector(".user_popup_container .drop_menu .user_popup_inner .forgot-inner-popup");
let loginInnerPopup = document.querySelector(".user_popup_container .drop_menu .user_popup_inner .login-inner-popup");
document.querySelector(".user_popup_container .drop_menu .user_popup_inner .o-user-meta .forgot-password").addEventListener("click" , (e) => {
    loginInnerPopup.style.display = "none";
    forgotInnerPopup.style.display = "block";
});
document.querySelector(".user_popup_container .user_popup_inner  .back-btn").addEventListener("click" , (e) => {
    forgotInnerPopup.style.display = "none";
    loginInnerPopup.style.display = "block";
});