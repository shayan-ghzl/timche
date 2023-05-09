var coll = document.getElementsByClassName("side-nav-collapse-btn");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    for (var j = 0; j < coll.length; j++) {
      if (coll[j] != this) {
        coll[j].classList.remove("side-nav-collapse-active");
        coll[j].nextElementSibling.style.maxHeight = null;
      }
    }

    this.classList.toggle("side-nav-collapse-active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }

  });
}
// -------------------------------- START HAMBURGER BUTTON AND SLIDE DOWN -----------------------------

let slideMenu = document.querySelector(".side-nav-container");
let hamburgerBtn = document.querySelector(".hamburger-btn");

hamburgerBtn.addEventListener('click', () => {
  slideMenu.classList.toggle('side-nav-active');
  document.body.classList.toggle('body-overflow-hidden');
});
// --------------- close sidebar if user click outside of it
document.addEventListener("click", function (e) {
  if (!slideMenu.contains(e.target) && slideMenu.classList.contains("side-nav-active") && !hamburgerBtn.contains(e.target)) {
    slideMenu.classList.remove('side-nav-active');
    document.body.classList.remove('body-overflow-hidden');

  }
});
// window.addEventListener("resize", function () {
//   if (slideMenu.classList.contains("side-nav-active")) {
//     slideMenu.classList.remove('side-nav-active');
//     document.body.classList.remove('body-overflow-hidden');
//   }
// });
document.querySelector(".side-nav-container .c-close-btn button").addEventListener("click", (e) => {
  slideMenu.classList.remove('side-nav-active');
  document.body.classList.remove('body-overflow-hidden');
});

  // -------------------------------- END HAMBURGER BUTTON AND SLIDE DOWN -----------------------------
