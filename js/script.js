(function ($) {
  // Begin jQuery
  $(function () {
    // DOM ready
    // If a link has a dropdown, add sub menu toggle.
    $("nav ul li a:not(:only-child)").click(function (e) {
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

var cnt = document.getElementById("count");
var water = document.getElementById("water");
var percent = cnt.innerText;
var interval;
interval = setInterval(function () {
  percent++;
  cnt.innerHTML = percent;
  water.style.transform = "translate(0" + "," + (110 - percent) + "%)";
  if (percent == 100) {
    clearInterval(interval);
  }
}, 60);

//