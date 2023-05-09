// this is regal slider
var regalSlider = new Swiper(".regal-item:nth-child(2) .regal-slider-container", {
    autoHeight: true,
    slidesPerView: 'auto',
    spaceBetween: 0,
    slidesPerGroup: 1,
    threshold: 30,
    centeredSlides: true,

    navigation: {
        nextEl: ".regal-item:nth-child(2) .regal-slider-left-arrow",
        prevEl: ".regal-item:nth-child(2) .regal-slider-right-arrow",
    },
    breakpoints: {

        992: {
            centeredSlides: false,
        }

    },
  

});
var regalSliderTwo = new Swiper(".regal-item:nth-child(3) .regal-slider-container", {
    autoHeight: true,
    slidesPerView: 'auto',
    spaceBetween: 0,
    slidesPerGroup: 1,
    threshold: 30,
    centeredSlides: true,


    navigation: {
        nextEl: ".regal-item:nth-child(3) .regal-slider-left-arrow",
        prevEl: ".regal-item:nth-child(3) .regal-slider-right-arrow",
    },
    breakpoints: {

        992: {
            centeredSlides: false,
        }

    },
  
});
var regalSliderThree = new Swiper(".regal-item:nth-child(4) .regal-slider-container", {
    autoHeight: true,
    slidesPerView: 'auto',
    spaceBetween: 0,
    slidesPerGroup: 1,
    threshold: 30,
    centeredSlides: true,


    navigation: {
        nextEl: ".regal-item:nth-child(4) .regal-slider-left-arrow",
        prevEl: ".regal-item:nth-child(4) .regal-slider-right-arrow",
    },
    breakpoints: {

        992: {
            centeredSlides: false,
        }

    },
  
});

// let sliderDirection = (function sliderDirectionCall() {
//     if (window.matchMedia("(max-width: 992px)").matches) {
//         regalSlider.slideTo(document.querySelectorAll(".regal-item:nth-child(2)  .regal-slider-page").length, false, false);
//         regalSliderTwo.slideTo(document.querySelectorAll(".regal-item:nth-child(3)  .regal-slider-page").length, false, false);
//         regalSliderThree.slideTo(document.querySelectorAll(".regal-item:nth-child(4)  .regal-slider-page").length, false, false);
//     }
//     return sliderDirectionCall;
// })();

// window.addEventListener("resize", sliderDirection);

