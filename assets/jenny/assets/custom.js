$(document).ready( function() {

	//scrolly clicky things
	$(function() {
	  $('a[href*=#]:not([href=#])').click(function() {
	  	
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {

	      var target = $(this.hash);

	      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');

	      if (target.length) {
	        $('html,body').animate({
	          scrollTop: target.offset().top
	        }, 1000);
	        return false;
	      }
	    }
	  });
	});

	//slider
	$(function(){

			//Set image width, slider speed, pause time and initialise current slide
			var width = 473, slideSpeed = 1000, pause = 3000, curSlide = 0;

			//Get slider, ul container and sliders through DOM and store in variables
			var $slider = $('#slider'), $slideContainer = $slider.find('.slides'), $slide = $slider.find('.slide');

			//Get total number of slides
			var totSlides = (width * $slide.length) - width;

			//Interval
			var interval;

			//Start moving slider
			function startSlider(){
				//set interval
				interval = setInterval(function(){

					//Check if we're on last slide
					if(curSlide == $slide.length-1){

							//If on last slide go back to beginning
							$slideContainer.delay(slideSpeed);
							$slideContainer.animate({'margin-left': '+='+totSlides+'px'}, slideSpeed);
							curSlide = 0;
						} else {
							$($slideContainer).animate({'margin-left': '-='+width+'px'}, slideSpeed, function(){

							//Increment current slide
							curSlide++;
							});
						}

					
				}, pause);
			}

			//Pause slider
			function stopSlider(){
				clearInterval(interval);
			}

			//If mouseover stop movement, if mouseleave restart slider
			$slider.on('mouseenter', stopSlider).on('mouseleave', startSlider);

			//Begin sliding
			startSlider();

		});
});

