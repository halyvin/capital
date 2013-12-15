$(document).ready(function(){

	// init UI
	if ($('.slider').size()) $('.slider').slider();
	if ($('.select').size()) $('.select').selectpicker();
	if ($('.quantity_select').size()) customQuantity();
	


	// Info Slider
	function infoSlider(){
		var slider = $('.info_slider__viewport');
		var slides = slider.find('.info_slider__item');
		var slidesSize = slides.length;
		var dotsWrap = $('.info_slider__dots');

		function initDots(){
			var current = ' current';
			var allDots = '';

			// creating all dots
			for (var i = 0; i < slidesSize; i++) {
				var dotTemp = '<li class="info_slider__dot_item'+current+'"></li>';
				allDots = allDots + dotTemp;
				current = '';
			};
			dotsWrap.html(allDots);

			initSliderFuncs();
		} initDots();

		function initSliderFuncs(){
			var dots = $('.info_slider__dot_item');
			dotsWrap.attr('data-current', 0);

			dots.on('click', function(){
				var index = $(this).index();
				dotsWrap.attr('data-current', index);

				dots.removeClass('current');
				slides.removeClass('current');

				$(this).addClass('current');
				slides.eq(index).addClass('current');
			});

			function autoPlay(){
				var dotsSize = dots.length;

				var play = setInterval(function(){
					var current = dotsWrap.attr('data-current')-0;
					if (current+1 == dotsSize) current = -1;
					dotsWrap.attr('data-current', current+1)
					dots.eq(current+1).click();
				},10000);
			} autoPlay();
		};
	};
	if ($('.info_slider__viewport').size()) infoSlider();

	
});