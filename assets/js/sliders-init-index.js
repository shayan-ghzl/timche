// this is fix slider - home page
let spanCurrpage = document.querySelector(".fix-slider-custom-pagination .current-page");
let slidesNumber = document.querySelectorAll(".fix-slider-container .fix-slider-page").length;
document.querySelector(".fix-slider-custom-pagination .all-pages").innerText = ((slidesNumber.toString.length) == 1) ? `0${slidesNumber}` : slidesNumber;
var fixSlider = new Swiper('.fix-slider-container', {
    autoHeight: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.fix-slider-pagination',
        clickable: true
    },
    on: {
        slideChange: function () {
            var activePage = fixSlider.activeIndex + 1;
            spanCurrpage.innerText = (activePage.toString.length == 1) ? `0${activePage}` : activePage;
        },
        init: function () {
            spanCurrpage.innerText = '01';
        },
    },
    breakpoints: {

        992: {
            autoHeight: false,
        },

    },
});

// this is newest posts slider
var newestSlider = new Swiper(".newest-slider-container", {
    slidesPerView: 'auto',
    autoHeight: true,
    spaceBetween: 15,
    slidesPerGroup: 1,
    threshold: 30,
    centeredSlides: true,

    navigation: {
        nextEl: ".newest-slider-right-arrow",
        prevEl: ".newest-slider-left-arrow",
    },
    breakpoints: {

        992: {
            centeredSlides: false,
        }

    },

});
// this is newest posts slider
var brandsSlider = new Swiper(".brands-slider-container", {
    slidesPerView: 'auto',
    autoHeight: true,
    spaceBetween: 0,
    slidesPerGroup: 1,
    threshold: 30,
});

let newestSliderDirection = (function newestSliderDirectionCall() {
    if (window.matchMedia("(max-width: 992px)").matches) {
        newestSlider.slideTo(document.querySelectorAll(".newest-slider-container  .newest-slider-page").length/2, false, false);
    }
    return newestSliderDirectionCall;
})();

window.addEventListener("resize", newestSliderDirection);

