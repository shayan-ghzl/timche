// this is one level collapse
var coll = document.getElementsByClassName("collapse-btn");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    for (var j = 0; j < coll.length; j++) {
      if (coll[j] != this) {
        coll[j].classList.remove("collapse-active");
        coll[j].nextElementSibling.style.maxHeight = null;
      }
    }

    this.classList.toggle("collapse-active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }

  });
}
// this is tab layout
let tabBody3 = document.querySelectorAll(".user-details .user-details-body .tab-layout-body > div");
document.querySelectorAll(".user-details .user-details-body .tab-layout-header ul li").forEach((Element) => {
  Element.addEventListener("click", (e) => {
    var target = e.currentTarget;
    var index = Array.from(target.parentNode.children).indexOf(target);
    document.querySelectorAll(".user-details .user-details-body .tab-layout-header ul .active-tab").forEach((Element) => {
      if (target != Element)
        Element.classList.remove("active-tab");
    });
    if (!target.classList.contains("active-tab"))
      target.classList.add("active-tab");
    document.querySelectorAll(".user-details .user-details-body .tab-layout-body .tab-body-show").forEach((Element) => {
      if (tabBody3[index] != Element)
        Element.classList.remove("tab-body-show");
    });
    if (!tabBody3[index].classList.contains("tab-body-show"))
      tabBody3[index].classList.add("tab-body-show");

  });
});
// for first time page load
var activeTab = document.querySelector(".user-details .user-details-body .tab-layout-header ul .active-tab");
var index = Array.from(activeTab.parentNode.children).indexOf(activeTab);
if (!tabBody3[index].classList.contains("tab-body-show"))
  tabBody3[index].classList.add("tab-body-show");