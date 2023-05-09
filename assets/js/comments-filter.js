document.querySelectorAll(".users-commnet-filter ul li:not(:first-child)").forEach((Element) => {
    Element.addEventListener('click', (e) => {
        var target = e.currentTarget;
        target.parentElement.querySelectorAll(".comment-filter-active").forEach((Element2) => {
            Element2.classList.remove('comment-filter-active');
        });
        target.classList.add('comment-filter-active');
    });
});
// this is showing textarea by reply-btn
document.querySelectorAll(".comments-questions .reply-btn").forEach((Element) => {
    Element.addEventListener('click', (e) => {
    $(e.currentTarget.parentElement.parentElement.parentElement.parentElement.nextElementSibling).slideDown();
    });
});

