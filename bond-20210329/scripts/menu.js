$(function () {
  $(document).on("click", ".menuBtn.close", function () { 
    $(this).addClass("open");
    $(this).removeClass("close");
    $(".menuList").removeClass("menuOpen").addClass("menuClose");
  });
  $(document).on("click", ".menuBtn.open", function () {
    $(this).addClass("close");
    $(this).removeClass("open");
    $(".menuList").removeClass("menuClose").addClass("menuOpen");
  });
  $("a").on("click", function () {
    if ($(this).attr("scroll-to")) {
      gScroll($($(this).attr("scroll-to")).offset().top - $("header").height());
      return false;
    }
  });
});
