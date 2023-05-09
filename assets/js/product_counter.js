let productCounterInit = (function productCounter() {
    const eventObject = new Event("blur");
    var input, minusBtn;

    document.querySelectorAll(".so_item_counter:not(.disable-counter) .so_focus_input").forEach((element) => {
        element.addEventListener("click", (e) => {
            var theInp = e.target.children[0];
            var theInpVal = e.target.children[0].value;
            theInp.value = "";
            theInp.value = theInpVal;
            e.target.children[0].focus();
        });
    });

    document.querySelectorAll(".so_add_basket:not(.disable-counter)").forEach((element) => {
        element.addEventListener("click", (e) => {
            e.preventDefault();
            var addToCart = e.currentTarget;
            var counterDiv = addToCart.nextElementSibling;
            var counterInp = counterDiv.children[1].children[0];
            addToCart.classList.add("d-none");
            counterDiv.classList.remove("d-none");
            counterInp.value = "";
            counterInp.value = "1";
            counterInp.focus();
        });
    });

    document.querySelectorAll(".so_item_counter:not(.disable-counter) input.so_input").forEach((element) => {
        element.addEventListener("keydown", (e) => {
            var codeKey = e.keyCode;
            if (!((codeKey >= 48 && codeKey <= 57) || (codeKey >= 96 && codeKey <= 105) || codeKey == 8)) {
                e.preventDefault();
                return false;
            }
            var targ = e.target;
            if (targ.value.length == 0 && (codeKey == 96 || codeKey == 48 || codeKey == 97 || codeKey == 49))
                setTimeout(() => {
                    targ.value = "1";
                    minusBtn = targ.parentElement.nextElementSibling;
                    minusBtn.children[0].classList.add('d-none');
                    minusBtn.children[1].classList.remove('d-none');
                });
            else if (targ.value.length >= 3 && codeKey != 8)
                setTimeout(() => {
                    targ.value = "999";
                });
            else if (targ.value.length == 1 && targ.value == 1) {
                minusBtn = targ.parentElement.nextElementSibling;
                minusBtn.children[0].classList.remove('d-none');
                minusBtn.children[1].classList.add('d-none');
            }
        });

        element.addEventListener("paste", (e) => {
            e.preventDefault();
            return false;
        });

        element.addEventListener("blur", (e) => {
            input = e.target;
            if (input.value.trim() === "") {
                input.value = "1";
                minusBtn = input.parentElement.nextElementSibling;
                minusBtn.children[1].classList.remove("d-none");
                minusBtn.children[0].classList.add("d-none");
            }
        });
    });

    document.querySelectorAll(".so_item_counter:not(.disable-counter) button.so_add_btn").forEach((element) => {
        element.addEventListener("click", (e) => {
            input = e.currentTarget.nextElementSibling.children[0];
            var inputValue = parseInt(input.value);
            if (inputValue !== 999) {
                input.value = inputValue + 1;
                input.dispatchEvent(eventObject);
                if (inputValue == 1) {
                    minusBtn = input.parentElement.nextElementSibling;
                    minusBtn.children[1].classList.add("d-none");
                    minusBtn.children[0].classList.remove("d-none");
                }
            }
        });
    });

    document.querySelectorAll(".so_item_counter:not(.disable-counter) button.so_remove_btn").forEach((element) => {
        element.addEventListener("click", (e) => {
            input = e.currentTarget.previousElementSibling.children[0];
            var inputVal = parseInt(input.value);
            if (inputVal !== 1) {
                input.value = inputVal - 1;
                input.dispatchEvent(eventObject);
                if (inputVal == 2) {
                    minusBtn = input.parentElement.nextElementSibling;
                    minusBtn.children[0].classList.add("d-none");
                    minusBtn.children[1].classList.remove("d-none");
                }
            }else{
                input.parentElement.parentElement.classList.add("d-none");
                input.parentElement.parentElement.previousElementSibling.classList.remove("d-none");
            }
        });
    });

    return productCounter;
})();
//--------------- this is for the first time ---------------
let allInput = document.querySelectorAll(".so_item_counter:not(.disable-counter)  input");
for (var r = 0; r < allInput.length; r++) {
    if (allInput[r].value >= 1) {
        minusBtn = allInput[r].parentElement.nextElementSibling;
        minusBtn.children[0].classList.add("d-none");
        minusBtn.children[1].classList.remove("d-none");
    }
}