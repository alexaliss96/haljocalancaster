
jQuery(document).ready(function() {		
	'use strict';		
	
	function SetYear() {
var thisDate=new Date();
var thisYear=thisDate.getFullYear();
document.getElementById('copyR').innerHTML="&copy; "+thisYear;
}
	
$(document).ready(function(){
  $('.owl-carousel').owlCarousel();
});	

/*/////////////////////////////////////////////////////////////////////////////////
PREMIX CHAMBER
////////////////////////////////////*/

	$('.chambers-coil').fadeOut('slow');
	$('.premix').delay(150).fadeOut('slow');



$(document).ready(function(){
  $('.bxslider').bxSlider();
});
	
/*/////////////////////////////////////////////////////////////////////////////////
TO THE TOP
////////////////////////////////////*/	
	// browser window scroll (in pixels) after which the "back to top" link is shown
	var offset = 300,
		//browser window scroll (in pixels) after which the "back to top" link opacity is reduced
		offset_opacity = 1200,
		//duration of the top scrolling animation (in ms)
		scroll_top_duration = 700,
		//grab the "back to top" link
		$back_to_top = $('.to-the-top');

	//hide or show the "back to top" link
	$(window).scroll(function(){
		( $(this).scrollTop() > offset ) ? $back_to_top.addClass('to-the-top-is-visible') : $back_to_top.removeClass('to-the-top-is-visible to-the-top-fade-out');
		if( $(this).scrollTop() > offset_opacity ) { 
			$back_to_top.addClass('to-the-top-fade-out');
		}
	});

	//smooth scroll to top
	$back_to_top.on('click', function(event){
		event.preventDefault();
		$('body,html').animate({
			scrollTop: 0 ,
		 	}, scroll_top_duration
		);
	});
	
	
new WOW().init();
	
	

	
	
	/*/////////////////////////////////////////////////////////////////////////////////
SLIM TO NONE
////////////////////////////////////*/	
	$('#navigation').slimmenu(
{
    resizeWidth: '992',
    collapserTitle: '',
    animSpeed: 'medium',
    easingEffect: null,
    indentChildren: true,
    childrenIndenter: '&nbsp;&nbsp'
});
			
			
	
/*/////////////////////////////////////////////////////////////////////////////////
IT'S A STRETCH
////////////////////////////////////*/	
	var $doc_height = jQuery(window).innerHeight(); 
	
	jQuery('.itsa-stretch').css("height", $doc_height);
	var picheight = jQuery('.center-y').css("height");
	picheight = parseInt(picheight, 10);
	jQuery('.center-y').css('margin-top', (($doc_height - picheight)/2)-90);
	jQuery('.itsa-stretch .lcars-video-container').css("height",$doc_height);
	
	

	

	
});

	
	

		
	
		
			

		
	

