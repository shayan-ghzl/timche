const addPointClick = new Event("click");
var node;
function checkCondition(input, container) {
    if (input.value.trim() == '' || container.querySelectorAll(".point-item").length > 4)
        return false;
    else {
        return true;
    }
}
// -----------------------------------BAD POINT ADD START-----------------------------------
var inpPointBad = document.querySelector('.group-bad-points .input-group input');
var addPointBtnBad = document.querySelector('.group-bad-points .input-group button');
var pointBadContainer = document.querySelector('.group-bad-points');
inpPointBad.addEventListener('keydown', (e) => {
    if (e.keyCode == 13) {
        e.preventDefault();
        addPointBtnBad.dispatchEvent(addPointClick);
    }
});
addPointBtnBad.addEventListener('click', () => {
    if (checkCondition(inpPointBad, pointBadContainer)) {
        node = document.createElement("DIV");
        node.className = "point-item";
        node.innerHTML = `<span>${inpPointBad.value}</span><button type="button"><img src="assets/img/svg-icon/remove-bpoint.svg" width="18" alt="remove icon"></button>`;
        pointBadContainer.appendChild(node);
        inpPointBad.value = "";
        node.querySelector("button").addEventListener("click", (e) => {
            e.currentTarget.parentElement.remove();
        });
    }
});
// -----------------------------------BAD POINT ADD END-----------------------------------
// -----------------------------------GOOD POINT ADD START-----------------------------------
var inpPointGood = document.querySelector('.group-good-points .input-group input');
var addPointBtnGood = document.querySelector('.group-good-points .input-group button');
var pointGoodContainer = document.querySelector('.group-good-points');
inpPointGood.addEventListener('keydown', (e) => {
    if (e.keyCode == 13) {
        e.preventDefault();
        addPointBtnGood.dispatchEvent(addPointClick);
    }
});
addPointBtnGood.addEventListener('click', () => {
    if (checkCondition(inpPointGood, pointGoodContainer)) {
        node = document.createElement("DIV");
        node.className = "point-item";
        node.innerHTML = `<span>${inpPointGood.value}</span><button type="button"><img src="assets/img/svg-icon/remove-gpoint.svg" width="18" alt="remove icon"></button>`;
        pointGoodContainer.appendChild(node);
        inpPointGood.value = "";
        node.querySelector("button").addEventListener("click", (e) => {
            e.currentTarget.parentElement.remove();
        });
    }
});
// -----------------------------------GOOD POINT ADD END-----------------------------------
// ----------textarea validation form start----------
var txtara = document.getElementById("main_comment_text");

txtara.addEventListener("invalid", (e) => {
    if (txtara.validity.valueMissing) {
        txtara.setCustomValidity("متن وارد نشده است");
        txtara.classList.add('textara_danger_invalid');
    } else if (txtara.value.trim().length < 5) {
        txtara.setCustomValidity("متن نقد و بررسی شما باید بین ۵ تا ۱۰۰۰ کاراکتر باشد");
        txtara.classList.add('textara_danger_invalid');
    }
});
// it is typing right now so do not show 
txtara.addEventListener("input", (e) => {
    if(!txtara.checkValidity()){
        if (txtara.validity.valueMissing) {
            txtara.setCustomValidity("متن وارد نشده است");
        }else if (txtara.value.trim().length < 5) {
            txtara.setCustomValidity("متن نقد و بررسی شما باید بین ۵ تا ۱۰۰۰ کاراکتر باشد");
        }else{
            txtara.setCustomValidity("");
        }
    }
    txtara.classList.remove('textara_danger_invalid');
});
// ----------textarea validation form ends----------
//  ------------input range listener change start------------
var rangInpAll = document.querySelectorAll('input[type="range"]');
for (var b = 0; b < rangInpAll.length; b++) {
    rangInpAll[b].addEventListener('input', (e) => {
        var rangInp = e.target;

        switch (rangInp.value) {
            case "1":
                rangInp.nextElementSibling.innerHTML = "بد"
                break;
            case "2":
                rangInp.nextElementSibling.innerHTML = "معمولی"
                break;
            case "3":
                rangInp.nextElementSibling.innerHTML = "متوسط"
                break;
            case "4":
                rangInp.nextElementSibling.innerHTML = "خوب"
                break;
            default:
                rangInp.nextElementSibling.innerHTML = "عالی"
        }
    });
}
//  ------------input range listener change end------------
