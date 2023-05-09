let userRedDot = document.querySelector(".user_popup_container .red-dot");
let basketRedDot = document.querySelector(".basket_popup_container .red-dot");
function user_notification(){
    userRedDot.classList.toggle("d-none");
}
function basket_notification(){
    basketRedDot.classList.toggle("d-none");
}