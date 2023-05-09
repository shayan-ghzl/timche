document.querySelectorAll(" .rating-star-bar .bar-object .progress-container .progress").forEach((Element) => {
    Element.children[0].style.width = Element.getAttribute("data-value") + "%";
});