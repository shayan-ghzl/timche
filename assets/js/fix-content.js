let headerElement = document.querySelector(".fix-header-container");

var lastScrollTop = 0;

document.addEventListener("scroll", function () {

    var st = window.pageYOffset || document.documentElement.scrollTop;

    if (st > 200) {
        
        if (st > lastScrollTop) {
            headerElement.classList.remove("open");
            headerElement.style.overflow = "hidden";
            headerElement.classList.add("close");
    
            // this is for close search suggestion
            suggestionPack.style.display = "none";
            inp.blur();
            // this is for close popups
            document.querySelectorAll(".drop_container .open_drop_menu").forEach((element) => {
                element.classList.remove("open_drop_menu");
            });
        } else {
            headerElement.classList.remove("close");
            headerElement.style.overflow = "hidden";
            headerElement.classList.add("open");
            setTimeout(() => {
                headerElement.removeAttribute("style"); 
            }, 500);
        }
    }

    lastScrollTop = st <= 0 ? 0 : st;

}, false);


