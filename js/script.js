// slider
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
// scroll
$(window).on("scroll", function() {

	if ($(window).scrollTop() > 500){
		$('.header-area').addClass('header-fixed');
		$('.navbar-nav > li > a').addClass('color-black');
		$(' nav > div > div:nth-child(1) > img').attr('src', 'img/logo-black.svg');
		$('body > section.background > header > div > div > div > nav > div > button > span').removeClass('navbar-toggler-icon').addClass('navbar-black');
	}

	else {
		$('.header-area').removeClass('header-fixed');
		$('.navbar-nav > li > a').removeClass('color-black');
		$('body > section.background > header > div > div > div > nav > div > button > span').removeClass('navbar-black').addClass('navbar-toggler-icon');
		$(' nav > div > div:nth-child(1) > img').attr('src', 'img/logo.svg');
	}
});

// при нажатии на кнопку добавляються стили
$(function(){
	$('.container-fluid > button').click(function(){
		// if ($(window).width() < 992){
			$('#navbarNav > ul > li > a').addClass('border-li');
			$('#navbarNav > ul').addClass('border-ul');
		// }
	})
})

// скрывает список при нажатии на ли
$(function(){
	$('#navbarNav > ul > li').click(function(){
		$('body > section.background > header > div > div > div > nav > div > div').removeClass('show');
	})
})

// $(function() {
// 	$('#about > div > div > div.col-lg-7.col-md-12.col-sm-12 > img').hide();

// 	if ($(window).scrollTop() > 500){
// 		$('#about > div > div > div.col-lg-7.col-md-12.col-sm-12 > img').show(500);
// 	}
// })