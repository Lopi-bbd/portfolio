jQuery.noConflict();


jQuery(function($){
	
	var $respMenu = $('#main-menu').clone();
	$respMenu.prop('id','main-menu-mobile');
	$('body').prepend($respMenu).prepend('<div id="mobile-menu-overlay" style="display:none;">');
	
	
	$('#menu-toggler').on('click', function() {
		$('body').toggleClass('show-menu');
		$('#mobile-menu-overlay').toggle(300);
		
	});
});