/*---------------------------VISIBILITY EVENT LISTENER START-------------------*/
document.querySelectorAll("button.o-password-visibility-btn").forEach((element) => {
    element.addEventListener("click", (e) => {
        var btnTarget = e.currentTarget;
        var inputPass = btnTarget.previousElementSibling.previousElementSibling;
        var showPassIcn = btnTarget.children[0];
        var hidePassIcn = btnTarget.children[1];
        if (inputPass.type == "password") {
            inputPass.type = "text";
            hidePassIcn.style.display = "none"
            showPassIcn.style.display = "block"
        } else {
            inputPass.type = "password";
            showPassIcn.style.display = "none"
            hidePassIcn.style.display = "block"
        }
    });
});
/*---------------------------VISIBILITY EVENT LISTENER  END-------------------*/