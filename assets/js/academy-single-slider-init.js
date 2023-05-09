
// this is newest posts slider
var otherCourse = new Swiper(".other-course-slider-container", {
    slidesPerView: 'auto',
    autoHeight: true,
    spaceBetween: 0,
    slidesPerGroup: 1,
    threshold: 30,
    centeredSlides: true,

    navigation: {
        nextEl: ".other-course-left-arrow",
        prevEl: ".other-course-right-arrow",
    },
    breakpoints: {

        992: {
            centeredSlides: false,
        }

    },

});


