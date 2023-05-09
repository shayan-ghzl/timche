// this is newest posts slider
var commentSlider = new Swiper(".comments-slider-container", {
    slidesPerView: "auto",
    spaceBetween: 0,
    slidesPerGroup: 1,
    threshold: 30,
    centeredSlides: true,

  

    pagination: {
        el: '.comments-slider-pagination',
        clickable: true
    },
    breakpoints: {

        768: {
            centeredSlides: false,
    
        }

    },
});
// this is partnership slider
var partnershipSlider = new Swiper(".partnership-slider-container", {
    slidesPerView: "auto",
    autoHeight: true,
    spaceBetween: 0,
    slidesPerGroup: 1,
    centeredSlides: true,

    threshold: 30,
    breakpoints: {

        768: {
            centeredSlides: false,
    
        }

    },
  
});

let commentSliderDirection = (function commentSliderDirectionCall() {
    if (window.matchMedia("(max-width: 768px)").matches) {
        commentSlider.slideTo(document.querySelectorAll(".comments-slider-container  .comments-slider-page").length/2, false, false);
        partnershipSlider.slideTo(document.querySelectorAll(".partnership-slider-container  .partnership-slider-page").length/2, false, false);
    }
    return commentSliderDirectionCall;
})();

window.addEventListener("resize", commentSliderDirection);

