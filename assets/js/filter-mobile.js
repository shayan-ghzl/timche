let filterOverlay = document.querySelector(".search-page-content>aside");
document.querySelector(".search-page-content > section .filter-btn-mobile").addEventListener("click", (e) => {
    filterOverlay.classList.add("filter-down");
    document.body.classList.add("body-overflow-hidden");
});
document.querySelector(".search-page-content > aside .overlay-header button").addEventListener("click", (e) => {
    filterOverlay.classList.remove("filter-down");
    document.body.classList.remove("body-overflow-hidden");
});
// this is for check last rotation size
let detectDevice2;
if (window.matchMedia("(max-width: 992px)").matches)
    detectDevice2 = "Mobile";
if (window.matchMedia("(min-width: 993px)").matches)
    detectDevice2 = "Desktop";
window.addEventListener("resize", () => {
    if (detectDevice2 == "Desktop" && window.matchMedia("(max-width: 992px)").matches) {
        detectDevice2 = "Mobile"
    }
    if (detectDevice2 == "Mobile" && window.matchMedia("(min-width: 993px)").matches) {
        detectDevice2 = "Desktop"
        filterOverlay.classList.remove("filter-down");
        document.body.classList.remove("body-overflow-hidden");
    }
});