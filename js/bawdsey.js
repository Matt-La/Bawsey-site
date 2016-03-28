
<!--Slide out navigation menu -->

$(document).ready(function() {

	$("#toggleMenu").click(function() {
		$(".row ul").toggle('slide', {direction: 'left'}, 500);
	});

	$("#menuOut").click(function() {
		$(".row ul").toggle('slide', {direction: 'left'}, 500);
	});
});

<!-- End slide out navigation menu -->





<!--Start of page scroll effect -->

$(document).ready(function() {

	$(function() {
	  $('a[href*=#]:not([href=#])').click(function() {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	      var target = $(this.hash);
	      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	      if (target.length) {
	        $('html,body').animate({
	          scrollTop: target.offset().top
	        }, 500);
	        return false;
	      }
	    }
	  });
	});	


	var carouselOffset = $("#carousel").offset().top;
	var aboutOffset = $("#about").offset().top;
	var reviewsOffset = $("#reviews").offset().top;
	var beachOffset = $("#beach").offset().top;
	var contactOffset = $("#contact").offset().top;

	var $w = $(window).scroll(function(){

		if ($w.scrollTop() >= carouselOffset) {
			
		}

		if ($w.scrollTop() >= aboutOffset) {
			
		}

		if ($w.scrollTop() >= reviewsOffset) {
			
		}

		if ($w.scrollTop() >= beachOffset) {
		
		}

		if ($w.scrollTop() >= beachOffset) {
			}
	});
});
 
 <!--End of page scroll effect -->
	
<!-- Quotes carousel -->
(function() {

    var quotes = $(".quotes");
    var quoteIndex = -1;
    
    function showNextQuote() {
        ++quoteIndex;
        quotes.eq(quoteIndex % quotes.length)
            .fadeIn(2000)
            .delay(2000)
            .fadeOut(2000, showNextQuote);
    }
    
    showNextQuote();
    
})();

<!-- End of quotes carousel -->