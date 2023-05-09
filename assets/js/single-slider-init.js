let detectDevice ;
var thumbSlider
if (window.matchMedia("(max-width: 992px)").matches) {
    detectDevice = "Mobile";

    thumbSlider = new Swiper(".thumbs-slider-container", {
        autoHeight: true,
        slidesPerView: 'auto',
        spaceBetween: 0,
        slidesPerGroup: 1,
        threshold: 20,
        navigation: {
            nextEl: '.xzoom-thumbs .swiper-button-next',
            prevEl: '.xzoom-thumbs .swiper-button-prev',
        },
    });
    
}
if (window.matchMedia("(min-width: 993px)").matches) {
    detectDevice = "Desktop";
  
 
     thumbSlider = new Swiper('.thumbs-slider-container', {
        direction: 'vertical',
        slidesPerView: 'auto',
        spaceBetween: 0,
        slidesPerGroup: 1,
        threshold: 20,
        navigation: {
            nextEl: '.xzoom-thumbs .swiper-button-next',
            prevEl: '.xzoom-thumbs .swiper-button-prev',
        },
    });

}

window.addEventListener("resize", () => {
    if (detectDevice == "Desktop" && window.matchMedia("(max-width: 992px)").matches) {
  
        detectDevice = "Mobile"
        thumbSlider.destroy(true, true);
        thumbSlider = new Swiper(".thumbs-slider-container", {
            autoHeight: true,
            slidesPerView: 'auto',
            spaceBetween: 0,
            slidesPerGroup: 1,
            threshold: 20,
            navigation: {
                nextEl: '.xzoom-thumbs .swiper-button-next',
                prevEl: '.xzoom-thumbs .swiper-button-prev',
            },
        });

    }
    if (detectDevice == "Mobile" && window.matchMedia("(min-width: 993px)").matches) {
      
    
        detectDevice = "Desktop"
        thumbSlider.destroy(true, true);
         thumbSlider = new Swiper('.thumbs-slider-container', {
            direction: 'vertical',
            slidesPerView: 'auto',
            spaceBetween: 0,
            slidesPerGroup: 1,
            threshold: 20,
            navigation: {
                nextEl: '.xzoom-thumbs .swiper-button-next',
                prevEl: '.xzoom-thumbs .swiper-button-prev',
            },
        });

    }
});
// this is latest slider init
var latestSlider = new Swiper(".latest-slider-container", {
    autoHeight: true,
    slidesPerView: 'auto',
    spaceBetween: 0,
    slidesPerGroup: 1,
    threshold: 30,
    centeredSlides: true,


    navigation: {
        nextEl: ".slider-content .latest-slider-left-arrow",
        prevEl: ".slider-content .latest-slider-right-arrow",
    },
    breakpoints: {

        992: {
            centeredSlides: false,
        }

    },

});


let latestSliderDirection = (function latestSliderDirectionCall() {
    if (window.matchMedia("(max-width: 992px)").matches) {
        latestSlider.slideTo(document.querySelectorAll(".latest-slider-container  .latest-slider-page").length/2, false, false);
    }
    return latestSliderDirectionCall;
})();

window.addEventListener("resize", latestSliderDirection );
// this is about open user login popup 
document.getElementById("used-to-login").addEventListener("click", (e) => {
    if (window.matchMedia("(min-width: 993px)").matches) {
        e.preventDefault();
        setTimeout(() => {
            headerElement.classList.add("open");
            document.querySelector(".user_popup_container .drop_menu").classList.add("open_drop_menu");
        });
    }
});




