document.querySelectorAll(".so_add_basket.disable-counter").forEach((element) => {
    if (element.classList.contains("added")) {
        element.innerHTML = `<svg class="animate-check-mark" viewBox="0 0 130 130">
        <circle class="path circle" fill="none" stroke="#fff" stroke-width="10" stroke-miterlimit="10" cx="65" cy="65" r="62" />
        <polyline class="path check" fill="none" stroke="#fff" stroke-width="10" stroke-linecap="round"
            stroke-miterlimit="10" points="100.2,40.2 51.5,88.8 29.8,67.5 " />
        </svg>
        <span>محصول اضافه گردید</span>
        `;
    } else {
        element.addEventListener('click', add_to_cart, Event);
    }
});

function add_to_cart(event) {
    event.preventDefault();
    var target = event.currentTarget;
    target.classList.add("added");
    target.innerHTML = `<svg class="animate-check-mark" viewBox="0 0 130 130">
    <circle class="path circle" fill="none" stroke="#fff" stroke-width="10" stroke-miterlimit="10" cx="65" cy="65" r="62" />
    <polyline class="path check" fill="none" stroke="#fff" stroke-width="10" stroke-linecap="round"
        stroke-miterlimit="10" points="100.2,40.2 51.5,88.8 29.8,67.5 " />
    </svg>
    <span>محصول اضافه گردید</span>
    `;
    target.removeEventListener("click", add_to_cart);
}


