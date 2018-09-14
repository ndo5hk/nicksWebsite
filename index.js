$(document).ready(function() {

	$('.jumbotron').delay(300).animate({ opacity: 0.75 }, 1000);
	$('.nick-image').delay(600).animate({ opacity: 0.90 }, 2000);

	$('.secondWindow').height($(window).height());
	$('.nick-image').height($(window).height()*0.25);
	$('.jumbotron').height($(window).height()*0.05);

	$(window).resize(function() {
		$('.secondWindow').height($(window).height());
		$('.nick-image').height($(window).height()*0.25);
		$('.jumbotron').height($(window).height()*0.05);
		$("#downArrow").animate({bottom: $(window).height()*0.445},1);
	})



	$('.link').each(function() {
		$(this).mouseover(function() {
			$(this).css("background-color" , "#9DCDA2");
		});
		$(this).mouseout(function() {
			$(this).css("background-color", "");
		});
	})

	$('.clickable').each(function() {
		$(this).mouseover(function() {
			$(this).css("color" , "#6BAD72");
		});
		$(this).mouseout(function() {
			$(this).css("color", "");
		});
	});

	$('#downArrow').click(function() {
		$("html, body").animate({ scrollTop: $('.bg').height()}, "slow");
		// $("#video-container").delay(300).animate({ opacity: 1.0 }, 1000);
	});

	// $( "#brand" ).mouseover(function() {
	// 	$("#brand").css("color" , "#6BAD72");
	// });
	// $("#brand").mouseout(function() {
	// 	$("#brand").css("color", "");
	// });

   	$("#downArrow").animate({bottom: $(window).height()*0.445},3000);
  });