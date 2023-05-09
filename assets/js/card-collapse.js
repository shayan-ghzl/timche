
document.querySelectorAll(" .card-header:not(.rang-card-header)").forEach((Element) => {
    Element.addEventListener("click", (e) => {
        var cardHeader = e.currentTarget;
        var cardBody = cardHeader.nextElementSibling;
        if (cardBody) {
            if (cardHeader.classList.contains("card-hide")) {
                $(cardBody).slideDown(100);
                cardHeader.classList.remove("card-hide")
            } else {
                $(cardBody).slideUp(100);
                cardHeader.classList.add("card-hide")
            }
        }
    });
});