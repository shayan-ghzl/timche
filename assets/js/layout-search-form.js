var currentFocus = -1;
let inp = document.querySelector(" .searchform input");
let suggestionPack = document.querySelector(".fullsearch_suggestion_container");

inp.addEventListener("keydown", function(e) {
    var x = document.getElementsByClassName("fullsearch_suggestion_item");
    if (!x) return false; 
    if (e.keyCode == 40) {
        currentFocus++;
        addActive(x);
    } else if (e.keyCode == 38) {
        currentFocus--;
        addActive(x);
    } else if (e.keyCode == 13) 
        x[currentFocus].children[0].click();
});

function addActive(x) {
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = (x.length - 1);
    x[currentFocus].classList.add("suggestion_active");
    x[currentFocus].scrollIntoView(false);
}

function removeActive(x) {
    for (var i = 0; i < x.length; i++) 
        x[i].classList.remove("suggestion_active");
}
inp.addEventListener("focus", function(e) {
    suggestionPack.style.display = "block";
    currentFocus = -1;
});

//  CLOSE IT IF WE CLICK ON   
let sgstDiv = document.querySelector("#layout-header .searchform");
document.addEventListener("click", function(e) {
    if (!sgstDiv.contains(e.target)) {
        suggestionPack.style.display = "none";
        currentFocus = -1;
    }
});