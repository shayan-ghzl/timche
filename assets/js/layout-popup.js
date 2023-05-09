// -------------------------------- START    DROPDOWN    SCRIPTS -----------------------------
var menuBtn = document.querySelectorAll("a[menu='drop']");
for (var i = 0; i < menuBtn.length; i++) {
    menuBtn[i].addEventListener("click", function (e) {
        if (window.matchMedia("(min-width: 993px)").matches) {
            e.preventDefault();
            var thisMenu;
            if (e.target.parentElement.classList.contains("drop_menu_btn"))
                thisMenu = e.target.parentElement.parentElement.children[1].classList;
            else thisMenu = e.target.parentElement.children[1].classList;

            if (!thisMenu.contains("open_drop_menu")) {
                var allOpensNotThis = document.getElementsByClassName("open_drop_menu");
                for (var j = 0; j < allOpensNotThis.length; j++)
                    allOpensNotThis[j].classList.remove("open_drop_menu");
                thisMenu.add("open_drop_menu");
            } else thisMenu.remove("open_drop_menu");
        }
    });
}

//  CLOSE IT IF WE CLICK ON     
document.addEventListener("click", function (e) {
    var myElementToCh = document.querySelector(".open_drop_menu");
    if (myElementToCh && !myElementToCh.parentElement.contains(e.target))
        myElementToCh.classList.remove("open_drop_menu");
});

// ---------------- hide popups when screen resize --------------
function popupCard() {
    var openPopupMenu = document.getElementsByClassName("open_drop_menu");
    for (var f = 0; f < openPopupMenu.length; f++)
        openPopupMenu[f].classList.remove("open_drop_menu");
};
window.addEventListener("resize", popupCard);
// -------------------------------- END    DROPDOWN    SCRIPTS -----------------------------