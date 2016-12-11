$( document ).ready(function() {
	
	$( ".menu-btn" ).click(function() {
		
		$('.overlay').fadeIn(500, function(){
			$( ".main-menu" ).animate({left: "0"}, 500);
			$( ".menu-btn" ).animate({left: "-40"}, 500);
		});
		
	 
	});
	
    $( ".menu-link, .close-btn, .overlay" ).click(function() {
		$( ".main-menu" ).animate({left: "-340"}, 500);
		$( ".menu-btn" ).animate({left: "20"}, 500);
		$('.overlay').fadeOut(500);
		$('.cover-slide').removeClass( "hide" )
		
	});
	
	$( ".nav-arrow-prev, .nav-arrow-next, .nav-dots span, .menu-link, .show-cover").click(function() {
		$('.cover-slide').removeClass( "hide" )
		
	});
	
	$('.hide-cover').click(function(){
			$(this).parent().parent().parent('div').addClass( "hide" )
		
	});
});