// swipe function for slider
$(".carousel").on("touchstart", function (event) {
  let xClick = event.originalEvent.touches[0].pageX;
  $(this).one("touchmove", function (event) {
    var xMove = event.originalEvent.touches[0].pageX;
    if (Math.floor(xClick - xMove) > 5) {
      $(".carousel").carousel("next");
    } else if (Math.floor(xClick - xMove) < -5) {
      $(".carousel").carousel("prev");
    }
  });
  $(".carousel").on("touchend", function () {
    $(this).off("touchmove");
  });
});

// pushbar nav menu close/open
function openSlideMenu() {
  document.getElementById("menu-responsive").style.width = "250px";
  document.getElementById("openMenu").style.display = "none";
}
function closeSlideMenu() {
  document.getElementById("menu-responsive").style.width = "0";
  document.getElementById("openMenu").style.display = "initial";
}
