// go top
function checkGoTopButton() {
  var y = $(this).scrollTop();
  if (y > 300) {
    $(".go-top").removeClass("hide-go-top hide").addClass("show-go-top");
  } else {
    $(".go-top").removeClass("show-go-top").addClass("hide-go-top");
  }
}
//
$(document).ready(function() {
  //
  $(document).scroll(function () {
    checkGoTopButton();
  });
  //
  $(".go-top").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: 0,
      },
      600
    );
  });
});