let video = document.querySelector(".course-preview > div .course-view .post-video-container .post-video .aspect-ratio > video");
let videoContainer = document.querySelector(".course-preview > div .course-view .post-video-container .post-video");
document.querySelector(".course-preview > div .course-view .post-video-container .post-video .aspect-ratio .play-icon").addEventListener("click", (e) => {
    video.play();
    video.setAttribute("controls","controls"); 
    e.currentTarget.style.display = "none";
    videoContainer.classList.remove("video-gray-overlay");

});