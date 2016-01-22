jQuery.noConflict();


jQuery(function($){
	
	var $respMenu = $('#main-menu').clone();
	$respMenu.prop('id','main-menu-mobile');
	$('body').prepend($respMenu);
	
	
	$('#menu-toggler').on('click', function() {
		$('body').toggleClass('show-menu');
	});
});