// all requir field 
// The string must be six characters or longer
// contain at least 1 uppercase character (A-Z)
// contain at least 1 lowercase character (a-z)
// contains only a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-
let passwordRegex = "^(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]{6,}$";
let newPassInp = document.querySelectorAll(".change-password  .require .new-pass");
let allRequiredInp = document.querySelectorAll(".change-password .require input");
document.getElementById("change-password-form").addEventListener("submit", (e) => {
    var indexStatus = [];
    allRequiredInp.forEach((Element, index) => {
        if (!Element.value.match(passwordRegex)) {
            Element.nextElementSibling.style.display = "block";
            indexStatus.push(index);
            e.preventDefault();
        }
        if (allRequiredInp[1].value !== allRequiredInp[2].value) {
            allRequiredInp[1].nextElementSibling.style.display = "block";
            allRequiredInp[2].nextElementSibling.style.display = "block";
            allRequiredInp[1].nextElementSibling.innerText = "تکرار کلمه عبور برابر نیستند";
            allRequiredInp[2].nextElementSibling.innerText = "تکرار کلمه عبور برابر نیستند";
            indexStatus.push(1);
            e.preventDefault();
        } else {
            allRequiredInp[1].nextElementSibling.innerText = "حداقل 6 کاراکتر و شامل حرف بزرگ و کوچک";
            allRequiredInp[2].nextElementSibling.innerText = "حداقل 6 کاراکتر و شامل حرف بزرگ و کوچک";
        }
        Element.addEventListener('input', (e) => {
            if (e.currentTarget.classList.contains("new-pass")) {
                newPassInp.forEach((Element2) => {
                    Element2.nextElementSibling.style.display = "none";
                });
            } else {
                Element.nextElementSibling.style.display = "none";
            }
        });
        if (indexStatus.length != 0) {
            indexStatus.sort();
            allRequiredInp[indexStatus[0]].focus();
        }


    });

});
