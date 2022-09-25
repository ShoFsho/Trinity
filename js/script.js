$(document).ready(function(){
	$(".owl-carousel").owlCarousel();
});

$('.owl-carousel').owlCarousel({
	loop:true,
	nav:true,
	autoplay:true,
	autoplayTimeout:5000,
	autoplayHoverPause:true,
	responsive:{
		0:{
			items:1
		},
		660:{
			items:2
		},
		1000:{
			items:3
		}
	}
})

$(window).on("scroll", function() {

	if ($(window).scrollTop() > 500){
		$('.header-area').addClass('header-fixed');
		$('.navbar-nav > li > a').addClass('color-black')
		$(' nav > div > div:nth-child(1) > img').attr('src', 'img/logo-black.svg')
	}
	// else if ($(window).scrollTop() > 600){
	// 	$('#navbarNav > ul > li:nth-child(1) > a').removeClass('color-black');
	// }

	else {
		$('.header-area').removeClass('header-fixed');
		$('.navbar-nav > li > a').removeClass('color-black');
		$(' nav > div > div:nth-child(1) > img').attr('src', 'img/logo.svg')

	}


});


$(function(){
	$('.navbar-collapse').hide();

	$('.container-fluid > button').click(function(){
		$('.navbar-collapse').show();
	})
})