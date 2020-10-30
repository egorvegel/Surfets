$(function () {
	$(".header__nav__link").on("click", function (e) {
		e.preventDefault();

		let attr = $(this).attr("href");
		console.log($(attr).offset().top);
		$("html").animate({
			scrollTop: $(attr).offset().top,
		}, 800)
	})




	/* slider */
	$(".slider").slick({
		arrows: false,
		dots: false,
		slidesToShow: 4,

		autoplay: true,
		autoplaySpeed: 3000,//  По умолчанию - 3к

		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					arrows: false,
					dots: true,
				}
			},
			{
				breakpoint: 756,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					arrows: false,
					dots: true,
				}
			},
			{
				breakpoint: 500,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					arrows: false,
					dots: true,
				}
			},
		]
	});

	$(".slick-prev").text("←");
	$(".slick-next").text("→");
})