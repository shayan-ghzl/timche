// this is showing textarea by reply-btn
// document.querySelectorAll(".user-comments .reply-btn").forEach((Element) => {
//     Element.addEventListener('click', showReplyBox , Event);
// });
// function showReplyBox(event) {
//   var replyTextarea =  event.currentTarget.parentElement.parentElement.parentElement.parentElement.nextElementSibling;
//     $(replyTextarea).slideDown();
//      event.currentTarget.removeEventListener("click", showReplyBox);
// }
// this is comments filter ruler
// document.querySelectorAll(".users-commnet-filter ul li:not(:first-child)").forEach((Element) => {
//   Element.addEventListener('click', (e) => {
//       var target = e.currentTarget;
//       target.parentElement.querySelectorAll(".comment-filter-active").forEach((Element2) => {
//           Element2.classList.remove('comment-filter-active');
//       });
//       target.classList.add('comment-filter-active');
//   });
// });
// this is about open user login popup 
if(document.getElementById("used-to-login"))
document.getElementById("used-to-login").addEventListener("click", (e) => {
  if (window.matchMedia("(min-width: 993px)").matches) {
      e.preventDefault();
      setTimeout(() => {
          headerElement.classList.add("open");
          document.querySelector(".user_popup_container .drop_menu").classList.add("open_drop_menu");
      });
  }
});