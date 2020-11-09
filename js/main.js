/*
 * Image preview script 
 * powered by jQuery (http://www.jquery.com)
 * 
 * written by Alen Grakalic (http://cssglobe.com)
 * 
 * for more info visit http://cssglobe.com/post/1695/easiest-tooltip-and-image-preview-using-jquery
 *
 */
 
this.imagePreview = function(){	
	/* CONFIG */
		
		xOffset = 300;
		yOffset = 30;
		
		// these 2 variable determine popup's distance from the cursor
		// you might want to adjust to get the right result
		
	/* END CONFIG */
	$("a.preview").hover(function(e){
		this.t = this.title;
		this.title = "";	
		var c = (this.t != "") ? "<br/>" + this.t : "";
		$("body").append("<p id='preview'><img src='"+ this.href +"' alt='Image preview' />"+ c +"</p>");								 
		$("#preview")
			.css("top",(e.pageY - xOffset) + "px")
			.css("left",(e.pageX + yOffset) + "px")
			.fadeIn("fast");						
    },
	function(){
		this.title = this.t;	
		$("#preview").remove();
    });	
	$("a.preview").mousemove(function(e){
		$("#preview")
			.css("top",(e.pageY - xOffset) + "px")
			.css("left",(e.pageX + yOffset) + "px");
	});			
};
// starting the script on page load
$(document).ready(function(){
	imagePreview();
});

// NewHeader用
(function($) {
  $(function() {
    var $header=$('#top-head'); // Nav Fixed
    $(window).scroll(function() {
      if ($(window).scrollTop() > 350) {
        $header.addClass('fixed');
      }
      else {
        $header.removeClass('fixed');
      }
    }
    ); // Nav Toggle Button
    $('#nav-toggle').click(function() {
      $header.toggleClass('open');
    });
  });
})(jQuery);

//スクロールフェードイン
$(document).ready(function () {
  $(window).scroll(function () {
    $('.fadein').each(function() {
      var elemPos=$(this).offset().top;
      var scroll=$(window).scrollTop();
      var windowHeight=$(window).height();
      if (scroll > elemPos - windowHeight + 200) {
        $(this).addClass('scrollin');
      }
      else {
        $(this).removeClass('scrollin');
      }
    });
  });
});

//トップページのNEWSセクションはスクロールでフェードインではなく時間差でフェードイン
$(function() {
  $('section#news').delay(1500).queue(function(){
      $(this).addClass('scrollin');
  });
});

// PageTopボタン
$(document).ready(function() {
  var pagetop=$('.pagetop');
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      pagetop.fadeIn('fast');
    }
    else {
      pagetop.fadeOut('fast');
    }
  }
  );
  pagetop.click(function () {
    $('body, html').animate( {scrollTop: 0}, 500);
    return false;
  });
});

//スクロールインバナー
$(function() {
    var bannerBox = $('.scroll_banner_box');
    var closeFlag = false;
    bannerBox.hide();
    //スクロールが300に達したらバナー表示
    $(window).scroll(function () {
      if (closeFlag == true) {
        return;
      }
      if ($(this).scrollTop() > 100) {
        bannerBox.fadeIn('fast');
      } else {
        bannerBox.fadeOut('fast');
      }
    });
    //クローズボタン
    $('.scroll_banner_box .close').click(function(){
      bannerBox.hide();
      closeFlag = true;
    });
});