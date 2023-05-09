// this is for first tab layout
let tabButton2 = document.querySelectorAll(".tab-layout .tab-item > button");
tabButton2.forEach((Element) => {
    Element.addEventListener("click", (e) => {
        var target = e.currentTarget;
        tabButton2.forEach((Element2) => {
            if (Element2 != target) {
                Element2.classList.remove("active-tab");
            } else {
                Element2.classList.add("active-tab");
            }
        });
        if (window.matchMedia("(min-width: 993px)").matches) {
            target.parentElement.parentElement.style.height = `calc(${target.nextElementSibling.scrollHeight + 60}px + 15rem)`;
        } else {
            tabButton2.forEach((Element3) => {
                if (Element3 != target) {
                    $(Element3.nextElementSibling).slideUp("200");
                } else {
                    $(Element3.nextElementSibling).slideToggle("200");
                }
            });
        }
    });
});
// this is for second tab layout
let tabButton = document.querySelectorAll(".comments-questions .tab-item > button");
tabButton.forEach((Element) => {
    Element.addEventListener("click", (e) => {
        var target = e.currentTarget;
        tabButton.forEach((Element2) => {
            if (Element2 != target) {
                Element2.classList.remove("active-tab");
            } else {
                Element2.classList.add("active-tab");
            }
        });
        if (window.matchMedia("(min-width: 993px)").matches) {
            target.parentElement.parentElement.style.height = `calc(${target.nextElementSibling.scrollHeight + 60}px + 15rem)`;
        } else {
            tabButton.forEach((Element3) => {
                if (Element3 != target) {
                    $(Element3.nextElementSibling).slideUp("200");
                } else {
                    $(Element3.nextElementSibling).slideToggle("200");
                }
            });
        }
    });
});
// this is for first time and when windows resize
let tabLayout = document.querySelectorAll(".comments-questions , .tab-layout");
let itemBody = document.querySelectorAll(".comments-questions .item-body , .tab-layout .item-body");
let tabBodySize = (function tabBodySizeCall() {
    if (window.matchMedia("(min-width: 993px)").matches) {
        tabLayout.forEach((Element) => {
            if (!Element.querySelector(".tab-item .active-tab")) {
                Element.children[0].children[0].classList.add("active-tab");
            }
            Element.style.height = `calc(${Element.querySelector(" .tab-item .active-tab+div").scrollHeight + 60}px + 15rem)`;
        });
        itemBody.forEach((Element) => {
            Element.removeAttribute("style");
        });
    } else {
        tabLayout.forEach((Element) => {
            Element.removeAttribute("style");
        });
    }
    return tabBodySizeCall;
})();
window.addEventListener("resize", tabBodySize);


//   -------------------------------------------this is one level collapse for the inner tab layout faq-------------------------------------------
let faqCollapse = document.querySelectorAll(".comments-questions .item-body .onelevel_collapse_btn");
let commentSection = document.querySelector(".comments-questions");
let standardHeight, onlyOneTime = true;
faqCollapse.forEach((Element) => {
    Element.addEventListener("click", (e) => {
        if (onlyOneTime) {
            standardHeight = commentSection.offsetHeight;
            onlyOneTime = false;
        }
        var target = e.currentTarget;
        faqCollapse.forEach((Element2) => {
            if (Element2 != target) {
                Element2.classList.remove("onelevel_collapse_active");
                $(Element2.nextElementSibling).slideUp(200);
            } else {
                Element2.classList.toggle("onelevel_collapse_active");
                $(Element2.nextElementSibling).slideToggle(200);
                if (window.matchMedia("(min-width: 993px)").matches) {
                    if (Element2.classList.contains("onelevel_collapse_active")) {
                        commentSection.style.height = `${standardHeight + Element2.nextElementSibling.scrollHeight}px`;
                    } else {
                        commentSection.style.height = `${standardHeight}px`;
                    }
                }
            }
        });
    });
});
// this is comments filter ruler
document.querySelectorAll(".users-commnet-filter ul li:not(:first-child)").forEach((Element) => {
    Element.addEventListener('click', (e) => {
        var target = e.currentTarget;
        target.parentElement.querySelectorAll(".comment-filter-active").forEach((Element2) => {
            Element2.classList.remove('comment-filter-active');
        });
        target.classList.add('comment-filter-active');
        if (window.matchMedia("(min-width: 993px)").matches) {
            var sectionHeightNoComment = commentSection.offsetHeight - target.parentElement.parentElement.nextElementSibling.offsetHeight;
            commentSection.style.height = sectionHeightNoComment + target.parentElement.parentElement.nextElementSibling.offsetHeight;
        }
    });
});
// this is showing textarea by reply-btn
var commentReplyRecall = (function commentReply() {
    document.querySelectorAll(".comments-questions .reply-btn").forEach((Element) => {
        Element.addEventListener('click', showReplyBox, Event);
    });
    return commentReply;
})();
function showReplyBox(event) {
    var replyTextarea = event.currentTarget.parentElement.parentElement.parentElement.parentElement.nextElementSibling;
    $(replyTextarea).slideDown();
    commentSection.style.height = `${commentSection.offsetHeight + replyTextarea.scrollHeight + 30}px`;
    event.currentTarget.removeEventListener("click", showReplyBox);
}
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
