document.querySelectorAll(".newest-slider-container .newest-slider-page").forEach((element) => {
    element.addEventListener("mouseenter", (e) => {
        e.currentTarget.querySelector("video").play();
    });
    element.addEventListener("mouseleave", (e) => {
        var video = e.currentTarget.querySelector("video");
        video.pause();
        video.currentTime = 0;
    });
});