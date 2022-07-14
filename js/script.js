(function ($) {
  // Begin jQuery
  $(function () {
    // DOM ready
    // If a link has a dropdown, add sub menu toggle.
    $("nav ul li a:not(:only-child)").click(function (e) {
      list2.style.right = "-150px";

      $(this).siblings(".nav-dropdown").toggle();
      // Close one dropdown when selecting another
      $(".nav-dropdown").not($(this).siblings()).hide();
      e.stopPropagation();
    });
    // Clicking away from dropdown will remove the dropdown class
    $("html").click(function () {
      $(".nav-dropdown").hide();
    });
  }); // end DOM ready
})(jQuery);

//

const accordionItemHeaders = document.querySelectorAll(
  ".accordion-item-header"
);

accordionItemHeaders.forEach((accordionItemHeader) => {
  accordionItemHeader.addEventListener("click", (event) => {
    accordionItemHeader.classList.toggle("active");
    const accordionItemBody = accordionItemHeader.nextElementSibling;
    if (accordionItemHeader.classList.contains("active")) {
      accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
    } else {
      accordionItemBody.style.maxHeight = 0;
    }
  });
});

//

let span = document.querySelector(".header__span");
let list = document.querySelector(".header__list");
let list2 = document.querySelector(".header__list2");
let line = document.querySelector(".line");

$(".header__span").click(function () {
  span.style.display = "none";
  list.style.right = "0";
  list2.style.right = "0";
  line.style.right = "0";
});

$(".exit").click(function () {
  span.style.display = "flex";
  list.style.right = "-150px";
  list2.style.right = "-150px";
  line.style.right = "-150px";
});

//

var cnt = document.getElementById("count");
var water = document.getElementById("water");
var percent = cnt.innerHTML;
var interval;
interval = setInterval(function () {
  percent++;
  cnt.innerHTML = percent;
  water.style.transform = "translate(0" + "," + (110 - percent) + "%)";
  if (percent == 100) {
    clearInterval(interval);
  }
}, 60);
