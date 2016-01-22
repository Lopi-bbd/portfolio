jQuery.noConflict();


jQuery(function($){
	
	$('#menu-toggler').on('click', function() {
		$('body').toggleClass('show-menu');
	});
});