// this function named like : divloading - divalert
let alertSection = document.querySelector(".alert-messages");
var arrayId = [];
function divalert(obj) {
    if (!arrayId.includes(obj.id))
        addAlert(obj.id, obj.state, obj.title, obj.content);
    if (obj.animate === "static") {
        if (alertSection.classList.contains("alert-container-active")) {
            toggleAlert(alertSection.querySelector(`div[data-id='${obj.id}']`));
            setTimeout(() => {
                if (alertSection.querySelectorAll(".alert-active").length == 0)
                    alertSection.classList.remove("alert-container-active");
            }, 2500);
        } else {
            alertSection.classList.add("alert-container-active");
            setTimeout(() => {
                toggleAlert(alertSection.querySelector(`div[data-id='${obj.id}']`));
            }, 50);
        }
    } else {
        if (alertSection.classList.contains("alert-container-active")) {
            fadeAlert(alertSection.querySelector(`div[data-id='${obj.id}']`), obj.timer);
        } else {
            alertSection.classList.add("alert-container-active");
            setTimeout(() => {
                fadeAlert(alertSection.querySelector(`div[data-id='${obj.id}']`), obj.timer);
            }, 50);
        }
    }
}
function addAlert(id, icon, title, content) {
    var node = document.createElement("DIV");
    node.innerHTML = `
    <div class="alert-bg">
                    <img src="assets/img/svg-icon/alert-${icon}.svg" alt="alert icon">
                </div>
                <div class="alert-message">
                    <button type="button"><img src="assets/img/svg-icon/close-filter.svg" alt="close icon"></button>
                    <h6 class="title">${title}</h6>
                    <p class="content">${content}</p>
                    <span class="brand-name">TIMCHE ZARGARI</span>
                </div>
    `;
    node.querySelector("button").addEventListener("click", (e) => {
        var target = e.currentTarget.parentElement.parentElement;
        var index = arrayId.indexOf(target.getAttribute("data-id"));
        if (index > -1) {
            arrayId.splice(index, 1);
        }
        target.remove();
    });
    node.className = `${icon}-alert`;
    node.setAttribute("data-id", id);
    alertSection.appendChild(node);
    arrayId.push(id);
}
var myTimeout;
function fadeAlert(alertState, timer) {
    if (!alertState.classList.contains("alert-display-active")) {
        alertState.classList.add("alert-display-active");
        setTimeout(() => {
            alertState.classList.add("alert-active");
        }, 50);
    } else {
        clearTimeout(myTimeout);
    }
    myTimeout = setTimeout(() => {
        alertState.classList.remove("alert-active");
        setTimeout(() => {
            var index = arrayId.indexOf(alertState.getAttribute("data-id"));
            if (index > -1) {
                arrayId.splice(index, 1);
            }
            alertState.remove();
            if (alertSection.querySelectorAll(".alert-active").length == 0)
                alertSection.classList.remove("alert-container-active");
        }, 2500);
    }, timer);
}
function toggleAlert(alertState) {
    if (alertState.classList.contains("alert-active")) {
        alertState.classList.remove("alert-active");
        setTimeout(() => {
            var index = arrayId.indexOf(alertState.getAttribute("data-id"));
            if (index > -1) {
                arrayId.splice(index, 1);
            }
            alertState.remove();
        }, 2500);
    } else {
        alertState.classList.add("alert-display-active");
        setTimeout(() => {
            alertState.classList.add("alert-active");
        }, 50);
    }
}
// divalert( {"id": "123","state": "failed","title": "hello","content": "hahaha hahaha ","animate": "fade","timer": "5000"});
// var obj = {
//     "id": "",
//     "state": "failed",
//     "title": "",
//     "content": "",
//     "animate": "fade",
//     "timer": "5000",
// }
// var obj = {
//     "id": "",
//     "state": "failed",
//     "title": "",
//     "content": "",
//     "animate": "static",
// }