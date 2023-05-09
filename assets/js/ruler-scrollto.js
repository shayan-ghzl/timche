let homeNavItem = document.querySelectorAll(".academy-home .footer-menu li");
let fixNavItem = document.querySelectorAll(".fix-navigation li");

document.querySelectorAll(".academy-home .footer-menu li , .fix-navigation li").forEach((Element) => {
    Element.addEventListener("click", (e) => {
        if(!e.currentTarget.classList.contains("nav-active")){
            document.querySelectorAll(".fix-navigation .nav-active , .academy-home .footer-menu .nav-active").forEach((Element2) => {
                Element2.classList.remove("nav-active");
            })
            var target = e.currentTarget;
            var index = Array.from(target.parentNode.children).indexOf(target);
            homeNavItem[index].classList.add("nav-active");
            fixNavItem[index].classList.add("nav-active");
            window.scrollTo(0, window.innerHeight + 50);
        }
    });
});