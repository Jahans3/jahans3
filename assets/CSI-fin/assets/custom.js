$(document).ready(function(){
	// Menu
	$('.menu').click(function() {
	    $('.nav-wrapper').slideToggle(420);
	    $(this).toggleClass('color-toggle');
	});
	// 
	// Search
	$('.search-icon').click(function() {
	    $('.search-input').toggleClass('show-search');
	    $(this).toggleClass('color-toggle');
	});
	//Slider
	$('.jumbotron').slick({
		dots: true
	});
	// Google Maps
	function initialise() {
		var mapCanvas = document.getElementById('map-canvas');
		var mapOptions = {
	      center: new google.maps.LatLng(53.090723, -2.412407),
	      zoom: 15,
	      mapTypeId: google.maps.MapTypeId.ROADMAP,
	      scrollwheel: false
	    }
    	var map = new google.maps.Map(mapCanvas, mapOptions);
	}
	google.maps.event.addDomListener(window, 'load', initialise);

});