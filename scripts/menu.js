$(function(){
	$(document).on('click', '.menuBtn.close', function() {
	    $(this).addClass("open");
	    $(this).removeClass("close");
	    $(".menuList").css("margin-top", "0");
	});
	$(document).on('click', '.menuBtn.open', function() {
	    $(this).addClass("close");
	    $(this).removeClass("open");
	    $(".menuList").css("margin-top", "-100%");
	});
	$('a').on('click',function(){
    	if($(this).attr('scroll-to')){
    		gScroll($($(this).attr('scroll-to')).offset().top-$('header').height());
    		return false;
    	}
    })
});