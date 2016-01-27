jQuery.noConflict();


jQuery(function($){
	
	var $respMenu = $('#main-menu').clone();
	$respMenu.prop('id','main-menu-mobile');
	$('body').prepend($respMenu).prepend('<div id="mobile-menu-overlay" style="display:none;">');
	
	
	$('#menu-toggler').on('click', function() {
		$('body').toggleClass('show-menu');
		$('#mobile-menu-overlay').fadeToggle(300);
		
	});
	
	$(document).on('click','#mobile-menu-overlay', function() {
		$('body').removeClass('show-menu');
		$('#mobile-menu-overlay').fadeOut(300);
	});
	
	/* ------------------ search box functionality -------------- */
	
	$('#search-toggler').on('click', function(e){ 
	e.preventDefault();
	$('#search').slideToggle(300);
	});
});